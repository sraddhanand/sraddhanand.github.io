---
id: kops
title: Kubernetes Operations (KOPS)
---

Create, Manage. destroy kubernetes cluster using kops.

### Benifits

- Production-grade
- Highly available
- Fully automated
- Cluster configuration in Infrastructure as Code
- Self-healing: everything runs in Auto-Scaling Groups

### References

- [Github Repo](https://github.com/kubernetes/kops)
- [Kuberetes document](https://kubernetes.io/docs/setup/production-environment/tools/kops/)
- [Installation Guide](https://kops.sigs.k8s.io/getting_started/install/)

### How it works

When you run kops cli to create kubernetes cluster following steps happens (Explained for cluster running in AWS EC2 topology, not EKS)

- It creates secrets and necessary objects needed to create cluster and stores in the S3 bucket defined by variable <code>KOPS_STATE_STORE</code>
- If <code>--target terraform</code> is passed to <code>kops create cluster</code>, it created <code>kubernetes.tf</code> and <code>data</code> directory containing the configuration files such as <code>IAM</code>, <code>Launchconfiguration files</code>.
- creates all the resources like <code>AWS VPC Network</code><code>Route 53 records</code> for API server and other, <code> AutoScaling groups</code> for master and nodes, <code>Launch configurations </code>
- Controle plane/Master instaces create kubernetes cluster
- Nodes join the clusters

:::note
<code>kops create cluster</code> will only creates configurations.
Run <code>kops update cluster</code> to create cluster resources using the above configuration.
:::

### Commands

```bash
kops create cluster --zones=us-east-1c useast1.dev.example.com
kops get cluster # List clusters
kops edit cluster useast1.dev.example.com
kops edit ig --name=useast1.dev.example.com nodes # edit node instance groups
kops update cluster useast1.dev.example.com --yes
kops rolling-update cluster
kops delete cluster useast1.dev.example.com --yes
```

```bash
KOPS_STATE_STORE=s3://aws-s3-unique-bucket-name kops create secret --name useast1.dev.example.com sshpublickey admin -i ~/.ssh/id_rsa.pub

AWS_PROFILE=chops kops create cluster \
  --name=useast1.dev.example.com \
  --state=s3://aws-s3-unique-bucket-name \
  --dns-zone=example.com \
  --out=. \
  --target=terraform \
  --bastion=false \
  --zones=us-east-1a,us-east-1b \
  --ssh-public-key=~/.ssh/id_rsa.pub
```
