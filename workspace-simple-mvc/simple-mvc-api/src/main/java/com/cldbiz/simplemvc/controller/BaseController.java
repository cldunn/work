package com.cldbiz.simplemvc.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.cldbiz.simplemvc.service.MessageService;

public abstract class BaseController {
	@Autowired
	MessageService messageService;
	
	protected String getMessage(String key) {
		return messageService.getMessage(key);
	}
	
	protected String getMessage(String key, String... args) {
		return messageService.getMessage(key, args);
	}

	protected Map<String, String> getMessages(String... prefixes) {
		return messageService.getMessages(prefixes);
	}
	
}
