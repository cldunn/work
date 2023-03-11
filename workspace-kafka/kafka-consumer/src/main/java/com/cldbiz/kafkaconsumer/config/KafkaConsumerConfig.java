package com.cldbiz.kafkaconsumer.config;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.converter.RecordMessageConverter;
import org.springframework.kafka.support.converter.StringJsonMessageConverter;
import org.springframework.kafka.support.mapping.DefaultJackson2JavaTypeMapper;
import org.springframework.kafka.support.mapping.Jackson2JavaTypeMapper;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import com.cldbiz.kafkashare.dto.Farewell;
import com.cldbiz.kafkashare.dto.Greeting;

@EnableKafka
@Configuration
public class KafkaConsumerConfig {
	
    @Value(value = "${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;

    /* 
     * Create a ConsumerFactory to consume String messages,
     * groupId links to ConcurrentKafkaListenerContainerFactory instance
     */
    public ConsumerFactory<String, String> stringConsumerFactory(String groupId) {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        
        props.put(ConsumerConfig.MAX_PARTITION_FETCH_BYTES_CONFIG, "20971520");
        props.put(ConsumerConfig.FETCH_MAX_BYTES_CONFIG, "20971520");
        
        return new DefaultKafkaConsumerFactory<>(props);
    }

    public ConsumerFactory<String, Greeting> greetingConsumerFactory(String groupId) {
        Map<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);
        
        // Message deserializer needs to define entity class being deserialized
        return new DefaultKafkaConsumerFactory<>(props, new StringDeserializer(), new JsonDeserializer<>(Greeting.class));
    }
    
    @Bean
    public ConsumerFactory<String, Object> multiTypeConsumerFactory() {
        HashMap<String, Object> props = new HashMap<>();
        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapAddress);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        
        return new DefaultKafkaConsumerFactory<>(props);
    }

    /* 
     * Create groupId specific instances of ConcurrentKafkaListenerContainerFactory bean 
     */
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> simpleKafkaListenerContainerFactory() {
    	ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(stringConsumerFactory("simpleGroupId"));
        return factory;
    }

    /* 
     * Create groupId specific instances of ConcurrentKafkaListenerContainerFactory bean 
     */
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> partitionedQueueKafkaListenerContainerFactory() {
    	ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(stringConsumerFactory("partitionedQueueGroupId"));
        return factory;
    }
    
    /* 
     * Create groupId specific instances of ConcurrentKafkaListenerContainerFactory bean 
     */
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, String> broadcastKafkaListenerContainerFactory() {
    	ConcurrentKafkaListenerContainerFactory<String, String> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(stringConsumerFactory("broadcastGroupId"));
        return factory;
    }

    /* 
     * Create groupId specific instances of ConcurrentKafkaListenerContainerFactory bean 
     */
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Greeting> greetingKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Greeting> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(greetingConsumerFactory("greetingGroupId"));
        return factory;
    }

    /* 
     * Create groupId specific instances of ConcurrentKafkaListenerContainerFactory bean 
     */
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Greeting> filteredGreetingKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Greeting> factory = new ConcurrentKafkaListenerContainerFactory<>();
        
        factory.setConsumerFactory(greetingConsumerFactory("filteredGreetingGroupId"));
        
        factory.setRecordFilterStrategy(record -> { 
        	return record.value().getName().contains("0"); 
        });
        
        return factory;
    }
    
    /* 
     * Must supply RecordMessageConverter implementation for JsonDeserializer.class 
     * used in ConsumerFactory<String, Object> (aka. multiTypeConsumerFactory)
     */
    @Bean
    public RecordMessageConverter multiTypeConverter() {
        StringJsonMessageConverter converter = new StringJsonMessageConverter();
        
        DefaultJackson2JavaTypeMapper typeMapper = new DefaultJackson2JavaTypeMapper();
        typeMapper.setTypePrecedence(Jackson2JavaTypeMapper.TypePrecedence.TYPE_ID);
       
        typeMapper.addTrustedPackages("com.cldbiz.kafkashare.dto");
        Map<String, Class<?>> mappings = new HashMap<>();
        mappings.put("greeting", Greeting.class);
        mappings.put("farewell", Farewell.class);
        typeMapper.setIdClassMapping(mappings);
        
        
        converter.setTypeMapper(typeMapper);
        
        return converter;
    }
    
    /* 
     * Starting with version 2.1, type information can be conveyed in record Headers, 
     * allowing the handling of multiple types
     * 
     * If a container factory is not specified for the listener the default container factory is used
     *
    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, Object> multiTypeKafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, Object> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(multiTypeConsumerFactory());
        factory.setMessageConverter(multiTypeConverter());
        return factory;
    }
    */
	
}
