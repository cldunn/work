package com.cldbiz.oauth2App.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.oauth2App.common.JsonResponse;

@RestController
@RequestMapping("/v1")
public class AppController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(AppController.class);

	@GetMapping(value="/initApp", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages("global", "app");
		
		JsonResponse jsonResp = JsonResponse.getBuilder().addData("i18n", i18n).built();
		
		LOGGER.info("initApp called, this info message will appear in dev and prod profiles");
		LOGGER.debug("initApp called, will appear only in dev profile");
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

}
