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
	
	@Size(max=20)
	private String status;
	
	private Boolean isLocked;
	
	public UserAuthenticationDto() {}
	
	public UserAuthenticationDto(UserInfo userInfo) {
		this.setLogin(userInfo.getLogin());
		this.setPassword(userInfo.getPassword());
		this.setLoginAttempts(userInfo.getLoginAttempts());
		this.setLastLoginDate(userInfo.getLastLoginDate());
		this.setPasswordModifiedDate(userInfo.getPasswordModifiedDate());
		this.setPasswordExpireDate(userInfo.getPasswordExpireDate());	
		this.setStatus(userInfo.getStatus());
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public Boolean getIsLocked() {
		return isLocked;
	}

	public void setIsLocked(Boolean isLocked) {
		this.isLocked = isLocked;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((isLocked == null) ? 0 : isLocked.hashCode());
		result = prime * result + ((lastLoginDate == null) ? 0 : lastLoginDate.hashCode());
		result = prime * result + ((login == null) ? 0 : login.hashCode());
		result = prime * result + ((loginAttempts == null) ? 0 : loginAttempts.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((passwordExpireDate == null) ? 0 : passwordExpireDate.hashCode());
		result = prime * result + ((passwordModifiedDate == null) ? 0 : passwordModifiedDate.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserAuthenticationDto other = (UserAuthenticationDto) obj;
		if (isLocked == null) {
			if (other.isLocked != null)
				return false;
		} else if (!isLocked.equals(other.isLocked))
			return false;
		if (lastLoginDate == null) {
			if (other.lastLoginDate != null)
				return false;
		} else if (!lastLoginDate.equals(other.lastLoginDate))
			return false;
		if (login == null) {
			if (other.login != null)
				return false;
		} else if (!login.equals(other.login))
			return false;
		if (loginAttempts == null) {
			if (other.loginAttempts != null)
				return false;
		} else if (!loginAttempts.equals(other.loginAttempts))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (passwordExpireDate == null) {
			if (other.passwordExpireDate != null)
				return false;
		} else if (!passwordExpireDate.equals(other.passwordExpireDate))
			return false;
		if (passwordModifiedDate == null) {
			if (other.passwordModifiedDate != null)
				return false;
		} else if (!passwordModifiedDate.equals(other.passwordModifiedDate))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}
	
	
}
