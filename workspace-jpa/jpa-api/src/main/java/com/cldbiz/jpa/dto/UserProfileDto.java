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
	
	private List<Long> roleIds = new ArrayList<Long>();

	private List<RoleDto> roleDtos = new ArrayList<RoleDto>();
	
	public UserProfileDto() {
		this.setUserAuthenticationDto(new UserAuthenticationDto());
	}

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

	public List<Long> getRoleIds() {
		return roleIds;
	}

	public void setRoleIds(List<Long> roleIds) {
		this.roleIds = roleIds;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((address == null) ? 0 : address.hashCode());
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((country == null) ? 0 : country.hashCode());
		result = prime * result + ((emailAddress == null) ? 0 : emailAddress.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((primaryPhone == null) ? 0 : primaryPhone.hashCode());
		result = prime * result + ((province == null) ? 0 : province.hashCode());
		result = prime * result + ((roleDtos == null) ? 0 : roleDtos.hashCode());
		result = prime * result + ((secondaryPhone == null) ? 0 : secondaryPhone.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		result = prime * result + ((userAuthenticationDto == null) ? 0 : userAuthenticationDto.hashCode());
		result = prime * result + ((zip == null) ? 0 : zip.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserProfileDto other = (UserProfileDto) obj;
		if (address == null) {
			if (other.address != null)
				return false;
		} else if (!address.equals(other.address))
			return false;
		if (city == null) {
			if (other.city != null)
				return false;
		} else if (!city.equals(other.city))
			return false;
		if (country == null) {
			if (other.country != null)
				return false;
		} else if (!country.equals(other.country))
			return false;
		if (emailAddress == null) {
			if (other.emailAddress != null)
				return false;
		} else if (!emailAddress.equals(other.emailAddress))
			return false;
		if (firstName == null) {
			if (other.firstName != null)
				return false;
		} else if (!firstName.equals(other.firstName))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		if (primaryPhone == null) {
			if (other.primaryPhone != null)
				return false;
		} else if (!primaryPhone.equals(other.primaryPhone))
			return false;
		if (province == null) {
			if (other.province != null)
				return false;
		} else if (!province.equals(other.province))
			return false;
		if (roleDtos == null) {
			if (other.roleDtos != null)
				return false;
		} else if (!roleDtos.equals(other.roleDtos))
			return false;
		if (secondaryPhone == null) {
			if (other.secondaryPhone != null)
				return false;
		} else if (!secondaryPhone.equals(other.secondaryPhone))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		if (userAuthenticationDto == null) {
			if (other.userAuthenticationDto != null)
				return false;
		} else if (!userAuthenticationDto.equals(other.userAuthenticationDto))
			return false;
		if (zip == null) {
			if (other.zip != null)
				return false;
		} else if (!zip.equals(other.zip))
			return false;
		return true;
	}
}
