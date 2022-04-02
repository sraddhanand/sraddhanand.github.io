---
id: terraform-cheat-sheet
title: Terraform CLI Cheat sheet
sidebar_label: CLI Cheat sheet
---


```bash
terraform init
```

```bash
terraform init --backend
```

```bash
terraform fmt
terraform validate
```
```bash
terraform graph > graph.dot
```

```bash
terraform refresh
```
Fetches the current state of the resources and updates the state file.

```bash
terraform plan
terraform plan --out=file_obs_path
terraform plan --refresh=false # will disable querying the current state during plan
terraform plan --target=aws_instance.myec2 #only ec2 resourece named myec2 will be refreshed
```
Generally displays what changes are going to take place to achieve the desired state.

Apply the desired state from the module.
```bash
terraform apply
```
Apply the desired state from plan output.
```bash
terraform apply file_obs_path
```

```bash
terraform import
```

Reads the state file and displays <code>output_variable_name</code> value
```bash
terraform output output_variable_name
```

Get the list of resources created and stored in statefile
```bash
terraform state list
```

Move resource name within a state.
```bash
terraform state mv aws_vpc.this aws_vpc.eks_vpc
```
