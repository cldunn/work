package com.cldbiz.security.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(name="APP_CODE", indexes = @Index(name="IDX_APP_CODE_GROUP", columnList = "APP_GROUP ASC"))
public class AppCode extends BaseDomain {
	@EmbeddedId
	private AppCodeKey appCodeKey;
	
	@Column(name="LABEL", nullable=false)
	private String label;

	public AppCodeKey getAppCodeKey() {
		return appCodeKey;
	}

	public void setAppCodeKey(AppCodeKey appCodeKey) {
		this.appCodeKey = appCodeKey;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}
}
