package com.cldbiz.oauth2Srv.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="GRANTED_AUTHORITY")
public class GrantedAuthority extends BaseDomain {
	@Id
	@Column(name="ID", nullable=true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@Size(max=40)
    @Column(name="AUTHORITY", nullable=false)
	private String authority;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAuthority() {
		return authority;
	}

	public void setAuthority(String authority) {
		this.authority = authority;
	}
}
