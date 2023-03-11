../bin/kafka-run-class.sh kafka.tools.GetOffsetShell --broker-list localhost:9092  --topic $1 | awk -F  ":" '{sum += $3} END {print "Result: "sum}'
