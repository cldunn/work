package com.cldbiz.simplemvc.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

public class JsonResponse extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;
	
	public static final String MESSAGE_KEY = "message";
	public static final String DATA_KEY = "data";
	
	public class Message {
		private String content;
		private List<String> details = new ArrayList<String>();
		
		public Message(String content) {
			this.content = content;
		}
		
		public Message(String content, List<String> details) {
			this.content = content;
			this.details = details;
		}
		
		public Message(String content, String... details) {
			this.content = content;
			this.details = Arrays.asList(details);
		}

		public String getContent() {
			return content;
		}
		
		public void setContent(String content) {
			this.content = content;
		}
		
		public List<String> getDetails() {
			return details;
		}
		
		public void setDetails(List<String> details) {
			this.details = details;
		}
	}
	
	private JsonResponse() {
		super();
		this.put(JsonResponse.MESSAGE_KEY, null);
		this.put(JsonResponse.DATA_KEY, new HashMap<String, Object>());
	}
	
	private void setMessage(String content) {
		this.put(JsonResponse.MESSAGE_KEY, new Message(content));
	}

	private void setMessage(String content, List<String> details) {
		this.put(JsonResponse.MESSAGE_KEY, new Message(content, details));
	}

	private void setMessage(String content, String... details) {
		this.put(JsonResponse.MESSAGE_KEY, new Message(content, Arrays.asList(details)));
	}

	@SuppressWarnings("unchecked")
	private Map<String, Object> getData() {
		return (Map<String, Object>) this.get(JsonResponse.DATA_KEY);
	}
	
	public static Builder getBuilder() {
		return new Builder();
	}
	
	public static Builder getBuilder(String msgContent) {
		return new Builder(msgContent);
	}

	public static Builder getBuilder(String msgContent, List<String> msgDetails) {
		return new Builder(msgContent, msgDetails);
	}

	
	public static class Builder {
		private JsonResponse jsonResponse;
		
		public Builder() {
			jsonResponse = new JsonResponse();
		}

		public Builder(String msgContent) {
			jsonResponse = new JsonResponse();
			jsonResponse.setMessage(msgContent);
		}

		public Builder(String msgContent, List<String> msgDetails) {
			jsonResponse = new JsonResponse();
			jsonResponse.setMessage(msgContent, msgDetails);
		}

		public Builder(String msgContent, String... msgDetails) {
			jsonResponse = new JsonResponse();
			jsonResponse.setMessage(msgContent, msgDetails);
		}

		public Builder addData(Map<String, Object> data) {
			jsonResponse.put(JsonResponse.DATA_KEY, data);
			return this;
		}
		
		public Builder addData(String key, Object value) {
			jsonResponse.getData().put(key, value);
			return this;
		}
		
		public JsonResponse built() {
			return jsonResponse;
		}
	}
}
