package com.cldbiz.security.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.security.io.swagger.model.I18n;
import com.cldbiz.security.io.swagger.model.LvbMap;
import com.cldbiz.security.io.swagger.model.Message;
import com.cldbiz.security.service.MessageService;
import com.cldbiz.security.v1.home.HomeApi;
import com.cldbiz.security.v1.home.model.HomePageConfigResponse;
import com.cldbiz.security.v1.home.model.HomePageConfigResponseData;
import com.cldbiz.security.v1.home.model.Person;
import com.cldbiz.security.v1.home.model.PersonResponse;
import com.cldbiz.security.v1.home.model.PersonResponseData;
import com.cldbiz.security.v1.home.model.PersonsResponse;
import com.cldbiz.security.v1.home.model.PersonsResponseData;

import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping("/v1")
public class HomeController extends BaseController implements HomeApi {
	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	MessageService messageService;
	
	@Override
	public ResponseEntity<HomePageConfigResponse> pageConfig() {
		HomePageConfigResponseData homePageConfigResponseData = new HomePageConfigResponseData();
		
		homePageConfigResponseData.setI18n(new I18n());
		homePageConfigResponseData.getI18n().putAll(getMessages("home"));

		homePageConfigResponseData.setLvbMap(new LvbMap());
		homePageConfigResponseData.getLvbMap().putAll(getLvbs("gender"));
		
		Message message = new Message(messageService.getMessage("intro.message"));
		
		HomePageConfigResponse homePageConfigResponse = new HomePageConfigResponse();
		homePageConfigResponse.setData(homePageConfigResponseData);
		homePageConfigResponse.setMessage(message);
		
		return new ResponseEntity<HomePageConfigResponse>(homePageConfigResponse, HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<PersonResponse> getPerson(String personId) {
		Person person = new Person();
		if ("1".equals(personId)) {
			person.setFname("Cliff");
			person.setLname("Dunn");
			person.setGender("M");
		}
		else {
			person.setFname("Sabine");
			person.setLname("Dunn");
			person.setGender("F");
		}

		PersonResponseData personResponseData = new PersonResponseData();
		personResponseData.setPerson(person);
		
		Message message = new Message(messageService.getMessage("person.message"));
		
		PersonResponse personResponse = new PersonResponse();
		personResponse.setData(personResponseData);
		personResponse.setMessage(message);

		return new ResponseEntity<PersonResponse>(personResponse, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<PersonsResponse> getPersons(String fname, String lname) {
		Person person = new Person();
		if ("Cliff".equalsIgnoreCase(fname)) {
			person.setFname("Cliff");
			person.setLname("Dunn");
			person.setGender("M");
		}
		else {
			person.setFname("Sabine");
			person.setLname("Dunn");
			person.setGender("F");
		}

		PersonsResponseData personsResponseData = new PersonsResponseData();
		personsResponseData.setPersons(Arrays.asList(person));
		
		Message message = new Message(messageService.getMessage("person.message"));
		
		PersonsResponse personsResponse = new PersonsResponse();
		personsResponse.setData(personsResponseData);
		personsResponse.setMessage(message);

		return new ResponseEntity<PersonsResponse>(personsResponse, HttpStatus.OK);
	}
	
	@Override
	public ResponseEntity<PersonResponse> updPerson(Person person) {
		PersonResponseData personResponseData = new PersonResponseData();
		personResponseData.setPerson(person);

		Message message = new Message(messageService.getMessage("person.message"));
		
		PersonResponse personResponse = new PersonResponse();
		personResponse.setData(personResponseData);
		personResponse.setMessage(message);

		return new ResponseEntity<PersonResponse>(personResponse, HttpStatus.OK);
	}
}
