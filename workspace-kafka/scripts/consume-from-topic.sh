echo Will display one message per line as recieved, ctrl-C to quit
../bin/kafka-console-consumer.sh --topic $1 --bootstrap-server localhost:9092
