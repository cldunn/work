package com.cldbiz.react.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.react.common.JsonResponse;

@RestController
@RequestMapping("/v1/cookie")
public class CookieController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(CookieController.class);
	
	@GetMapping(value="/pageConfig", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages("cookie");
		
		Calendar cal = Calendar.getInstance();
		cal.set(1959, Calendar.MARCH, 5); //Year, month and day of month
		Date birthDate = cal.getTime();
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("birthDateStr", dateFormatter(Timestamp.from(Instant.now())))
			.addData("userName", "cldunn")
			.addData("i18n", i18n)
			.built();
		
		LOGGER.info("pageConfig called, this info message will appear in dev and prod profiles");
		LOGGER.debug("pageConfig called, will appear only in dev profile");
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	private String dateFormatter(Timestamp ts) {
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss.000");
		try {
			return sdf.format(ts);
		}
		catch (Exception ex) {
			return null;
		}
	}
}
