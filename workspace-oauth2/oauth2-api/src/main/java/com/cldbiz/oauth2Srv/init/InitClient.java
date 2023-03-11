package com.cldbiz.oauth2Srv.init;

import java.time.Duration;
import java.util.UUID;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.client.JdbcRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.TokenSettings;

public class InitClient {

	public static void main(String[] args) {
	    RegisteredClient registeredClient = RegisteredClient.withId(UUID.randomUUID().toString())
	        .clientId("client")
	        .clientSecret("secret")
	        .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
	        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
	        .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
	        .redirectUri("http://localhost:3000/authorized")
	        .scope(OidcScopes.OPENID)
	        .clientSettings(ClientSettings.builder()
	        	.requireProofKey(true)
	            .requireAuthorizationConsent(false)
	            .build())
	        .tokenSettings(TokenSettings.builder()
        		.accessTokenTimeToLive(Duration.ofMinutes(10))
	            .refreshTokenTimeToLive(Duration.ofMinutes(30))
	            .build())
	        .build();

	    JdbcTemplate jdbcTemplate = new JdbcTemplate(getDataSource());
	    JdbcRegisteredClientRepository registeredClientRepository = new JdbcRegisteredClientRepository(jdbcTemplate);

	    registeredClientRepository.save(registeredClient);
	    
		System.out.println("Just Do It!");

	}

	private static DataSource getDataSource() {
		DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create(); 
		
	    dataSourceBuilder.url("jdbc:sqlserver://localhost:1433;DatabaseName=Oauth2Api;selectMethod=cursor;sendTimeAsDateTime=false"); 
	    dataSourceBuilder.driverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver"); 
	    dataSourceBuilder.username("cdunn");
	    dataSourceBuilder.password("number1");
	    
	    return dataSourceBuilder.build(); 
	}
}
