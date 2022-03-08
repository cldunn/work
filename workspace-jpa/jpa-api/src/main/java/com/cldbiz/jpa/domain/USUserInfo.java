package com.cldbiz.jpa.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import com.cldbiz.jpa.common.AppConstants;
import com.cldbiz.jpa.dto.UserAuthenticationDto;
import com.cldbiz.jpa.dto.UserProfileDto;

@Entity
@Table(name="US_USER_INFO",
uniqueConstraints= {  @UniqueConstraint(name = "UK_EMAIL_ADDRESS", columnNames={"EMAIL_ADDRESS"})}
)
public class USUserInfo extends BaseDomain {
	@Size(max=40)
    @Column(name="FIRST_NAME", nullable=true)
	private String firstName;

	@Size(max=40)
    @Column(name="LAST_NAME", nullable=true)
	private String lastName;

	@Size(max=40)
    @Column(name="COUNTRY", nullable=true)
	private String country;

	@Size(max=80)
    @Column(name="EMAIL_ADDRESS", nullable=false)
	private String emailAddress;

	@Size(max=30)
    @Column(name="LOGIN", nullable=false)
    private String login;

	@Size(max=40)
    @Column(name="PASSWORD", nullable=false)
	private String password;

	@Size(max=20)
    @Column(name="STATUS", nullable=false)
	private String status = AppConstants.USER_STATUS_INACTIVE;

	public USUserInfo() {}
	
	public USUserInfo(UserProfileDto userProfileDto) {
		this.setId(userProfileDto.getId());
		this.setFirstName(userProfileDto.getFirstName());
		this.setLastName(userProfileDto.getLastName());
		this.setCountry(userProfileDto.getCountry());
		this.setEmailAddress(userProfileDto.getEmailAddress());

		UserAuthenticationDto userAuthenticationDto = userProfileDto.getUserAuthenticationDto();
		this.setLogin(userAuthenticationDto.getLogin());
		this.setPassword(userAuthenticationDto.getPassword());
		this.setStatus(userAuthenticationDto.getStatus());
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
