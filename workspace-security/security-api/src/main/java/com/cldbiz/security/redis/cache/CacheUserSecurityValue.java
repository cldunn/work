package com.cldbiz.security.redis.cache;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cldbiz.security.domain.UserSecurity;
import com.cldbiz.security.redis.ops.RedisValue;

@Component
public class CacheUserSecurityValue {
	private static final String redisKey = "USER_SECURITY";
	
	@Autowired
	private RedisValue<UserSecurity> userSecurityValue;
	
	private String buildKey(String userName) {
		return redisKey + ":" + userName;
	}
	
	public UserSecurity getByUserName(String userName) {
		String key = buildKey(userName);
		return userSecurityValue.getValue(key);
	}

	public void putUserSecurity(UserSecurity userSecurity) {
		String key = buildKey(userSecurity.getUserName());
		userSecurityValue.putValue(key, userSecurity);
	}

	public void putExpiresUserSecurity(UserSecurity userSecurity, Long timeOut, TimeUnit unit) {
		String key = buildKey(userSecurity.getUserName());
		userSecurityValue.putExpiresValue(key, userSecurity, timeOut, unit);
	}
}
