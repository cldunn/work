package com.cldbiz.security.config;

import java.util.Locale;

import com.cldbiz.security.spring.UserDetail;


// NEED TO REFACTOR NAME, CONFLICTS WITH SPRING SECURITY OBJECT
public class ExecutionContextInfo {
	private Locale locale;
	private UserDetail userDetail;
	
	public Locale getLocale() {
		return locale;
	}

	public void setLocale(Locale locale) {
		this.locale = locale;
	}

	public UserDetail getUserDetail() {
		return userDetail;
	}

	public void setUserDetail(UserDetail userDetail) {
		this.userDetail = userDetail;
	}
}

