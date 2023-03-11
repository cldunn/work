package com.cldbiz.oauth2Srv.spring;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.cldbiz.oauth2Srv.domain.UserSecurity;
import com.cldbiz.oauth2Srv.repository.UserSecurityRepository;

@Component
public class UserDetailService implements UserDetailsService {

	private static Map<String, UserSecurity> users = new HashMap<String, UserSecurity>();
	
	@Autowired
	private UserSecurityRepository userSecurityRepo;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		try {
			UserSecurity user = (UserSecurity) users.get(userName);
			if (user == null) {
				user = userSecurityRepo.findOneByUserName(userName);
				if (user != null) {
					users.put(userName, user);
				}
				else {
					throw new UsernameNotFoundException(userName + " not found!");
				}
			}
			
			return new UserDetail(user);
		}
		catch (Exception ex) {
			throw new UsernameNotFoundException(ex.getMessage(), ex);
		}
	}
	
}
