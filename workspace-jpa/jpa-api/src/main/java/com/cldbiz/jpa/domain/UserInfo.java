package com.cldbiz.jpa.domain;

import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.CascadeType;
import javax.persistence.UniqueConstraint;
import javax.persistence.JoinColumn;
import javax.persistence.ForeignKey;

import javax.validation.constraints.Size;

import com.cldbiz.jpa.common.AppConstants;
import com.cldbiz.jpa.dto.UserAuthenticationDto;
import com.cldbiz.jpa.dto.UserProfileDto;

@Entity
@Table(name="USER_INFO",
   uniqueConstraints= {  @UniqueConstraint(name = "UK_EMAIL_ADDRESS", columnNames={"EMAIL_ADDRESS"}),
 	  				     @UniqueConstraint(name = "UK_LOGIN", columnNames={"LOGIN"})}
)
@NamedQuery(name = "UserInfo.findByFirstNameAndLastName", query = "SELECT u FROM UserInfo u WHERE u.firstName like CONCAT('%',?1,'%') AND u.lastName like CONCAT('%',?2,'%')")
public class UserInfo extends BaseDomain {
	@Size(max=40)
    @Column(name="FIRST_NAME", nullable=true)
	private String firstName;

	@Size(max=40)
    @Column(name="LAST_NAME", nullable=true)
	private String lastName;
	
	@Size(max=40)
    @Column(name="ADDRESS", nullable=true)
	private String address;
	
	@Size(max=40)
    @Column(name="CITY", nullable=true)
	private String city;

	@Size(max=2)
    @Column(name="STATE", nullable=true)
	private String state;
	
	@Size(max=40)
    @Column(name="PROVINCE", nullable=true)
	private String province;
	
	@Size(max=10)
    @Column(name="ZIP", nullable=true)
	private String zip;

	@Size(max=40)
    @Column(name="COUNTRY", nullable=true)
	private String country;

	@Size(max=10)
    @Column(name="PRIMARY_PHONE", nullable=true)
	private String primaryPhone;

	@Size(max=10)
    @Column(name="SECONDARY_PHONE", nullable=true)
	private String secondaryPhone;
	
	@Size(max=80)
    @Column(name="EMAIL_ADDRESS", nullable=false)
	private String emailAddress;

	@Size(max=30)
    @Column(name="LOGIN", nullable=false)
    private String login;
	
	@Column(name="LOGIN_ATTEMPTS")
	private Integer loginAttempts;
	
	@Column(name="LAST_LOGIN_DATE")
	private ZonedDateTime lastLoginDate;
	
	@Size(max=40)
    @Column(name="PASSWORD", nullable=false)
	private String password;

    @Column(name="PASSWORD_MODIFIED_DATE")
	private ZonedDateTime passwordModifiedDate;
	
	@Column(name="PASSWORD_EXPIRE_DATE")
	private ZonedDateTime passwordExpireDate;
	
	@Size(max=20)
    @Column(name="STATUS", nullable=false)
	private String status = AppConstants.USER_STATUS_INACTIVE;
	
	@Column(name="IS_LOCKED")
	private Boolean isLocked;
	
	@ManyToMany(cascade={CascadeType.MERGE})
	@JoinTable(name="USER_INFO_ROLE", 
			   joinColumns = @JoinColumn(name = "USER_INFO_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_USER_INFO_ID")), 
			   inverseJoinColumns = @JoinColumn(name = "ROLE_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_ROLE_ID")))
	List<Role> roles = new ArrayList<Role>();
	
	public UserInfo() {}
	
	public UserInfo(UserProfileDto userProfileDto) {
		this.setId(userProfileDto.getId());
		this.setFirstName(userProfileDto.getFirstName());
		this.setLastName(userProfileDto.getLastName());
		this.setAddressLine(userProfileDto.getAddress());
		this.setCity(userProfileDto.getCity());
		this.setState(userProfileDto.getState());
		this.setProvince(userProfileDto.getProvince());
		this.setZip(userProfileDto.getZip());
		this.setCountry(userProfileDto.getCountry());
		this.setPrimaryPhone(userProfileDto.getPrimaryPhone());
		this.setSecondaryPhone(userProfileDto.getSecondaryPhone());
		this.setEmailAddress(userProfileDto.getEmailAddress());
		
		UserAuthenticationDto userAuthenticationDto = userProfileDto.getUserAuthenticationDto();
		this.setLogin(userAuthenticationDto.getLogin());
		this.setPassword(userAuthenticationDto.getPassword());
		this.setLoginAttempts(userAuthenticationDto.getLoginAttempts());
		this.setLastLoginDate(userAuthenticationDto.getLastLoginDate());
		this.setPasswordModifiedDate(userAuthenticationDto.getPasswordModifiedDate());
		this.setPasswordExpireDate(userAuthenticationDto.getPasswordExpireDate());	
		this.setStatus(userAuthenticationDto.getStatus());
		this.setIsLocked(userAuthenticationDto.getIsLocked());
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

	public void setAddressLine(String address) {
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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
	
	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
}
