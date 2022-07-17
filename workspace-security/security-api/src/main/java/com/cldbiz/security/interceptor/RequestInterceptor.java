package com.cldbiz.security.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.cldbiz.security.config.SecurityExecutionContext;

/* 
 * Intercept all API endpoints and set up thread locale vars, similar functionality to filters
 */
@Component
public class RequestInterceptor implements HandlerInterceptor{ 

	 public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		 SecurityExecutionContext.setLocale(request.getLocale());
        
		 return true;
    }
}
   
