package com.cldbiz.security.spring;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.cldbiz.security.domain.UserSecurity;
import com.cldbiz.security.redis.cache.CacheAppCodeHash;
import com.cldbiz.security.redis.cache.CacheUserSecurityValue;
import com.cldbiz.security.repository.UserSecurityRepository;

@Component
public class UserSecurityService implements UserDetailsService {

	// private static Map<String, UserDetail> users = new HashMap<String, UserDetail>();
	
	@Autowired
	private CacheUserSecurityValue cacheUserSecurityValue;
	
	@Autowired
	private UserSecurityRepository userSecurityRepo;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		try {
			UserSecurity user = cacheUserSecurityValue.getByUserName(userName);
			if (user == null) {
				user = userSecurityRepo.findOneByUserName(userName);
				cacheUserSecurityValue.putExpiresUserSecurity(user, 24L, TimeUnit.HOURS);
			}
			UserDetail userDetail = new UserDetail(user);
			
			return userDetail;
		}
		catch (Exception ex) {
			throw new UsernameNotFoundException(ex.getMessage(), ex);
		}
	}
	
}
