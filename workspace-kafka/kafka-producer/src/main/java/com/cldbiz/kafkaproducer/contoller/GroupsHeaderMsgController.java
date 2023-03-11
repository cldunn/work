package com.cldbiz.kafkaproducer.contoller;

import java.net.URI;
import java.util.Arrays;
import java.util.Random;
import java.util.concurrent.CompletableFuture;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.support.SendResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cldbiz.kafkaproducer.common.JsonResponse;
import com.cldbiz.kafkaproducer.exception.ApplicationException;
import com.cldbiz.kafkashare.dto.Farewell;
import com.cldbiz.kafkashare.dto.Greeting;

@RestController
@RequestMapping("/v1")
public class GroupsHeaderMsgController {
	private static final Logger LOGGER = LoggerFactory.getLogger(GroupsHeaderMsgController.class);
	
    @Value(value = "${simple.topic.name}")
    private String simpleTopicName;

    @Value(value = "${partitionedQueue.topic.name}")
    private String partitionedQueueTopicName;

    @Value(value = "${broadcast.topic.name}")
    private String broadcastTopicName;

    @Value(value = "${greeting.topic.name}")
    private String greetingTopicName;

    @Value(value = "${filteredGreeting.topic.name}")
    private String filteredGreetingTopicName;

    @Value(value = "${multiType.topic.name}")
    private String multiTypeTopicName;

    @Value(value = "${consumer.service.baseUrl}")
    private String consumerServiceBaseUrl;

    @Value(value = "${restTemplate.hello.endpoint}")
    private String restTemplateHelloEndpoint;

    @Autowired
    private KafkaTemplate<String, String> simpleKafkaTemplate;
    
    @Autowired
    private KafkaTemplate<String, String> partitionedQueueKafkaTemplate;

    @Autowired
    private KafkaTemplate<String, Greeting> greetingKafkaTemplate;

    @Autowired
    private KafkaTemplate<String, Greeting> filteredGreetingKafkaTemplate;
    
    @Autowired
    private KafkaTemplate<String, Object> multiTypeKafkaTemplate;

    @Autowired
    private RestTemplate restTemplate;
    
    @GetMapping(value="/sendMessage/{msg}", produces="application/json") 
	public ResponseEntity<JsonResponse> sendMessage(@PathVariable("msg") String msg) {
    	// Use appropriate KafkaTemplate to send String messages to simpleTopicName queue
    	CompletableFuture<SendResult<String, String>> future = simpleKafkaTemplate.send(simpleTopicName, msg);
    	future.exceptionally(ex -> {
    		LOGGER.error(ex.getMessage());
    		throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
    	});

    	return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully sent message: " + msg).built(), HttpStatus.OK);
    }
    
    @GetMapping(value="/partitionedMessage/{cnt}/{msg}", produces="application/json") 
	public ResponseEntity<JsonResponse> sendMessage(@PathVariable("cnt") Integer cnt, @PathVariable("msg") String msg) {
		// Use appropriate KafkaTemplate to send String messages to partitioned partitionedQueueTopicName queue
    	for (int i = 0; i < cnt; i++) {
    		CompletableFuture<SendResult<String, String>> future = partitionedQueueKafkaTemplate.send(partitionedQueueTopicName, msg + " - " + i);
        	future.exceptionally(ex -> {
        		LOGGER.error(ex.getMessage());
        		throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
        	});
    	}
    	
    	return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully sent message: " + msg + " " + cnt + " times.").built(), HttpStatus.OK);
    }

    @GetMapping(value="/broadcastMessage/{cnt}/{msg}", produces="application/json") 
	public ResponseEntity<JsonResponse> broadcastMessage(@PathVariable("cnt") Integer cnt, @PathVariable("msg") String msg) {
		// Use appropriate KafkaTemplate to send String messages to partitioned broadcastTopicName queue
    	for (int i = 0; i < cnt; i++) {
        	CompletableFuture<SendResult<String, String>> future = partitionedQueueKafkaTemplate.send(broadcastTopicName, msg + " - " + i);
        	future.exceptionally(ex -> {
        		LOGGER.error(ex.getMessage());
        		throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
        	});
    	}
    	
    	return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully broadcasted message: " + msg + " " + cnt + " times.").built(), HttpStatus.OK);
    }

    @GetMapping(value="/greetingMessage/{msg}/{name}", produces="application/json") 
	public ResponseEntity<JsonResponse> greetingMessage(@PathVariable("msg") String msg, @PathVariable("name") String name) {
		
		// Use appropriate KafkaTemplate to send Greeting entity to greetingTopicName queue
    	Greeting greeting = new Greeting(msg, name);
    	CompletableFuture<SendResult<String, Greeting>> future = greetingKafkaTemplate.send(greetingTopicName, greeting);
    	future.exceptionally(ex -> {
    		LOGGER.error(ex.getMessage());
    		throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
    	});

    	return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully greeting message: " + greeting.toString()).built(), HttpStatus.OK);
    }

    @GetMapping(value="/filteredGreetingMessage/{cnt}/{msg}/{name}", produces="application/json") 
	public ResponseEntity<JsonResponse> filteredGreetingMessage(@PathVariable("cnt") Integer cnt, @PathVariable("msg") String msg, @PathVariable("name") String name) {
		
		// Use appropriate KafkaTemplate to send Greeting entity to greetingTopicName queue
		for (int i = 0; i < cnt; i++) {
			Greeting greeting = new Greeting(msg, name + " - " + i);
			CompletableFuture<SendResult<String, Greeting>> future = filteredGreetingKafkaTemplate.send(filteredGreetingTopicName, greeting);
	    	future.exceptionally(ex -> {
	    		LOGGER.error(ex.getMessage());
	    		throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
	    	});
		}
		
    	return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully sent filtered greeting message for: " + msg + " and " + name).built(), HttpStatus.OK);
    }

    @GetMapping(value="/multiTypeMessage/{greet}/{farewell}/{name}", produces="application/json") 
	public ResponseEntity<JsonResponse> multiTypeMessage(@PathVariable("greet") String greet, @PathVariable("farewell") String farewell, @PathVariable("name") String name) {
		
		// Use appropriate KafkaTemplate to send Greeting/Farwell entity to multiTypeTopicName queue
		CompletableFuture<SendResult<String, Object>> future = multiTypeKafkaTemplate.send(multiTypeTopicName, new Greeting(greet, name));
	    future.exceptionally(ex -> {
	    	LOGGER.error(ex.getMessage());
	    	throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
	    });
		
		future = multiTypeKafkaTemplate.send(multiTypeTopicName, new Farewell(farewell, (int) new Random().nextInt(10) + 1));
	    future.exceptionally(ex -> {
	    	LOGGER.error(ex.getMessage());
	    	throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
	    });

	    return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully sent greeting/farewl messages for: " + greet + "/" + farewell + " " + name).built(), HttpStatus.OK);
    }

    @GetMapping(value="/restTemplate/{greet}/{name}", produces="application/json") 
	public ResponseEntity<JsonResponse> restTemplateMessage(@PathVariable("greet") String greet, @PathVariable("name") String name) {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		
		Farewell farewell = null;
		Greeting greeting = new Greeting(greet, name);
		HttpEntity<Greeting> entity = new HttpEntity<Greeting>(greeting, headers);
		
		try {
			URI uri = URI.create(consumerServiceBaseUrl + restTemplateHelloEndpoint);
			// String url = consumerServiceBaseUrl + restTemplateHelloEndpoint;
			ResponseEntity<Farewell> responseEntity = restTemplate.exchange(uri, HttpMethod.POST, entity, Farewell.class);

			farewell = responseEntity.getBody();
			
		} 
		catch(Exception ex) {
	    	LOGGER.error(ex.getMessage());
	    	throw new ApplicationException(ex.getMessage()).setStatusCode(HttpStatus.BAD_GATEWAY);
		}

	    return new ResponseEntity<JsonResponse>(JsonResponse.getBuilder("Successfully sent greeting/farewell messages: " + greeting + "/" + farewell).built(), HttpStatus.OK);
    }
}
