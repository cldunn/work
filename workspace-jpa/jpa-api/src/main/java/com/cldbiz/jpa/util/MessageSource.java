package com.cldbiz.jpa.util;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.stereotype.Component;

@Component
/* MessageSource implementation that accesses resource bundles using specified basenames */
public class MessageSource extends ReloadableResourceBundleMessageSource {

	// Injection is done after the constructor so inject as parameters into constructor
	public MessageSource(
			@Value("${message.basenames}") String[] baseNames, 
			@Value("${message.cache-refresh-interval}") int cacheRefreshInterval) {
		super.setBasenames(baseNames);
		super.setCacheSeconds(cacheRefreshInterval);
	}
	
	public Map<String, String> getPrefixedMessages(String prefix, Locale locale) {
		Map<String, String> messages = new HashMap<String, String>();

		clearCacheIncludingAncestors();
		
		PropertiesHolder propertiesHolder = getMergedProperties(locale);
		Properties properties = propertiesHolder.getProperties();
		properties.forEach((key, value) -> {
			if (((String)key).startsWith(prefix)) {
				messages.put((String) key,  (String) value);
			}
		});
		
		return messages;
	}
}
