package com.cldbiz.jpa.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.validation.constraints.Size;

import com.cldbiz.jpa.domain.UserInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserProfileDto extends BaseDto {
	@Size(max=40)
	private String firstName;
	
	@Size(max=40)
	private String lastName;
	
	@Size(max=40)
	private String address;
	
	@Size(max=40)
	private String city;
	
	@Size(max=2)
	private String state;
	
	@Size(max=40)
	private String province;
	
	@Size(max=10)
	private String zip;
	
	@Size(max=40)
	private String country;
	
	@Size(max=10)
	private String primaryPhone;
	
	@Size(max=10)
	private String secondaryPhone;
	
	@Size(max=80)
	private String emailAddress;
	
	private UserAuthenticationDto userAuthenticationDto;
	
	private List<RoleDto> roleDtos = new ArrayList<RoleDto>();
	
	public UserProfileDto() {}

	public UserProfileDto(UserInfo userInfo) {
		this.setId(userInfo.getId());
		this.setFirstName(userInfo.getFirstName());
		this.setLastName(userInfo.getLastName());
		this.setAddress(userInfo.getAddress());
		this.setCity(userInfo.getCity());
		this.setState(userInfo.getState());
		this.setProvince(userInfo.getProvince());
		this.setZip(userInfo.getZip());
		this.setCountry(userInfo.getCountry());
		this.setPrimaryPhone(userInfo.getPrimaryPhone());
		this.setSecondaryPhone(userInfo.getSecondaryPhone());
		this.setEmailAddress(userInfo.getEmailAddress());
		
		this.setUserAuthenticationDto(new UserAuthenticationDto(userInfo));
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPrimaryPhone() {
		return primaryPhone;
	}

	public void setPrimaryPhone(String primaryPhone) {
		this.primaryPhone = primaryPhone;
	}

	public String getSecondaryPhone() {
		return secondaryPhone;
	}

	public void setSecondaryPhone(String secondaryPhone) {
		this.secondaryPhone = secondaryPhone;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public UserAuthenticationDto getUserAuthenticationDto() {
		return userAuthenticationDto;
	}

	public void setUserAuthenticationDto(UserAuthenticationDto userAuthenticationDto) {
		this.userAuthenticationDto = userAuthenticationDto;
	}

	public List<RoleDto> getRoleDtos() {
		return roleDtos;
	}

	public void setRoleDtos(List<RoleDto> roleDtos) {
		this.roleDtos = roleDtos;
	}

	public String getName() {
		return this.lastName + ", " + this.firstName;
	}

}
