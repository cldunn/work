package com.cldbiz.security.filter.support;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

import org.apache.commons.io.IOUtils;

import com.cldbiz.security.antisamy.SecurityUtil;

public class RequestWrapper extends HttpServletRequestWrapper {
	private HttpServletRequest request;
	private ByteArrayOutputStream cachedBytes = new ByteArrayOutputStream();
	
	private void cacheInputStream() throws IOException {
		cachedBytes = new ByteArrayOutputStream();
		IOUtils.copy(super.getInputStream(), cachedBytes);
		SecurityUtil.sanitizeInput(cachedBytes.toString());
	}
	
	public RequestWrapper(HttpServletRequest request) {
		super(request);
		this.request = request;
		
		try {
			cacheInputStream();
		}
		catch (IOException ex) {
			cachedBytes.reset();
		}
	}

	@Override
	public String getHeader(String name) {
		String value = super.getHeader(name);
		if (value != null) {
			try {
				SecurityUtil.sanitizeInput(value);
			}
			catch (Exception ex) {
				System.out.println("getHeader: " + name);
			}
		}
		
		return value;
	}
	
	
	@Override
	public Enumeration getHeaders(String name) {
		List headers = new ArrayList();
		Enumeration enumeration = super.getHeaders(name);
		while (enumeration.hasMoreElements()) {
			Object obj = enumeration.nextElement();
			headers.add(SecurityUtil.sanitizeInput(obj.toString()));
		}
		return Collections.enumeration(headers);
	}
	
	
	@Override
	public String getParameter(String name) {
		String value = super.getParameter(name);
		if (value != null) {
			SecurityUtil.sanitizeInput(value);
		}
		
		return value;
	}
	
	@Override
	public String[] getParameterValues(String name) {
		String[] values = super.getParameterValues(name);
		for (int i = 0; i < values.length; i++) {
			SecurityUtil.sanitizeInput(values[i]);
		}
		
		return values;
	}

	@Override
	public String getQueryString() {
		String value = super.getQueryString();
		if (value != null) {
			SecurityUtil.sanitizeInput(value);
		}
		
		return value;
	}

	@Override
	public BufferedReader getReader() throws IOException {
		// if (cachedBytes == null) cacheInputStream();
		
		ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(cachedBytes.toByteArray());
		return new BufferedReader(new InputStreamReader(byteArrayInputStream));
	}
	
	@Override
	public ServletInputStream getInputStream() throws IOException {
		// if (cachedBytes == null) cacheInputStream();
		
		return new CachedRequestServletInputStream(cachedBytes.toByteArray());
	}
}
