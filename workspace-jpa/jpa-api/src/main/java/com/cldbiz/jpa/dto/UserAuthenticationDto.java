package com.cldbiz.jpa.dto;

import java.time.ZonedDateTime;

import javax.validation.constraints.Size;

import com.cldbiz.jpa.domain.UserInfo;

public class UserAuthenticationDto {
	@Size(max=30)
    private String login;

	@Size(max=40)
	private String password;

	private Integer loginAttempts;
	
	private ZonedDateTime lastLoginDate;

	private ZonedDateTime passwordModifiedDate;
	
	private ZonedDateTime passwordExpireDate;
	
	/*
	@Size(max=20)
	private String status;
	*/
	
	private Boolean isLocked;
	
	public UserAuthenticationDto() {}
	
	public UserAuthenticationDto(UserInfo userInfo) {
		this.setLogin(userInfo.getLogin());
		this.setPassword(userInfo.getPassword());
		this.setLoginAttempts(userInfo.getLoginAttempts());
		this.setLastLoginDate(userInfo.getLastLoginDate());
		this.setPasswordModifiedDate(userInfo.getPasswordModifiedDate());
		this.setPasswordExpireDate(userInfo.getPasswordExpireDate());	
		// this.setStatus(userInfo.getStatus());
		this.setIsLocked(userInfo.getIsLocked());
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Integer getLoginAttempts() {
		return loginAttempts;
	}

	public void setLoginAttempts(Integer loginAttempts) {
		this.loginAttempts = loginAttempts;
	}

	public ZonedDateTime getLastLoginDate() {
		return lastLoginDate;
	}

	public void setLastLoginDate(ZonedDateTime lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}

	public ZonedDateTime getPasswordModifiedDate() {
		return passwordModifiedDate;
	}

	public void setPasswordModifiedDate(ZonedDateTime passwordModifiedDate) {
		this.passwordModifiedDate = passwordModifiedDate;
	}

	public ZonedDateTime getPasswordExpireDate() {
		return passwordExpireDate;
	}

	public void setPasswordExpireDate(ZonedDateTime passwordExpireDate) {
		this.passwordExpireDate = passwordExpireDate;
	}

	/*
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	*/
	
	public Boolean getIsLocked() {
		return isLocked;
	}

	public void setIsLocked(Boolean isLocked) {
		this.isLocked = isLocked;
	}
}
