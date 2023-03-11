package com.cldbiz.kafkaconsumer.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaHandler;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.annotation.TopicPartition;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Component;

import com.cldbiz.kafkashare.dto.Farewell;
import com.cldbiz.kafkashare.dto.Greeting;



@Configuration
public class KafkaListenerConfig {

	@KafkaListener(topics = "${simple.topic.name}", groupId = "simpleGroupId", containerFactory = "simpleKafkaListenerContainerFactory")
    public void listenGroupSimple(String message) {
        System.out.println("Received Message in group 'simpleGroupId': " + message);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${partitionedQueue.topic.name}", partitions = { "0" }), 
    		groupId = "partitionedQueueGroupId", containerFactory = "partitionedQueueKafkaListenerContainerFactory")
    public void listenToPartitionedQueue1(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Partitioned Message 1: " + message + " from partition: " + partition);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${partitionedQueue.topic.name}", partitions = { "1" }), 
    		groupId = "partitionedQueueGroupId", containerFactory = "partitionedQueueKafkaListenerContainerFactory")
    public void listenToPartitionedQueue2(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Partitioned Message 2: " + message + " from partition: " + partition);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${partitionedQueue.topic.name}", partitions = { "2" }), 
    		groupId = "partitionedQueueGroupId", containerFactory = "partitionedQueueKafkaListenerContainerFactory")
    public void listenToPartitionedQueue3(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Partitioned Message 3: " + message + " from partition: " + partition);
    }

    
    @KafkaListener(topicPartitions = @TopicPartition(topic = "${broadcast.topic.name}", partitions = { "0-2" }), 
    		groupId = "broadcastGroupId-1", containerFactory = "broadcastKafkaListenerContainerFactory")
    public void listenToBroadcast1(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Broadcast Message 1: " + message + " from partition: " + partition);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${broadcast.topic.name}", partitions = { "0-2" }), 
    		groupId = "broadcastGroupId-2", containerFactory = "broadcastKafkaListenerContainerFactory")
    public void listenToBroadcast2(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Broadcast Message 2: " + message + " from partition: " + partition);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${broadcast.topic.name}", partitions = { "0-2" }), 
    		groupId = "broadcastGroupId-3", containerFactory = "broadcastKafkaListenerContainerFactory")
    public void listenToBroadcast3(String message, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Broadcast Message 3: " + message + " from partition: " + partition);
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${greeting.topic.name}", partitions = { "0" }), 
    		groupId = "greetingGroupId", containerFactory = "greetingKafkaListenerContainerFactory")
    public void listenToGreeting(Greeting greeting, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received Greeting Message: " + greeting.toString());
    }

    @KafkaListener(topicPartitions = @TopicPartition(topic = "${filteredGreeting.topic.name}", partitions = { "0" }), 
    		groupId = "filteredGreetingGroupId", containerFactory = "filteredGreetingKafkaListenerContainerFactory")
    public void listenToFilteredGreeting(Greeting greeting, @Header(KafkaHeaders.RECEIVED_PARTITION) int partition) {
        System.out.println("Received FilteredGreeting Message: " + greeting.toString());
    }
    
    @Component
    @KafkaListener(id = "multiGroup", topics = "${multiType.topic.name}")
    public class MultiTypeKafkaListener {
        
    	@KafkaHandler
        public void handleGreeting(Greeting greeting) {
            System.out.println("Greeting received (multiGroup): " + greeting);
        }

        @KafkaHandler
        public void handleF(Farewell farewell) {
            System.out.println("Farewell received (multiGroup): " + farewell);
        }

        @KafkaHandler(isDefault = true)
        public void unknown(Object object) {
            System.out.println("Unkown type received (multiGroup): " + object);
        }
    }
}
