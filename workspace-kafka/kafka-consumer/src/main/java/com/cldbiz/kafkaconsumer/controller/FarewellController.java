package com.cldbiz.kafkaconsumer.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cldbiz.kafkashare.dto.Farewell;
import com.cldbiz.kafkashare.dto.Greeting;

@RestController
@RequestMapping("/v1")
public class FarewellController {
	private static final Logger LOGGER = LoggerFactory.getLogger(FarewellController.class);

    @PostMapping(value="/sayHello", produces="application/json") 
    public Farewell sayHello(@RequestBody Greeting greeting) throws Exception {
    	Farewell farewell = new Farewell("GoodBye", 6);
    	try {
	    	if (greeting.getMsg().contains("Guten")) {
	    		farewell.setMessage("Auf Wiedersehen");
	    	}
    	}
    	catch (Exception ex) {
    		throw ex;
    	}
    	 
    	return farewell;
    }
}
