package com.cldbiz.simplemvc.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	
	@ExceptionHandler(ApplicationException.class)
	public ResponseEntity<JsonResponse> handleApplicationExcpetion(ApplicationException appEx, WebRequest request) {
		LOGGER.info("This is an informative message from exception handler");
		LOGGER.debug("This is a debug message from exception handler");
		
		// TODO: ONLY IN DEBUG MODE
		appEx.printStackTrace();
		
		String contentMsg = 
			appEx.getContent() == null ?
				appEx.getStatusCode().getReasonPhrase() : appEx.getContent();
		
		JsonResponse mv = JsonResponse.getBuilder(contentMsg, appEx.getDetails()).built();
		return new ResponseEntity<JsonResponse>(mv, appEx.getStatusCode());
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<JsonResponse> handleRuntimeExcpetion(Exception ex, WebRequest request) {
		// TODO: ONLY IN DEBUG MODE
		ex.printStackTrace();
		
		String errMsg = 
			ex.getMessage() == null ? 
				HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase() : ex.getMessage();
		
		JsonResponse mv = JsonResponse.getBuilder(errMsg).built();
		return new ResponseEntity<JsonResponse>(mv, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
