package com.cldbiz.kafkaproducer.common;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class JsonResponseEntity<T> extends HashMap<String, Object> {
	private static final long serialVersionUID = 1L;
	
	private static final String MESSAGE_KEY = "message";
	private static final String DATA_KEY = "data";
	
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
	
	public JsonResponseEntity() {
		super();
		this.put(JsonResponseEntity.DATA_KEY, null);
		this.put(JsonResponseEntity.MESSAGE_KEY, null);
	}
	
	public JsonResponseEntity(T entity) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, entity);
		this.put(JsonResponseEntity.MESSAGE_KEY, null);
	}

	public JsonResponseEntity(String msgContent) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, null);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent));
	}

	public JsonResponseEntity(String msgContent, List<String> msgDetails) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, null);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent, msgDetails));
	}
	
	public JsonResponseEntity(String msgContent, String... msgDetails) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, null);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent, msgDetails));
	}

	public JsonResponseEntity(T entity, String msgContent) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, entity);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent));
	}

	public JsonResponseEntity(T entity, String msgContent, List<String> msgDetails) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, entity);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent, msgDetails));
	}

	public JsonResponseEntity(T entity, String msgContent, String... msgDetails) {
		super();
		this.put(JsonResponseEntity.DATA_KEY, entity);
		this.put(JsonResponseEntity.MESSAGE_KEY, new Message(msgContent, msgDetails));
	}
	
	
}
