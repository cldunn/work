package com.cldbiz.security.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.cldbiz.security.filter.XssFilter;
import com.cldbiz.security.spring.UserSecurityService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Override
    protected void configure(HttpSecurity http) throws Exception{
		http.csrf().disable().cors().disable();
		http.httpBasic();
		
        http
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS).permitAll()
        .antMatchers("/v1/initApp").permitAll()
        .antMatchers("/v1/getPublicKey").permitAll()
        .anyRequest().authenticated();
        // .and().requiresChannel().antMatchers("/v1/**").requiresSecure();
        
        http.addFilterBefore(new XssFilter(), UsernamePasswordAuthenticationFilter.class);
	
    }
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new UserSecurityService();
	}
	
	@Bean
	public BCryptPasswordEncoder bcryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SCryptPasswordEncoder scryptPasswordEncoder() {
		return new SCryptPasswordEncoder();
	}

	@Bean
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
