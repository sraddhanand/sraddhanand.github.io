---
id: pega
title: Pega System
sidebar_position: 1
---

### Principal Cloud Development Engineer - ML & AI
*June-2021 to PRESENT*

- Implemented **Service mesh** practices such as  traffic management, security,  deployment, Session Affinity using **Istio**
- Managing Kubernetes environment(s) for **multi-tenant** application deployment, upgrade. security, scalability, HA using **Terraform, EKS, Helm Charts**
- Implemented **Design Patterns** such as **Retry, Circuit breaker, Ratelimit** using istio & Gloo Edge
- Implemented **Canary Deployment** using **ArgoCD** in K8S Cluster
- Implementing the Observability practices (metrics, traces, logging) using **prometheus, jaeger, fluentd & newrelic**


### Principal System Engineer - Cloud
*Oct-2018 to May-2021*

- Design, Develop, deploy and maintain the high available, scalable and reliable microservice architecture
- Identifying the pain points in the operations and automating the solutions  to **reduce the toil**
- Develop automations to decrease the **Mean Time To Detect** and **Mean Time to Recovery**
- Design and implement the Event Driven Auto Remediation for critical alerts triggered by **datadog** and Pega APM
- Design and implement observability practices such as logging, metrics, tracing using open source softwares such as **prometheus, grafana, Elasticsearch - Beats** for microservice architecture
- Design solutions to measure **uptime, availability, cost-optimization, capacity monitoring.**
- **Proactive monitoring** for a large fleet of cloud resources and reporting them and designing the  solutions to fix the addressed issues.
- Designed and successfully implemented microservice architecture with best suited **design patterns for reliable, scalable, secure** applications in the cloud.
- Developed and deployed container orchestration using **terraform, kubernetes, helm charts, kops**.
- Developed and managed multiple **Dockerfiles, compose files** for containerized applications.

### Automations
- ***Forensic Analysis:*** To reduce Mean Time to Detect the system outage, a python package is created to scan a fleet of instance’s cloudwatch logs for the given time window and display html output consisting of  exceptions, timestamp, number of occurrences per instance along with the whole summary of cluster for the affected environment.
- ***Stack Health Validation***: A consolidated status page of the particular client environment is designed using AWS SSM run command, python script  to gather the indicators and health of the customer environment consisting of multiple tiers of instances. 
- ***Database Health***: SQL statements based on SOP along with postgresql’s psql utility to get the health of the postgres engine running in AWS RDS. It lists out long running queries, top tables by size, number of connections by clients, Vacuum and bloat info, list of schemas, etc..
- ***JVM dump collection & Analysis***:  A simple utility to get the thread dumps and heap dumps from the tomcat container and then push it to the analyzing tool.
- ***SLA and SLI Metrics***: With the help of different AWS and datadog metrics, measuring the Service Level Availability and Indicators for the month for all clients.
- ***Event Driven Auto-Remediation***: Handling of 3 types of alerts are automated using EDAR principles. The solution uses event source (Datadog/APM), SNS, Lambda, Python REST API and AWS SSM run commands to accomplish the tasks. 
- ***Disk cleanup***: It cleans the disk space usage in the ec2 instances.
- ***JVM OutOfMemory & Memory Analysis***: It collects the heap dump, remediates the JVM, analyzes the heap dump and notifies over the Webex Chat.
- ***Kafka Offline Partitions or URP***: It identifies the kafka broker which has offline partitions or under replicated partitions and recovers the service.
- ***Time Series metrics***: Created kubernetes cronjob to run the python script (uses boto3 + Pandas) to collect the metrics using DB query from ~2000 RDS instances, feeds the output csv  into InfluxDB. Grafana dashboards are created to display these metrics. 