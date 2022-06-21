package com.cldbiz.react.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

	// Register stomp endpoint: the url to open the websocket connection
	@Override
	public void registerStompEndpoints(StompEndpointRegistry registry) {
		
		/*
		 * Register "/ws" and "/wss" (SSL) endpoints to enable SockJS protocal
		 * 
		 * SockJS is used on client and server side to allow alternative messaging if websocket is not available
		 */
		registry.addEndpoint("/ws", "/wss").setAllowedOriginPatterns("*").withSockJS();
	}
	 
	
}
