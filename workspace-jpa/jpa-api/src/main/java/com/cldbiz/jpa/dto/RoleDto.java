package com.cldbiz.jpa.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.cldbiz.jpa.domain.Role;

public class RoleDto extends BaseDto {
	private String name;
	
	private String description;
	
	List<UserProfileDto> userProfileDtos = new ArrayList<UserProfileDto>();
	
	public RoleDto() {}
	
	public RoleDto(Role role) {
		this.setName(role.getName());
		this.setDescription(role.getDescription());
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

	public List<UserProfileDto> getUserProfileDtos() {
		return userProfileDtos;
	}

	public void setUserProfileDtos(List<UserProfileDto> userProfileDtos) {
		this.userProfileDtos = userProfileDtos;
	}
}
