package com.cldbiz.reactcomponents.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

import com.cldbiz.reactcomponents.config.AppExecutionContext;
import com.cldbiz.reactcomponents.util.MessageSource;

@Service
public class MessageService {
	@Autowired
	MessageSource messageSource;
	
	public String getMessage(String key) {
		Locale locale = AppExecutionContext.getLocale();
		try {
			return messageSource.getMessage(key, null, locale);
		}
		catch (NoSuchMessageException nsmEx) {
			return "??" + key + "??";
		}
	}

	public String getMessage(String key, String... args) {
		Locale locale = AppExecutionContext.getLocale();
		try {
			return messageSource.getMessage(key, args, locale);
		}
		catch (NoSuchMessageException nsmEx) {
			return "??" + key + "??";
		}
	}

	public Map<String, String> getMessages(String... prefixes) {
		Map<String, String> messages = new HashMap<String, String>();

		Locale locale = AppExecutionContext.getLocale();
		Arrays.asList(prefixes).forEach((prefix) -> {
			messages.putAll(messageSource.getPrefixedMessages(prefix, locale));
		});
		
		return messages;
	}
}
