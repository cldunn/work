package com.cldbiz.reactcomponents.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import com.cldbiz.reactcomponents.dto.DateEditor;
import com.cldbiz.reactcomponents.service.MessageService;

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
