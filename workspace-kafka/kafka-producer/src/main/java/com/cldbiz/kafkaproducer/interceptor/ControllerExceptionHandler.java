package com.cldbiz.kafkaproducer.interceptor;

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

import com.cldbiz.kafkaproducer.common.JsonResponse;
import com.cldbiz.kafkaproducer.common.JsonResponseEntity;
import com.cldbiz.kafkaproducer.exception.ApplicationException;


/*
 * Intercept any exception thrown by any controller method and uniformly handle it here.
 * 
 * All business/application thrown should be caught and wrapped in an ApplicationException
 * 
 * All exception of any kind should result in a ResponseEntity<JsonResponse> being returned to the UI   
 */
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
