package com.cldbiz.security.redis.ops;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

@Component
public class RedisValue<T> {
	private ValueOperations<String, T> valueOperations;
	
	@Autowired
	RedisValue(RedisTemplate<String, T> redisTemplate) {
		this.valueOperations = redisTemplate.opsForValue();
	}
	
	public T getValue(String key) {
		return valueOperations.get(key);
	}

	public void putValue(String key, T value) {
		valueOperations.set(key, value);
	}
	
	public void putExpiresValue(String key, T value, long timeOut, TimeUnit unit) {
		valueOperations.set(key,  value, timeOut, unit);
	}
	
}
