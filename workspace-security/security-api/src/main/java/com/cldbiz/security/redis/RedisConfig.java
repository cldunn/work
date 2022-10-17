package com.cldbiz.security.redis;

import org.apache.commons.pool2.impl.GenericObjectPoolConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettucePoolingClientConfiguration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import io.lettuce.core.ClientOptions;
import io.lettuce.core.resource.ClientResources;
import io.lettuce.core.resource.DefaultClientResources;

@Configuration
@PropertySource("application.properties")
public class RedisConfig {
	@Value("${redis.host}")
	private String host;

	@Value("${redis.port}")
	private Integer port;

	@Bean(destroyMethod = "shutdown")
	ClientResources clientResources() {
	    return DefaultClientResources.create();
	}

	@Bean
	public ClientOptions clientOptions(){
	    return ClientOptions.builder()
            .disconnectedBehavior(ClientOptions.DisconnectedBehavior.REJECT_COMMANDS)
            .autoReconnect(true)
            .build();
	}

	@Bean
	LettucePoolingClientConfiguration lettucePoolConfig(ClientOptions options, ClientResources dcr){
	    return LettucePoolingClientConfiguration.builder()
            .poolConfig(new GenericObjectPoolConfig())
            .clientOptions(options)
            .clientResources(dcr)
            .build();
	}

	@Bean
	public RedisStandaloneConfiguration redisStandaloneConfiguration() {
	    return new RedisStandaloneConfiguration(host, port);
	}
	
	@Bean
	public RedisConnectionFactory connectionFactory(RedisStandaloneConfiguration redisStandaloneConfiguration,
	                                                LettucePoolingClientConfiguration lettucePoolConfig) {
	    return new LettuceConnectionFactory(redisStandaloneConfiguration, lettucePoolConfig);
	}

	@Bean
	@Primary
	@ConditionalOnMissingBean(name = "redisTemplate")
	public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
	    RedisTemplate<String, Object> template = new RedisTemplate<>();
	    template.setConnectionFactory(redisConnectionFactory);
	    template.setKeySerializer(new StringRedisSerializer());
	    
	    
	    /* Permit use of devtools, initialize with current class loader */
	    ClassLoader loader = Thread.currentThread().getContextClassLoader();
	    template.setValueSerializer(new JdkSerializationRedisSerializer(loader));
	    
	    
	    return template;
	}
}
