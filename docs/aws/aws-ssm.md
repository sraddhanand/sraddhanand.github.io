---
id: aws-ssm
title: AWS Systems Manager
---

## Managed instances
- A centralized, consolidated view of your infrastructure regardless of on premises servers or AWS instances. 
- Helps to track inventory, operational management, patching the systems, 
- Create and use runbook-like documents which can be used to run on a system to perform some actions on the managed instances.
- SSM agent on the server communicates with AWS SSM API
- AWS instances' IAM role need appropriate SSM policy 
- On premises instances need to be configured using **hybrid activation** and SSM agent.

## Resource Groups
Collection of AWS resources in the regions that matches certain criteria 
- Tag based 
- Cloudformation stack based

## Documents
Defines the actions along with parameters that the SSM performs in the managed instances. Writen in YAML or JSON.
- Can be **versioned** and used any version.
- Can also be **shared publicly**, with the specific account 
- Control users/resources using **IAM policies**

### Parameter Store
Provides secure, hierarchical storage for configuration data management and secret management
- Similar to veriables, we can define parameters for **documents/scripts/commads**.
- Can integrate with AWS services along with SSM.
    - EC2
    - ECS
    - Lambda
    - Cloudformation
    - CodeBuild
    - CodePipeline
    - Code Deploy
    - CloudWatch
    - CloudTrail
    - SNS
    - KMS
- can be stored as plain text and ciphertext
- Lifecycle policies can be defined on parameter
- can be Encrypted using KMS
#### Sample code snippet for SSM document along with parameters
```yaml
schemaVersion: '2.2'
description: 'Run a script on Linux instances.'
parameters:
  commands:
    type: String
    description: "(Required) The commands to run or the path to an existing script on the instance."
    default: 'echo Hello World'
mainSteps:
- action: aws:runShellScript
  name: runCommands
  inputs:
    timeoutSeconds: '60'
    runCommand:
    - "{{ commands }}"

```
> Code Ref: [AWS::SSM::Document](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html)

## Session manager
- Manage EC2 instance or On-premises managed servers through an interactive browser based shell or through AWS CLI
- No need to enable SSH (port 22) on security groups
- No need of bastion host and SSH keys
- Can be controlled using the IAM policies
- logging and auditing can be done using <code>CloudTrail</code>/<code>S3</code>/<code>CloudWatch</code>
#### How it works
- SSM Agent running in the instances are responsible for the interactive shell 
- SSM Agent creates a <code>user with sudo access</code> and when the session is established, IAM user gets logged into the server as this SSM agent's <code>user</code>
- Communication between SSM and Instances secured with TLSv1.2 protocal and can be enhanced with KMS
### Hybrid Activation:
- Install SSM agent on the server
- Create hybrid activation using the AWS SSM Console or AWSCLI and get the <code>activation code</code> & <code>ID</code>
```bash
aws ssm create-activation \
  --default-instance-name MyWebServers \
  --iam-role service-role/AmazonEC2RunCommandRoleForManagedInstances \
  --registration-limit 10 \
  --region us-east-2 \
  --tags "Key=Environment,Value=Production" "Key=Department,Value=Finance"
```
- Use the returned/generated <code>activation code</code> & <code>ID</code> in the server and register it with the AWS SSM
```bash
amazon-ssm-agent -register -code "activation-code" -id "activation-id" -region "region"
```
For the complete steps, please visit aws documentation on [SSM for hybrid environments](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html)

## Run Command
- Remotely run commands/documents in all managed instances.
- Instances can be selected by tag or resourse groups or managed instance id
- integrations
    - SNS for status notification
    - S3 for execution output logs
    - Cloudwatch for execution output logs
- Useful in scripting automation

## State manager
- Works via <code>association</code> and requires <code>IAM Service Role</code>
- Useful for keeping the **managed instances in defined state**
### Association
- Configuration assigned to managed instances
- Runs on a schedule
- Need to specify
    - Command Document
    - Execution strategy
    - input Parameters
    - <code>schedule</code> or <code>run once only</code>
- Output can be logged into S3 only.

## Patch Manager
- Can create your own **patch baselines** with the list of approved patches for installation on managed instances
- Can be used with <code>maintenance Window</code> for auto approved patch installation
- Uses SSM Documents for patch baselines and excution.
- Patch Baselines defines which packages are approved for your instances. 

## Inventory
- Collects the **metadata** of the managed instances and optionally store it in <code>S3</code>.
- Keeps track of installed packages and versions
- Ref: [AWS SSM Inventory](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-inventory.html)

## Distributor
- versatile software packaging and shipping tool for hybrid environments. 
- Multi-platform package creation and shipping (Linux/Windows)
- Version control, and enables you to restrict access to creation and installation using IAM policies
- Can auto-generate software deployment commands and scripts on your behalf or give you the option to provide custom ones
- Software packages created in one account can be shared with other AWS accounts

## Automation
- Complex IT workflows can be automated using SSM Automation.
- <code>Actions</code> can define one or more series of steps and each step is associated with <code>action</code> or <code>plugin</code>
- AWS Services can be invokes using <code>aws:executeAwsApi</code> action; other actions allow waiting for the particular state before proceeding.
- ref: [SSM Automation actions](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-actions.html)


## References:
- [How Systems Manager works](https://docs.aws.amazon.com/systems-manager/latest/userguide/how-it-works.html)
- SSM Agent logs: <code>/var/log/amazon/ssm/amazon-ssm-agent.log</code>

