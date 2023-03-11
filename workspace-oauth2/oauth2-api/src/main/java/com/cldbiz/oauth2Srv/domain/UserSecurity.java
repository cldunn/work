package com.cldbiz.oauth2Srv.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="USER_SECURITY")
public class UserSecurity extends BaseDomain {
	@Id
	@Column(name="ID", nullable=true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Size(max=40)
    @Column(name="USER_NAME", nullable=true, unique=true)
	private String userName;

	@Size(max=40)
    @Column(name="PASSWORD", nullable=true)
	private String password;
	
	@ManyToMany(cascade={CascadeType.MERGE}, fetch = FetchType.EAGER)
	@JoinTable(name="USER_AUTHORITIES", 
			   joinColumns = @JoinColumn(name = "SECURE_USER_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_SECURE_USER_ID")), 
			   inverseJoinColumns = @JoinColumn(name = "GRANTED_AUTHORITY_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_GRANTED_AUTHORITY_ID")))
	List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();

	@Column(name="IS_ACCOUNT_NON_EXPIRED", columnDefinition = "bit not null constraint DF_USER_SECURITY_IS_ACCOUNT_NON_EXPIRED default 1")
	private Boolean	isAccountNonExpired;
	
	@Column(name="IS_ACCOUNT_NON_LOCKED", columnDefinition = "bit not null constraint DF_USER_SECURITY_IS_ACCOUNT_NON_LOCKED default 1")
	private Boolean	isAccountNonLocked;

	@Column(name="IS_CREDENTIAL_NON_EXPIRED", columnDefinition = "bit not null constraint DF_USER_SECURITY_IS_CREDENTIAL_NON_EXPIRED default 1")
	private Boolean	isCredentialsNonExpired;

	@Column(name="IS_ENABLED", columnDefinition = "bit not null constraint DF_USER_SECURITY_IS_ENABLED default 1")
	private Boolean	isEnabled;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	public Boolean getIsAccountNonExpired() {
		return isAccountNonExpired;
	}

	public void setIsAccountNonExpired(Boolean isAccountNonExpired) {
		this.isAccountNonExpired = isAccountNonExpired;
	}

	public Boolean getIsAccountNonLocked() {
		return isAccountNonLocked;
	}

	public void setIsAccountNonLocked(Boolean isAccountNonLocked) {
		this.isAccountNonLocked = isAccountNonLocked;
	}

	public Boolean getIsCredentialsNonExpired() {
		return isCredentialsNonExpired;
	}

	public void setIsCredentialsNonExpired(Boolean isCredentialsNonExpired) {
		this.isCredentialsNonExpired = isCredentialsNonExpired;
	}

	public Boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}
}
