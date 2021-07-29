package com.cldbiz.simplemvc.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;

import com.cldbiz.simplemvc.common.I18nMessage;

public class ApplicationException extends RuntimeException {
	private String content;
	private List<String> details = new ArrayList<String>();
	private HttpStatus statusCode = HttpStatus.BAD_REQUEST;
	
	public ApplicationException() {
		super(new RuntimeException());
	}

	public ApplicationException(HttpStatus statusCode) {
		super(new RuntimeException());
		this.statusCode = statusCode;
	}

	public ApplicationException(String content) {
		super(new RuntimeException());
		this.content = content;
	}
	
	public ApplicationException(HttpStatus statusCode, String content) {
		super(new RuntimeException());
		this.statusCode = statusCode;
		this.content = content;
	}

	public ApplicationException(String content, String... details) {
		super(new RuntimeException());
		this.content = content;
		this.details = Arrays.asList(details);
	}

	public ApplicationException(HttpStatus statusCode, String content, String... details) {
		super(new RuntimeException());
		this.statusCode = statusCode;
		this.content = content;
		this.details = Arrays.asList(details);
	}

	public HttpStatus getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(HttpStatus statusCode) {
		this.statusCode = statusCode;
	}

	public void addDetail(String detail) {
		this.details.add(detail);
	}
	
	public String getContent() {
		return this.content;
	}
	
	public List<String> getDetails() {
		return details;
	}
}
