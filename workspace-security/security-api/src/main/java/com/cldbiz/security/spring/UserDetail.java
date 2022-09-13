package com.cldbiz.security.spring;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.cldbiz.security.domain.UserSecurity;

public class UserDetail implements UserDetails {

	private final UserSecurity userSecurity;
	
	public UserDetail(UserSecurity userSecurity) {
		this.userSecurity = userSecurity;
	}
	
	@Override
	public String getUsername() {
		return userSecurity.getUserName();
	}

	@Override
	public String getPassword() {
		return userSecurity.getPassword();
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> authorities = userSecurity.getAuthorities().stream()
				.map(a -> { return new SimpleGrantedAuthority(a.getAuthority()); })
				.collect(Collectors.toList());
				
		return authorities;
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return userSecurity.getIsAccountNonExpired();
	}

	@Override
	public boolean isAccountNonLocked() {
		return userSecurity.getIsAccountNonLocked();
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return userSecurity.getIsCredentialsNonExpired();
	}

	@Override
	public boolean isEnabled() {
		return userSecurity.getIsEnabled();
	}

}
