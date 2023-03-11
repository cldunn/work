package com.cldbiz.kafkaproducer.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.RoundRobinPartitioner;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import com.cldbiz.kafkashare.dto.Greeting;

/*
 * Create 3 pairs of ProducerFactory/KafkaTemplate to produce String, Greeting and MultiType messages 
 */

@Configuration
public class KafkaProducerConfig {
    @Value("${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;

    /*
     * Create ProducerFactory bean for simple String message
     */
    @Bean
    public ProducerFactory<String, String> stringProducerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        
        configProps.put(ProducerConfig.MAX_REQUEST_SIZE_CONFIG, "20971520");

        return new DefaultKafkaProducerFactory<>(configProps);
    }

    /*
     * Create ProducerFactory bean for round robin amongst partitions String message
     * 
     * By default the DefaultKraftProducerFactory  will
     * 	1. pick partitioned by hashing message key
     *  2. pick partition using Sticky Partitioner (Kafka ≥ 2.4)
	 *  	a. “stick” to a partition until the batch is full or linger.ms has elapsed
	 *      b. After sending the batch, change the partition that is "sticky"
	 *  3. batch_size_config of 0 switches partitions after each request resulting in round robin
	 *  
	 *  sticky partition is more efficient than round robin, batch_size_config default is 16384
     */
    @Bean
    public ProducerFactory<String, String> partitionedQueueProducerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        
        configProps.put(ProducerConfig.MAX_REQUEST_SIZE_CONFIG, "20971520");

        configProps.put(ProducerConfig.BATCH_SIZE_CONFIG, "0");
        
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    /*
     * Create ProducerFactory bean for Greeting entity message
     */
    @Bean
    public ProducerFactory<String, Greeting> greetingProducerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        
        return new DefaultKafkaProducerFactory<>(configProps);
    }
    
    @Bean
    public ProducerFactory<String, Object> multiTypeProducerFactory() {
        Map<String, Object> configProps = new HashMap<>();
        configProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        configProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        
        configProps.put(JsonSerializer.TYPE_MAPPINGS, 
        		"greeting:com.cldbiz.kafkashare.dto.Greeting, " +
        		"farewell:com.cldbiz.kafkashare.dto.Farewell");
        
        return new DefaultKafkaProducerFactory<>(configProps);
    }

    /*
     * Create KafkaTemplate bean for sending String messages using appropriate Producer Factory
     */
    @Bean
    public KafkaTemplate<String, String> simpleKafkaTemplate() {
        return new KafkaTemplate<>(stringProducerFactory());
    }

    /*
     * Create KafkaTemplate bean for sending String messages using appropriate Producer Factory
     */
    @Bean
    public KafkaTemplate<String, String> partitionedQueueKafkaTemplate() {
        return new KafkaTemplate<>(partitionedQueueProducerFactory());
    }

    /*
     * Create KafkaTemplate bean for sending String messages using appropriate Producer Factory
     */
    @Bean
    public KafkaTemplate<String, String> broadcastKafkaTemplate() {
        return new KafkaTemplate<>(stringProducerFactory());
    }

    /*
     * Create KafkaTemplate bean for sending Greeting entities using appropriate Producer Factory
     */
    @Bean
    public KafkaTemplate<String, Greeting> greetingKafkaTemplate() {
        return new KafkaTemplate<>(greetingProducerFactory());
    }

    /*
     * Create KafkaTemplate bean for sending Greeting entities using appropriate Producer Factory
     */
    @Bean
    public KafkaTemplate<String, Greeting> filteredGreetingKafkaTemplate() {
        return new KafkaTemplate<>(greetingProducerFactory());
    }

    @Bean
    public KafkaTemplate<String, Object> multiTypeKafkaTemplate() {
        return new KafkaTemplate<>(multiTypeProducerFactory());
    }
}
