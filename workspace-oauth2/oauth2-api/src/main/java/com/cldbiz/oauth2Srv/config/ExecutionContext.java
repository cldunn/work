package com.cldbiz.oauth2Srv.config;

import org.springframework.stereotype.Component;

import com.cldbiz.oauth2Srv.spring.UserDetail;

@Component
public class ExecutionContext {

	private static final ThreadLocal<ExecutionContextInfo> appContext =
        new ThreadLocal<ExecutionContextInfo>() {
            @Override protected ExecutionContextInfo initialValue() {
                return new ExecutionContextInfo();
        }
    };

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
