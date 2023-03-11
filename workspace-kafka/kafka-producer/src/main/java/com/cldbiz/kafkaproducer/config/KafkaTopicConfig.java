package com.cldbiz.kafkaproducer.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;
import org.springframework.kafka.core.KafkaAdmin;

@Configuration
public class KafkaTopicConfig {
	@Value(value = "${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;

    @Value(value = "${simple.topic.name}")
    private String simpleTopicName;

    @Value(value = "${partitionedQueue.topic.name}")
    private String partitionedQueueTopicName;

    @Value(value = "${broadcast.topic.name}")
    private String brodcastTopicName;
    
    @Value(value = "${greeting.topic.name}")
    private String greetingTopicName;

    @Value(value = "${filteredGreeting.topic.name}")
    private String filteredGreetingTopicName;
    
    @Value(value = "${multiType.topic.name}")
    private String multiTypeTopicName;
    
    @Bean
    public KafkaAdmin kafkaAdmin() {
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        return new KafkaAdmin(configs);
    }

	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic topic() {
        return new NewTopic(simpleTopicName, 1, (short) 1);
    }

	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic partitionedQueueTopic() {
    	return new NewTopic(partitionedQueueTopicName, 3, (short) 1);
    }

	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic broadcastTopic() {
        return TopicBuilder.name(brodcastTopicName)
        	      .partitions(3)
        	      .replicas(1)
        	      .build();
    }
    
	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic greetingTopic() {
        return TopicBuilder.name(greetingTopicName)
        	      .partitions(1)
        	      .replicas(1)
        	      .build();
    }

	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic filteredGreetingTopic() {
        return TopicBuilder.name(filteredGreetingTopicName)
        	      .partitions(1)
        	      .replicas(1)
        	      .build();
    }
    
	/* 
	 * NewTopic(String name, int numPartitions, short replicationFactor) 
	 */
    @Bean
    public NewTopic multiTypeTopic() {
        return TopicBuilder.name(multiTypeTopicName)
        	      .partitions(1)
        	      .replicas(1)
        	      .build();
    }
}
