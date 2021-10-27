package com.cldbiz.reactcomponents.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.reactcomponents.common.JsonResponse;
import com.cldbiz.reactcomponents.dto.ItemDto;
import com.cldbiz.reactcomponents.service.ReactComponentsService;

@RestController
@RequestMapping("/v1")
public class ReactComponentsController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(ReactComponentsController.class);
	
	/*************************************************************************
	 * Passes in no parameters, 
	 * returns text for links in UI triggering routes, returns status OK 
	 *************************************************************************/
	@GetMapping(value="/initApp", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages();
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("i18n", i18n).built();
		
		LOGGER.info("initApp called, this info message will appear in dev and prod profiles");

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
	
}

