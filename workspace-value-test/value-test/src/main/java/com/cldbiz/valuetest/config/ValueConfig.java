package com.cldbiz.valuetest.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;

@Configuration
public class ValueConfig {
	@Value("${my.test.var}")
	private String myTestVar;

    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;

	@PostConstruct
	public void afterInitialize() {
		System.out.println(myTestVar);
		System.out.println(bootstrapAddress);
	}

}
