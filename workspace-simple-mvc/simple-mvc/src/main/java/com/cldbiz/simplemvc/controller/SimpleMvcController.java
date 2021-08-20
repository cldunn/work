package com.cldbiz.simplemvc.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.simplemvc.common.JsonResponse;
import com.cldbiz.simplemvc.domain.Person;
import com.cldbiz.simplemvc.dto.PresidentDto;
import com.cldbiz.simplemvc.exception.ApplicationException;
import com.cldbiz.simplemvc.service.PersonService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@RequestMapping("/v1")
public class SimpleMvcController extends BaseController {
	private static final Logger LOGGER = LoggerFactory.getLogger(SimpleMvcController.class);
	
	@Autowired
	PersonService personSerivce;

	/*************************************************************************
	 * Passes in no parameters, 
	 * returns no message triggering no UI, returns data and status OK 
	 *************************************************************************/
	@GetMapping(value="/simpleMvc/initApp", produces="application/json") 
	public ResponseEntity<JsonResponse> initApp() {
		// retrieve UI labels
		Map<String, String> i18n = getMessages("btn", "lbl", "msg");
		
		JsonResponse jsonResp = JsonResponse.getBuilder()
			.addData("i18n", i18n).built();
		
		LOGGER.info("initApp called, this info message will appear in dev and prod profiles");

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*************************************************************************
	 * Passes in no parameters, 
	 * returns simple message triggering UI alert, returns data and status OK 
	 *************************************************************************/
	@GetMapping(value="/simpleMvc/findWashington", produces="application/json") 
	public ResponseEntity<JsonResponse> findWashington() {
		Person person = personSerivce.getPerson("George", "Washinton");
		
		String message = getMessage("global.success");
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message)
			.addData("person", person).built();
		
		LOGGER.info("findWashington info message, will appear in dev and prod profiles");
		LOGGER.debug("findWashington debug message, will appear only in dev profile");

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*************************************************************************
	 * Passes path variable parameter, 
	 * returns simple message triggering UI alert, returns data and status OK 
	 *************************************************************************/
	@GetMapping(value="/simpleMvc/findAdams/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findAdams(
			@PathVariable("id") Long id) {
		Person person = personSerivce.getPerson("John", "Adams");
		
		String message = getMessage("msg.get.pathVar", id.toString());
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).addData("person", person).built();
		
		LOGGER.info("findAdams info message, will appear in dev and prod profiles");
		LOGGER.debug("findAdams debug message, path variable {}, will appear only in dev profile", id);
		
		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/*************************************************************************
	 * Passes in query string parameter, 
	 * returns detailed message triggering UI modal, returns data and status OK 
	 *************************************************************************/
	@GetMapping(value="/simpleMvc/findJefferson", produces="application/json") 
	public ResponseEntity<JsonResponse> findJefferson(
			@RequestParam(value="year", required=true) String year) {
		Person person = personSerivce.getPerson("Thomas", "Jefferson");

		String message = getMessage("msg.get.qryStr.content");
		String detail = getMessage("msg.get.qryStr.detail", year);
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message, List.of(detail))
			.addData("person", person).built();
		
		LOGGER.info("findJefferson info message, will appear in dev and prod profiles");
		LOGGER.debug("findJefferson debug message, " +
					 "query string parameter {}, will appear only in dev profile", year);

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.OK);
	}

	/**********************************************************************************
	 * Passes in path variable and query string parameter, 
	 * returns simple message triggering UI modal, returns data and status UNAUTHORIZED 
	 **********************************************************************************/
	@GetMapping(value="/simpleMvc/findLincoln/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findLincoln(
			@PathVariable("id") Long id,
			@RequestParam(value="year") String year) {
		Person person = personSerivce.getPerson("Abraham", "Lincoln");
		
		String message = getMessage("msg.get.pathVarAndQryStr", id.toString(), year);
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message).addData("person", person).built();
		
		LOGGER.info("findLincoln info message, will appear in dev and prod profiles");
		LOGGER.debug("findLincoln debug message, " +
					 "path variable {} and query string {} parameters, " +
					 "will appear only in dev profile", id, year);

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.UNAUTHORIZED);
	}

	/************************************************************************************
	 * Passes in query string parameter into dto, 
	 * returns detailed message triggering UI modal, returns data and status UNAUTHORIZED 
	 ************************************************************************************/
	@GetMapping(value="/simpleMvc/findWilson", produces="application/json") 
	public ResponseEntity<JsonResponse> findWilson(PresidentDto presidentDto) {
		Person person = personSerivce.getPerson("Woodrow", "Wilson");

		String message = getMessage("msg.get.qryStrDto.content");
		String detail = getMessage("msg.get.qryStrDto.detail", presidentDto.getYear());
		
		JsonResponse jsonResp = JsonResponse.getBuilder(message, List.of(detail))
			.addData("person", person).built();

		LOGGER.info("findWilson info message, will appear in dev and prod profiles");
		LOGGER.debug("findWilson debug message, " +
				     "query string {} parameter, " +
				     "will appear only in dev profile", presidentDto.getYear());

		return new ResponseEntity<JsonResponse>(jsonResp, HttpStatus.UNAUTHORIZED);
	}

	/************************************************************************************
	 * Passes in path variable and query string parameter into dto, 
	 * throws application exception with simple message triggering UI alert, 
	 * returns data and status OK 
	 ************************************************************************************/
	@GetMapping(value="/simpleMvc/findTruman/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findTruman(
			@PathVariable("id") Long id,
			PresidentDto presidentDto) {
		Person person = personSerivce.getPerson("Harry", "Truman");

		String message = getMessage("msg.get.pathVarAndQryStrDto", 
			id.toString(), presidentDto.getYear());
		
		LOGGER.info("findTruman info message, will appear in dev and prod profiles");
		LOGGER.debug("findTruman debug message, " +
			     	 "path variable {} and query string {} parameter, " +
			         "will appear only in dev profile", id, presidentDto.getYear());

		throw new ApplicationException(message)
			.addData("person", person)
			.setStatusCode(HttpStatus.OK);
	}

	/************************************************************************************
	 * Passes body parameter, 
	 * throws application exception with detail message triggering UI modal, 
	 * returns data and status OK 
	 ************************************************************************************/
	@PostMapping(value="/simpleMvc/findEisenhower", produces="application/json") 
	public ResponseEntity<JsonResponse> findEisenhower(@RequestBody ObjectNode json) {
		// Post receives parameters an an object,  ObjectNode is a JsonNode Tree of the body
		String year = json.get("year").asText();
		
		Person person = personSerivce.getPerson("Dwight", "Eisenhower");

		String message = getMessage("msg.post.body.content");
		String detail = getMessage("msg.post.body.detail", year);
		
		LOGGER.info("findEisenhower info message, will appear in dev and prod profiles");
		LOGGER.debug("findEisenhower debug message, body parameter {}, " +
			         "will appear only in dev profile", year);

		throw new ApplicationException(message, detail)
			.addData("person", person)
			.setStatusCode(HttpStatus.OK);
	}

	/************************************************************************************
	 * Passes path variable and body parameter, 
	 * throws application exception with simple message triggering UI modal, 
	 * returns data and status UNAUTHORIZED 
	 ************************************************************************************/
	@PostMapping(value="/simpleMvc/findKennedy/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findKennedy(
			@PathVariable("id") Long id,
			@RequestBody ObjectNode json) {
		// Post receives parameters an an object,  ObjectNode is a JsonNode Tree of the body
		String year = json.get("year").asText();
				
		Person person = personSerivce.getPerson("John", "Kennedy");
		
		String message = getMessage("msg.post.pathVarAndBody", id.toString(), year);
		
		LOGGER.info("findKennedy info message, will appear in dev and prod profiles");
		LOGGER.debug("findKennedy debug message, path variable {} and body parameter {}, " +
			         "will appear only in dev profile", id, year);

		throw new ApplicationException(message)
			.addData("person", person)
			.setStatusCode(HttpStatus.UNAUTHORIZED);
	}

	/************************************************************************************
	 * Passes body parameter into dto, 
	 * throws application exception with detail message triggering UI modal, 
	 * returns data and status UNAUTHORIZED 
	 ************************************************************************************/
	@PostMapping(value="/simpleMvc/findJohnson", produces="application/json") 
	public ResponseEntity<JsonResponse> findJohnson(@RequestBody PresidentDto presidentDto) {
		Person person = personSerivce.getPerson("Lyndon", "Johnson");

		String message = getMessage("msg.post.bodyDto.content");
		String detail = getMessage("msg.post.bodyDto.detail", presidentDto.getYear());
		
		LOGGER.info("findJohnson info message, will appear in dev and prod profiles");
		LOGGER.debug("findJohnson debug message, body parameter {}, " +
			         "will appear only in dev profile", presidentDto.getYear());

		throw new ApplicationException(message, detail)
		.addData("person", person)
		.setStatusCode(HttpStatus.UNAUTHORIZED);
	}

	/************************************************************************************
	 * Passes path variable and body parameter into dto, 
	 * throws null pointer exception with simple message triggering UI modal, 
	 * returns no data and status INTERNAL_SERVER_ERROR
	 ************************************************************************************/
	@PostMapping(value="/simpleMvc/findReagan/{id}", produces="application/json") 
	public ResponseEntity<JsonResponse> findReagan(
			@PathVariable("id") Long id,
			@RequestBody PresidentDto presidentDto) {
		Person person = null;
		
		LOGGER.info("findReagan info message, will appear in dev and prod profiles");
		LOGGER.debug("findReagan debug message, path variable {} and body parameter {}, " +
			         "will appear only in dev profile", id, presidentDto.getYear());
		
		// Force a NullPointer Exception
		person.setFirstName("Ronald");
		person.setLastName("Reagan");
		
		return null;
	}

}

