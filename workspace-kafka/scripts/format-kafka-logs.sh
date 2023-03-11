#Only seems to work if run one line at a time form the bash command line from /scripts
KAFKA_CLUSTER_ID="$(../../tools/kafka_2.13-3.4.0/bin/kafka-storage.sh random-uuid)"
echo $KAFKA_CLUSTER_ID
../../tools/kafka_2.13-3.4.0/bin/kafka-storage.sh format --cluster-id $KAFKA_CLUSTER_ID  --config ./server.properties