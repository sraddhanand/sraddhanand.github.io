---
id: aws-aurora
title: Aurora Database
---

## 

- Custom designed database engine that is part of the RDS service.
- It comes with huge significant feature enhancements.
- It is native cloud optimized built DB, which is different than all the other DBs in the cloud. 
- Each aurora cluster contains **at least one primary instance with zero or more replicas**. 
- Aurore uses a different based configuration of clusters
- share **cluster storage of 64 Terabypes and six replicas across 3 AZs**. It constantly replicating between the cluster volumes and the copies of the data
- You start out with a zero storage allocation and then you use whatever you can use. Engines in your storage will actually grow automatically in **increments of 10 gigabytes up to 64 terabytes**. 

## Benefits:
- The instance fail ever typically takes less than 30 seconds because it uses shared storage. 
- **Backtrack**:  lets us rewind our database within seconds to a previous point in time.
- **Security**
    - includes network isolation and using the VPC
    - encryption at rest using KMS keys
    - encryption of data in transit using SSL
    - Aurore automatically and continuously monitors and backs up our database to S3
- To scale up writer, either we can increase the writer instance type or add more writer instances in the cluster. Both are possible
- With Aurora you can create autoscaling of the <code>Reader</code> similar to ec2 autoscaling.

