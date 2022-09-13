package com.cldbiz.security.io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Message
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2022-09-06T03:24:54.772Z[GMT]")

/* Mostly manually defined and used in swagger.xml */
public class Message   {
  @JsonProperty("content")
  private String content = null;

  @Valid
  @JsonProperty("details")
  private List<String> details = new ArrayList<String>();

  @Valid
  @JsonProperty("validationMsgs")
  private Map<String, String> validationMsgs = new HashMap<String, String>();

	public Message(String content) {
		this.content = content;
	}
	
	public Message(Map<String, String> validationMsgs) {
		this.validationMsgs = validationMsgs;
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

	public Map<String, String> getValidationMsgs() {
		return validationMsgs;
	}

	public void setValidationMsgs(Map<String, String> validationMsgs) {
		this.validationMsgs = validationMsgs;
	}

  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Message message = (Message) o;
    return Objects.equals(this.content, message.content) &&
        Objects.equals(this.details, message.details) &&
        Objects.equals(this.validationMsgs, message.validationMsgs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(content, details, validationMsgs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Message {\n");
    
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    details: ").append(toIndentedString(details)).append("\n");
    sb.append("    validationMsgs: ").append(toIndentedString(validationMsgs)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
