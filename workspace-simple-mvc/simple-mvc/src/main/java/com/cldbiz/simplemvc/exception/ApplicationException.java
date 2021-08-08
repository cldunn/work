package com.cldbiz.simplemvc.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;

import com.cldbiz.simplemvc.common.I18nMessage;

public class ApplicationException extends RuntimeException {
	private String content;
	private List<String> details = new ArrayList<String>();
	private HttpStatus statusCode = HttpStatus.BAD_REQUEST;
	private Map<String, Object> data = new HashMap<String, Object>();
	
	public ApplicationException() {
		super(new RuntimeException());
	}

	public ApplicationException(String content) {
		super(new RuntimeException());
		this.content = content;
	}
	
	public ApplicationException(String content, String... details) {
		super(new RuntimeException());
		this.content = content;
		this.details = Arrays.asList(details);
	}

	public HttpStatus getStatusCode() {
		return statusCode;
	}

	public ApplicationException setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
		return this;
	}

	public String getContent() {
		return this.content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}

	public List<String> getDetails() {
		return details;
	}

	public ApplicationException addDetail(String detail) {
		this.details.add(detail);
		return this;
	}

	public Map<String, Object> getData() {
		return this.data;
	}

	public ApplicationException addData(String key, Object value) {
		this.data.put(key, value);
		return this;
	}
	
}
