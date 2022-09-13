package com.cldbiz.security.controller;

import java.text.SimpleDateFormat;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.security.common.JsonResponse;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.cldbiz.security.service.EncryptionService;

@RestController
@RequestMapping("/v1")
public class SecurityController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityController.class);

	@Autowired
	EncryptionService encryptionService;
	
	@GetMapping(value="/initApp", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages("global", "app");
		
		JsonResponse jsonResp = JsonResponse.getBuilder().addData("i18n", i18n).built();
		
		// profiles can define different logging levels
		LOGGER.info("initApp called, this info message will appear in dev and prod profiles");
		LOGGER.debug("initApp called, will appear only in dev profile");
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
	
	@GetMapping(value="/getPublicKey", produces="application/json") 
	public ResponseEntity<JsonResponse> getPublicKey() {
		// Get certification public key
		String publicKey = encryptionService.getPublicKey();
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("publicKey", publicKey)
			.built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
	
	@PostMapping(value="/login", produces="application/json")
	public ResponseEntity<JsonResponse> login() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		JsonResponse jsonResp = JsonResponse.getBuilder("Successfully logged in: " + auth.isAuthenticated()).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
	
	@PostMapping(value="/doTest", produces="application/json")
	public ResponseEntity<JsonResponse> doTest() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		
		JsonResponse jsonResp = JsonResponse.getBuilder("Still logged in: " + auth.isAuthenticated()).built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*
	public ResponseEntity<JsonResponse> login(@RequestBody ObjectNode json) {
		SimpleDateFormat simpleDateFormatter = new SimpleDateFormat("HH:mm:ss");
		
		// Post receives parameters an an object,  ObjectNode is a JsonNode Tree of the body
		// Use ObjectNode in cases where a DTO is overkill (eg. no similar domain object)
		String name = json.get("name").asText();
		String password = json.get("password").asText();
		
		JsonResponse jsonResp = JsonResponse.getBuilder(name + ":" + password + " successfully logged in.").built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
	*/
	
	@GetMapping(value="/hello")
	public String hello() {
		return "Hello!";
	}
}
