echo Enter one message per line and then ctrl-C to quit
../../tools/kafka_2.13-3.4.0/bin/kafka-console-producer.sh --topic $1 --bootstrap-server localhost:9092
