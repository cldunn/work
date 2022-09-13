package com.cldbiz.security.spring;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.cldbiz.security.domain.UserSecurity;
import com.cldbiz.security.repository.UserSecurityRepository;

@Component
public class UserSecurityService implements UserDetailsService {

	private static Map<String, UserDetail> users = new HashMap<String, UserDetail>();
	
	@Autowired
	private UserSecurityRepository userSecurityRepo;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		try {
			UserDetail userDetail = users.get(userName);
			if (userDetail == null) {
				UserSecurity user = userSecurityRepo.findOneByUserName(userName);
				userDetail = new UserDetail(user);
				users.put(userName, userDetail);
			}
			
			return userDetail;
		}
		catch (Exception ex) {
			throw new UsernameNotFoundException(ex.getMessage(), ex);
		}
	}
	
}
