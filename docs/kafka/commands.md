---
id: commands
title: Kafka Commands Cheat sheet - Basics
---

### Topics
Detail for the topics command
```bash
bin/kafka-topics.sh
```
Creating a topic will all the required arguments
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test1 --create --partitions 3 --replication-factor 3
```
Creating a topic including all of the zookeeper servers (not required)
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181,zookeeper2:2181,zookeeper3:2181/kafka --topic test1 --create --partitions 3 --replication-factor 3
```
List all topics
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --list
```
Describing a topic
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test2 --describe
```
Delete a topic
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test2 --delete
```


### Producers
Detail for the producer command
```bash
bin/kafka-console-producer.sh
```
Start a console producer to topic 'test'
```bash
bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test
```
Add the acks=all flag to your producer
```bash
bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test --producer-property acks=all
```
Create a topic with the console producer (not recommended)
```bash
bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test4
```
List the newly created topic
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --list
```
View the partitions for a topic
```bash
bin/kafka-topics.sh --zookeeper zookeeper1:2181/kafka --topic test5 --describe
```

### Consumers
Detail for the consumer command
```bash
bin/kafka-console-consumer.sh
```
Start a console consumer to a topic
```bash
bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test
```
Consuming messages from the beginning
```bash
bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --from-beginning
```

#### Consumer Groups
Detail for the consumer groups command
```bash
bin/kafka-consumer-groups.sh
```
Start a consumer group for a topic
```bash
bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --group application1
```
Start producing new messages to a topic
```bash
bin/kafka-console-producer.sh --broker-list kafka1:9092 --topic test
```
Start a consumer group and read messages from the beginning
```bash
bin/kafka-console-consumer.sh --bootstrap-server kafka3:9092 --topic test --group application1 --from-beginning
```
List the consumer groups
```bash
bin/kafka-consumer-groups.sh --bootstrap-server kafka3:9092 --list
```
Describe a consumer group
```bash
bin/kafka-consumer-groups.sh --bootstrap-server kafka3:9092 --describe --group application1
```