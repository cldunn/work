echo Enter one message per line and then ctrl-C to quit
../bin/kafka-console-producer.sh --topic $1 --bootstrap-server localhost:9092