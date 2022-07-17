package com.cldbiz.security.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

import com.cldbiz.security.config.SecurityExecutionContext;
import com.cldbiz.security.util.MessageSource;

@Service
public class MessageService {
	@Autowired
	MessageSource messageSource;
	
	public String getMessage(String key) {
		Locale locale = SecurityExecutionContext.getLocale();
		try {
			return messageSource.getMessage(key, null, locale);
		}
		catch (NoSuchMessageException nsmEx) {
			return "??" + key + "??";
		}
	}

	public String getMessage(String key, String... args) {
		Locale locale = SecurityExecutionContext.getLocale();
		try {
			return messageSource.getMessage(key, args, locale);
		}
		catch (NoSuchMessageException nsmEx) {
			return "??" + key + "??";
		}
	}

	public Map<String, String> getMessages(String... prefixes) {
		Map<String, String> messages = new HashMap<String, String>();

		Locale locale = SecurityExecutionContext.getLocale();
		Arrays.asList(prefixes).forEach((prefix) -> {
			messages.putAll(messageSource.getPrefixedMessages(prefix, locale));
		});
		
		return messages;
	}
}
