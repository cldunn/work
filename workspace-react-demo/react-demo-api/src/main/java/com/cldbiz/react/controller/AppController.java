package com.cldbiz.react.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.react.common.JsonResponse;
import com.cldbiz.react.service.EncryptionService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@RequestMapping("/v1")
public class AppController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(AppController.class);

	@Autowired
	EncryptionService encryptionService;
	
	@GetMapping(value="/initApp", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages("global", "app");
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("i18n", i18n)
			.built();
		
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
	
	@PostMapping(value="login", produces="application/json")
	public ResponseEntity<JsonResponse> login(@RequestBody ObjectNode json) {
		
		// Post receives parameters an an object,  ObjectNode is a JsonNode Tree of the body
		// Use ObjectNode in cases where a DTO is overkill (eg. no similar domain object)
		String name = json.get("name").asText();
		String password = json.get("password").asText();
		
		try {
			String _pwd = encryptionService.decrypt(password);
			if (!"MyVoiceIsMyPassword".equals(_pwd)) {
				JsonResponse jsonResp = JsonResponse.getBuilder("Failed to match contrived password").built();
				return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		catch (Exception ex) {
			JsonResponse jsonResp = JsonResponse.getBuilder(ex.getMessage()).built();
			return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		JsonResponse jsonResp = JsonResponse.getBuilder().built();
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}
}
