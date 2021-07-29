package com.cldbiz.simplemvc.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

public class JsonResponse2 extends ModelAndView {
	private Map<String, Object> model = this.getModel();
	
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
		
		public String getContent() {
			return content;
		}
		
		public void setHeader(String content) {
			this.content = content;
		}
		
		public List<String> getDetails() {
			return details;
		}
		
		public void setDetails(List<String> details) {
			this.details = details;
		}
	}
	
	private JsonResponse2() {
		super();
		super.setView(null);
		super.setViewName(null);
		model.put(JsonResponse.MESSAGE_KEY, null);
		model.put(JsonResponse.DATA_KEY, new HashMap<String, Object>());
	}
	
	private void setMessage(String content) {
		model.put(JsonResponse.MESSAGE_KEY, new Message(content));
	}

	private void setMessage(String content, List<String> details) {
		model.put(JsonResponse.MESSAGE_KEY, new Message(content, details));
	}

	private void setMessage(String content, String... details) {
		model.put(JsonResponse.MESSAGE_KEY, new Message(content, Arrays.asList(details)));
	}

	private Map<String, Object> getData() {
		return (Map<String, Object>) model.get(JsonResponse.DATA_KEY);
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
		private JsonResponse2 jsonResponseModelAndView;
		
		public Builder() {
			jsonResponseModelAndView = new JsonResponse2();
		}

		public Builder(String msgContent) {
			jsonResponseModelAndView = new JsonResponse2();
			jsonResponseModelAndView.setMessage(msgContent);
		}

		public Builder(String msgContent, List<String> msgDetails) {
			jsonResponseModelAndView = new JsonResponse2();
			jsonResponseModelAndView.setMessage(msgContent, msgDetails);
		}

		public Builder(String msgContent, String... msgDetails) {
			jsonResponseModelAndView = new JsonResponse2();
			jsonResponseModelAndView.setMessage(msgContent, msgDetails);
		}

		public Builder data(String key, Object value) {
			jsonResponseModelAndView.getData().put(key, value);
			return this;
		}
		
		public Builder view(View view) {
			jsonResponseModelAndView.setView(view);
			return this;
		}

		public Builder viewName(String viewName) {
			jsonResponseModelAndView.setViewName(viewName);
			return this;
		}

		public JsonResponse2 built() {
			return jsonResponseModelAndView;
		}
	}
}
