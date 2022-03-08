package com.cldbiz.jpa.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.SequenceGenerator;
import javax.persistence.Transient;
import javax.persistence.Version;

import org.apache.commons.lang3.builder.ToStringBuilder;

import com.cldbiz.jpa.common.AppConstants;
import com.cldbiz.jpa.config.AppExecutionContext;
import com.cldbiz.jpa.dto.UserProfileDto;

@MappedSuperclass
public abstract class BaseDomain implements Serializable {

	@Transient
	private String uid = java.util.UUID.randomUUID().toString();

	@Id
	@Column(name="ID", nullable=true)
	@SequenceGenerator(name = "hibernate_sequence", initialValue = 10000, allocationSize = 10)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hibernate_sequence")
	// @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Version
	@Column(name="VERSION", nullable=true, columnDefinition = "bigint default 0")
	private Long version;
	
	@Column(name="CREATED_BY", nullable=false)
	private String createdBy;
	
	@Column(name="CREATED_DATE", nullable=false)
	private ZonedDateTime createdDate;
	
	@Column(name="MAINTAINED_BY")
	private String maintainedBy;
	
	@Column(name="MAINTAINED_DATE")
	private ZonedDateTime maintainedDate;

	protected BaseDomain() {}
	
	private String getUid() {
		return uid;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
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

	@PrePersist
	public void insertCreatedByAndCreatedDate() {
		UserProfileDto userProfileDto = AppExecutionContext.getUserProfileDto();
		
		if (userProfileDto != null) {
			this.setCreatedBy(userProfileDto.getName());
		}
		else {
			this.setCreatedBy(AppConstants.SYSTEM_USER);
		}
		
		this.setCreatedDate(ZonedDateTime.now());
	}
	
	@PreUpdate
	public void updateMaintainedByAndModifiedDate() {
		UserProfileDto userProfileDto = AppExecutionContext.getUserProfileDto();
		
		if (userProfileDto != null) {
			this.setMaintainedBy(userProfileDto.getName());
		}
		else {
			this.setCreatedBy(AppConstants.SYSTEM_USER);
		}

		this.setMaintainedDate(ZonedDateTime.now());
	}
	
	public String toString() {
		return ToStringBuilder.reflectionToString(this.getClass());
	};
	
    public int hashCode() {
        if (uid != null) {
            return uid.hashCode();
        } else {
            return super.hashCode();
        }
    }

    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || !(o instanceof BaseDomain)) {
            return false;
        }

        BaseDomain other = (BaseDomain)o;
        return uid.equals(other.getUid());
    }

}
