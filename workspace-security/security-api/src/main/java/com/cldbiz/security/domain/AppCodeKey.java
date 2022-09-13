package com.cldbiz.security.domain;

import java.io.Serializable;

import javax.persistence.Column;

public class AppCodeKey implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name="APP_GROUP", nullable=false)
	private String appGroup;

	@Column(name="VALUE", nullable=false)
	private String value;

	public String getAppGroup() {
		return appGroup;
	}

	public void setAppGroup(String appGroup) {
		this.appGroup = appGroup;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
