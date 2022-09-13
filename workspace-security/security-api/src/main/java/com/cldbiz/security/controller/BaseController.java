package com.cldbiz.security.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.cldbiz.security.service.AppCodeService;
import com.cldbiz.security.service.MessageService;
import com.cldbiz.security.util.LabelValueBean;

public abstract class BaseController {
	@Autowired
	MessageService messageService;

	@Autowired
	AppCodeService appCodeService;

	protected String getMessage(String key) {
		return messageService.getMessage(key);
	}
	
	protected String getMessage(String key, String... args) {
		return messageService.getMessage(key, args);
	}

	protected Map<String, String> getMessages(String... prefixes) {
		return messageService.getMessages(prefixes);
	}
	
	protected Map<String, List<LabelValueBean>> getLvbs(String... appGroups) {
		return appCodeService.getLvbs(appGroups);
	}
	
}
