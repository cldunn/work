package com.cldbiz.simplemvc.interceptor;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.cldbiz.simplemvc.common.JsonResponse;
import com.cldbiz.simplemvc.controller.SimpleMvcController;
import com.cldbiz.simplemvc.exception.ApplicationException;

@ControllerAdvice
public class ControllerExceptionHandler extends ResponseEntityExceptionHandler {
	private static final Logger LOGGER = LoggerFactory.getLogger(ControllerExceptionHandler.class);
	
	@Autowired
	private Environment environment;
	
	@ExceptionHandler(ApplicationException.class)
	public ResponseEntity<JsonResponse> handleApplicationExcpetion(ApplicationException appEx, WebRequest request) {

		if (Arrays.asList(environment.getActiveProfiles()).contains("dev")) {
			// Only if running in dev mode
			appEx.printStackTrace();
		}
		
		String contentMsg = 
			appEx.getContent() == null ?
				appEx.getStatusCode().getReasonPhrase() : appEx.getContent();
		
		JsonResponse jsonResp = JsonResponse.getBuilder(contentMsg, appEx.getDetails())
				.addData(appEx.getData())
				.built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, appEx.getStatusCode());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<JsonResponse> handleRuntimeExcpetion(Exception ex, WebRequest request) {
		
		if (Arrays.asList(environment.getActiveProfiles()).contains("dev")) {
			// Only if running in dev mode
			ex.printStackTrace();
		}
		
		String errMsg = 
			ex.getMessage() == null ? 
				HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase() : ex.getMessage();
		
		JsonResponse mv = JsonResponse.getBuilder(errMsg).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
