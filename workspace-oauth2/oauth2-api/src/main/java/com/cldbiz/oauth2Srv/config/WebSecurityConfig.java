package com.cldbiz.oauth2Srv.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.cldbiz.oauth2Srv.spring.UserDetailService;

@Configuration
public class WebSecurityConfig {
	private final CorsConfig corsConfig;

    public WebSecurityConfig(CorsConfig corsConfig) {
        this.corsConfig = corsConfig;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	corsConfig.corsCustomize(http);
    	return http.authorizeRequests().anyRequest().authenticated()
        .and().build();
    	/*
    	return http.formLogin()
			.and().authorizeRequests().anyRequest().authenticated()
			.oauth2Login().redirectionEndpoint().baseUri("/login/callback/code/*");
            .and().build();
        */
    }
    
    @Bean
    public UserDetailsService userDetailsService() {
      return new UserDetailService();
    }

	// @Bean
	public BCryptPasswordEncoder bcryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	// @Bean
	public SCryptPasswordEncoder scryptPasswordEncoder() {
		return new SCryptPasswordEncoder();
	}

	// @Bean
	public Argon2PasswordEncoder argon2PasswordEncoder() {
		return new Argon2PasswordEncoder();
	}
	
	@Bean 
	public PasswordEncoder passwordEncoder() {
		Map<String, PasswordEncoder> encoders = new HashMap<String, PasswordEncoder>();
		encoders.put("bcrypt", bcryptPasswordEncoder());  // default 4
		encoders.put("scrypt", scryptPasswordEncoder());  // default 16384, 8, 1, 32, 64
		encoders.put("argon2", argon2PasswordEncoder());   
		
		return new DelegatingPasswordEncoder("argon2", encoders); 
	}
}
