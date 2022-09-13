package com.cldbiz.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SecurityApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(SecurityApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

}

