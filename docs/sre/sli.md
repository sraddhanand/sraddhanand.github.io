---
id: sli
title: Service Level Indecators
---

> Customer is god and Customer is always right.

- In today's world user expectations are higher than ever. Customers expect both a constant stream of new, high-quality features and for their applications to be available whenever they want them. To support this reality, software and operations teams both must ensure their services are performing acceptably within the larger system. 
- On the other hand, to accomplish the customer needs, product owners has to measure the product/application's various behaviour such as 
    - how fast the application is
    - **User expriance** while using the application: are they happy, if not what need to be done to make them happy and keep using the application/product.
    - how the application as a whole working at the architecture level
    - are there any failure at the microservices
    - what is the application/product availability which I can publish
    - what percentage of failure are OK 


**The service outcomes you think matter to users**
An indicator of the level of service you provide via your service, ideally expressed as a ratio of two numbers, typically a ratio of good events, divided by the total number of events

## Questions to ask for SLI
- who the users are?
- how they are interacting with your product?
- how does the data flow though out the system?
- high level architecture diagram of your system's component and what critical dependencies exist?

:::note    
With the SLI specification, you do not specify the specifics on indicator measurement. Measuring the assessment is referred to as an SLI implementation. We'll discuss SLI implementations in the next video. 
:::
## SLI Implementation
SLIs should be specific and measurable
- **Sources**:
    - Application server logs
        - Accurate data
        - But, miss requests which are failed to reach the server.
    - Load balancer logs or metrics
    - Client side instrumentation
        - Accurately captures the UX
- **Focus Areas**:
    - Quality/Accuracy of the UX measurments captured.
    - Coverage - How broad the customer experiance is captured
    - Cost

## Component categories
- Request Driven
    - User creates a event and expects a response
    - Either API or website
    - SLIs:
        - Availability: Could we respond to the request
        - Latency: how long did it take to respond
        - throughput: how many request can be handled overs period of time (per second or per minute)
- Big Data
    - Extract Transform Load (ETL) system
    - Throughput - How much data is processed
    - end to end latency - how long it takes for complete ETL process
- Storage
    - latency: how long it takes to read or write data
    - availability: can we access the data on demand
    - durability: is the data still there when we need it (Retention)

:::important
Start with those SLIs which are measurable and have direct business impact, if need partner with product teams.
:::

## Common SLI Definitions
Please maintain standard templetes for SLI.
- Aggregation intervals like averaging over 30 seconds or 1 mins
- Aggregation boundaries like all tasks in a cluster of hosts
- Measurement frequency like every five seconds. 
- Which requests are included in the indicator
- How the data is acquired from our monitoring service or client agents
- How the latency is measured 