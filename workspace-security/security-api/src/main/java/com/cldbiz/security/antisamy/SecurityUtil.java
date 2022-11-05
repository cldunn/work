package com.cldbiz.security.antisamy;

import java.net.URLDecoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.cldbiz.security.exception.ApplicationException;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.json.JsonSanitizer;

public class SecurityUtil {
	private static final ObjectMapper mapper = new ObjectMapper();
	
	private static final String JS_CODE_REGEX_PATTERN = "(?isxm:<script>)+|(?isxm:</script>)"; 
	private static final String LINK_REGEX_PATTERN = "(a href=\"([^\"]+)\">)|(</a>)"; 
	private static final String REPLACE_STRING = "";

	private static final String ENCODING = "UTF-8";
	private static final String NO_HTML_STRING = "\\<.*?\\%24";
	private static final String ENCODED_HTML_STRING = "\\%3c.*?\\%24";
	private static final String ANTISAMY_VIOLATION_MSG = "AntiSamy: input is not allowed";
	
	private static void checkDoubleEncoding(String input) {
		boolean check = !(input != null && input.trim().indexOf(' ') > -1 && input.indexOf('+') > -1);
		try {
			input = StringUtils.replace(input, "+", "%2B");
			input = StringUtils.replace(input, "$", "%24");
			input = StringUtils.replace(input, NO_HTML_STRING, " %24");
			input = StringUtils.replace(input, ENCODED_HTML_STRING, " %24");
			input = (input != null) ? URLDecoder.decode(input, ENCODING) : input;
			
			if (check && input != null && !input.equals(URLDecoder.decode(input, ENCODING)) 
				&& !input.equals(URLDecoder.decode(input, ENCODING).replaceAll(" ", "+"))) {
				throw new ApplicationException(ANTISAMY_VIOLATION_MSG);
			}
		}
		catch (Exception ex) {
			throw new ApplicationException(ANTISAMY_VIOLATION_MSG);
		}
	}
	
	private static boolean isValidJson(String json) {
		try {
	        new JSONObject(json);
	    } catch (JSONException e) {
	        try {
	            new JSONArray(json);
	        } catch (JSONException ne) {
	            return false;
	        }
	    }
	    return true;
	    /*
	    try {
	        mapper.readTree(json);
	    } catch (JacksonException e) {
	        return false;
	    }
	    return true;
	    */
	}

	public static String applyRegEx(String input, String regexPattern, String replaceString) {
		if (StringUtils.isBlank(regexPattern)) {
			return input;
		}
		
		if (replaceString == null) {
			replaceString = "";
		}
		
		Pattern pattern = Pattern.compile(regexPattern);
		Matcher matcher = pattern.matcher(input);
		boolean isMatchFound = matcher.find();
		
		String output = input;
		if (isMatchFound) {
			output = matcher.replaceAll(replaceString);
		}
		
		return output;
	}
	
	public static String sanitizeInput(String input) {
		
		checkDoubleEncoding(input);
		
		String output = input;
		if (input != null && !"".equals(input.trim())) {
			if (isValidJson(input)) {
				output = JsonSanitizer.sanitize(input);
			}
			else {
				output = AntiSamyHelper.scan(input);
			}
			output = applyRegEx(output, JS_CODE_REGEX_PATTERN, REPLACE_STRING);
			output = applyRegEx(output, LINK_REGEX_PATTERN, REPLACE_STRING);
		}
		
		if (output != null && !"".equals(output.trim())) {
			if (input != null && !input.equals(output)) {
				throw new ApplicationException(ANTISAMY_VIOLATION_MSG);
			}
		}

		return output;
	}
}
