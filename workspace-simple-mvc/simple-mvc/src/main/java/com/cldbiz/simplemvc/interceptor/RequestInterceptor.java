package com.cldbiz.simplemvc.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.cldbiz.simplemvc.config.AppExecutionContext;

@Component
public class RequestInterceptor implements HandlerInterceptor{ 

	 public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		 AppExecutionContext.setLocale(request.getLocale());
        
		 return true;
    }
}
   
