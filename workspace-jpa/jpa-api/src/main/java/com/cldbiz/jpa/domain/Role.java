package com.cldbiz.jpa.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.cldbiz.jpa.dto.RoleDto;

@Entity
@Table(name="ROLE")
public class Role extends BaseDomain {
	@Size(max=40)
    @Column(name="NAME", nullable=false)
	private String name;
	
	@Size(max=40)
    @Column(name="DESCRIPTION", nullable=false)
	private String description;
	
	@ManyToMany(mappedBy = "roles")
	List<UserInfo> userInfos = new ArrayList<UserInfo>();

	public Role() {}
	
	public Role(RoleDto roleDto) {
		this.setName(roleDto.getName());
		this.setDescription(roleDto.getDescription());
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<UserInfo> getUserInfos() {
		return userInfos;
	}

	public void setUserInfos(List<UserInfo> userInfos) {
		this.userInfos = userInfos;
	}
}
