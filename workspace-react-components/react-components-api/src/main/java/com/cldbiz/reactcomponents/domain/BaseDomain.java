package com.cldbiz.reactcomponents.domain;

import java.time.ZonedDateTime;

public class BaseDomain {
	private Integer version;
	
	private String createdBy;
	
	private ZonedDateTime createDate;
	
	private String maintainedBy;
	
	private ZonedDateTime maintainedDate;

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public ZonedDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(ZonedDateTime createDate) {
		this.createDate = createDate;
	}

	public String getMaintainedBy() {
		return maintainedBy;
	}

	public void setMaintainedBy(String maintainedBy) {
		this.maintainedBy = maintainedBy;
	}

	public ZonedDateTime getMaintainedDate() {
		return maintainedDate;
	}

	public void setMaintainedDate(ZonedDateTime maintainedDate) {
		this.maintainedDate = maintainedDate;
	}
}
