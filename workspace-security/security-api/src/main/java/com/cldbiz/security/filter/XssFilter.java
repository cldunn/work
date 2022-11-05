package com.cldbiz.security.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.web.multipart.support.StandardMultipartHttpServletRequest;

import com.cldbiz.security.antisamy.SecurityUtil;

public class XssFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		
		String contentType = httpRequest.getContentType();
		String method = httpRequest.getMethod();
		
		// validate host logic goes here
		String allowedHosts = ""; // get comma seperated string of <host>[:<port>], ... from properties
		String host = httpRequest.getHeader("Host");  // RFC 2616-sec14
		if (!allowedHosts.contains(host)) {
			// throw exception here
		}

		if (contentType != null && contentType.startsWith("multipart") && "POST".equalsIgnoreCase(method)) {
			StandardMultipartHttpServletRequest multipartRequest;
			try {
				multipartRequest = new StandardMultipartHttpServletRequest(httpRequest);
				// validate multipartRequest using getParts()
			}
			catch (Exception ex) {
				// throw exception for invalid multipart request 
			}
		}
		else {
			// Just getting the body will sanitize the input
			IOUtils.toString(httpRequest.getInputStream(), "UTF-8");
		}

		chain.doFilter(httpRequest, httpResponse);
	}

}
