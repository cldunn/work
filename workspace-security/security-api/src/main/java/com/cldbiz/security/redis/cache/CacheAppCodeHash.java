package com.cldbiz.security.redis.cache;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cldbiz.security.domain.AppCode;
import com.cldbiz.security.redis.ops.RedisHash;

@Component
public class CacheAppCodeHash {
	private String redisKey = "APP_CODES";
	
	@Autowired
	private RedisHash<List<AppCode>> appCodeHash;
	
	public void put(String appGroup, List<AppCode> appCodes) {
		appCodeHash.put(redisKey, appGroup, appCodes);
	}

	public List<AppCode> getGroup(String appGroup) {
		return appCodeHash.get(redisKey, appGroup);
	}

	public AppCode getAppCode(String appGroup, String value) {
		List<AppCode> appCodes = appCodeHash.get(redisKey, appGroup);
		
		Optional<AppCode> optAppCode = appCodes.stream()
			.filter(appCode -> appCode.getAppCodeKey().getValue().equals(value))
			.findAny();
		
		return optAppCode.isPresent() ? optAppCode.get() : null;
	}
}
