---
id: terraform
title: Infrastructure As Code (IAC)
sidebar_label: Terraform
---
## IAC Features
- Create, manage all the infrastructure provisioning like servers, networking, storage, loadbalancers, other configurations using code rather than manual steps.
- Write the code to achieve the desired state.
- Store the created resources details
- update or delete the resources 
- integrate provisioners such as Chef/Puppet/Ansible/Shell script
- Manage the lifecycle of resources


## Which tool to choose?
To choose the right IAC tool, understand the below scenarios.
- What are the cloud providers we are going to use for the next few years ?
- How many cloud accounts we need to manage ?
- What are the complexities we will end up with if we choose cloud provider's IAC (ex: AWS Cloudformation)
- Integration with configuration management
- Cost associated to manege the tool

## Terraform
- Compared to other tools like Ansible, Chef, etc; Terraform developed keeping infrastucture as code as a primary strategy. [Comparion](https://www.terraform.io/intro/vs/index.html)
- Supports multiple platform by using 100s of providers already available.
- Available as freeware & cloud solution.
- Very simple to manage; we need terraform **binary and the storage** (ex: S3 bucket) for state files.
- [Great documentation](https://www.terraform.io/docs/index.html) is available for all the providers and it is very easy to learn.
- However, once the infrastructure is provisioned using terraform, we can use configuration management tools on the instance. Terraform provides very good support for such integrations. 
- ***Dry run*** is very well implemented using <code>terraform plan</code>