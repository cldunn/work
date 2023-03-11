package com.cldbiz.oauth2Srv.config;

import com.cldbiz.oauth2Srv.spring.UserDetail;


// NEED TO REFACTOR NAME, CONFLICTS WITH SPRING SECURITY OBJECT
public class ExecutionContextInfo {
	private UserDetail userDetail;
	
	public UserDetail getUserDetail() {
		return userDetail;
	}

	public void setUserDetail(UserDetail userDetail) {
		this.userDetail = userDetail;
	}
}

