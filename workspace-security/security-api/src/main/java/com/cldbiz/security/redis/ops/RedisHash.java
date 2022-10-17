package com.cldbiz.security.redis.ops;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
public class RedisHash<T> {
	private HashOperations<String, Object, T> hashOperations;
	
	@Autowired
	RedisHash(RedisTemplate<String, T> redisTemplate) {
		this.hashOperations = redisTemplate.opsForHash();
	}
	
	public T get(String redisKey, Object key) {
		return hashOperations.get(redisKey, key);
	}
	
	public Map<Object, T> getAll(String redisKey) {
		return hashOperations.entries(redisKey);
	}

	public void put(String redisKey, Object key, T data) {
		hashOperations.put(redisKey, key, data);
	}
	
	public void putAll(String redisKey, Map<String, T> map) {
		hashOperations.putAll(redisKey, map);
	}
	
	public Set<Object> getKeys(String redisKey) {
		return hashOperations.keys(redisKey);
	}
	
	public List<T> getValues(String redisKey) {
		return hashOperations.values(redisKey);
	}
}
