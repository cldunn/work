package com.cldbiz.security.spring;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.cldbiz.security.config.ExecutionContext;

// if authenticaiton() recieves object not supported, return null
// throw AuthenticationException if authentication fails
// return Authentication is authentication successful 

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	// Authentication represents an authentication request
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		String username = authentication.getName();
		String password = authentication.getCredentials().toString();
		
		UserDetail userDetail = (UserDetail) userDetailsService.loadUserByUsername(username);
		if (passwordEncoder.matches(password, userDetail.getPassword())) {
			UsernamePasswordAuthenticationToken auth = 
				new UsernamePasswordAuthenticationToken(username, null, userDetail.getAuthorities());
			Map detailsMap = new HashMap<String, Object>();
			detailsMap.put("isMFA", false);
			auth.setDetails(userDetail);

			ExecutionContext.setUserDetail(userDetail);
					
			return auth;
		}
		else {
			throw new BadCredentialsException("Invlaid Credentials");
		}
	}

	@Override
	public boolean supports(Class<?> authenticationType) {
		return authenticationType.equals(UsernamePasswordAuthenticationToken.class);
	}

}
