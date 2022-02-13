package com.cldbiz.jpa.config;

import java.util.Locale;

import com.cldbiz.jpa.dto.UserProfileDto;

public class AppContext {
	private Locale locale;
	private UserProfileDto userProfileDto;

	public Locale getLocale() {
		return locale;
	}

	public void setLocale(Locale locale) {
		this.locale = locale;
	}

	public UserProfileDto getUserProfileDto() {
		return userProfileDto;
	}

	public void setUserProfileDto(UserProfileDto userProfileDto) {
		this.userProfileDto = userProfileDto;
	}
}
