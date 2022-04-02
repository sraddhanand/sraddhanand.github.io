---
id: syntax
title: Files & Components
sidebar_label: Files & Components
---

Terraform does not have a specified directory structure as found in Chef or Ansible. But terraform follows different file extentions for the need. <br/>
Terraform reads all <code>.tf</code> files and apply them. 


## Files

### .tf
- All terraform configurations are writen in <code>.tf</code> files. 
- We can write one file with all required configurations or we can split the same configuration into multiple *.tf files for the ease of use.

### .tfvars
- Declaring terraform variables with default values should be handled in .tf files
- However multiple <code>.tfvars</code> files can be maintained for different environments or application.
- These .tfvars file can be passed to plan & apply commands to overwrite the default values.
```bash
terraform plan --var-file ./dev.tfvars
terraform apply --var-file ./dev.tfvars
```

### .tfstate
- It stores the result of apply or current state from the terraform configuration
- It follows json syntax
- We can use <code>backend</code> configuration and specify the location to store
- If <code>backend</code> is not specified <code>terraform.tfstate</code> file will be generated in the current directory

## Components
### Resources
- <code>resource</code> creates the resource with the confuguration mentioned against it's attributes
```hcl
resource "aws_instance" "web" {
  ami           = "ami-408c7f28"
  instance_type = "t1.micro"
}
```
- To get the complete list of attribute for each <code>resource</code>, please visit terraform official document.

### Data:
- <code>data</code> source allows a Terraform configuration to build on information defined outside of Terraform. 
```hcl
data "aws_ami" "web" {
  filter {
    name   = "state"
    values = ["available"]
  }

  filter {
    name   = "tag:Component"
    values = ["web"]
  }

  most_recent = true
}

resource "aws_instance" "web" {
  ami           = "${data.aws_ami.web.id}"
  instance_type = "t1.micro"
}
```
- To get the complete list of attributes for each <code>data</code> source, please visit terraform official document.

### Providers
- Providers are responsible in Terraform for managing the lifecycle of a resource: create, read, update, delete.
- Most providers require some sort of configuration to provide authentication information, endpoint URLs, etc. 
```hcl
provider "aws" {
  access_key = "foo"
  secret_key = "bar"
  region     = "us-east-1"
}
```
### Variables
- Input variables are parameters for the terraform configuration
- variable type can be <code>string</code>, <code>list</code>, <code>map</code>
- If type is not specified, type will be inferred from <code>default</code>
:::tip
If the default value is not specified and terraform plan/apply ran without --var-file flag, terraform will prompts for the user to key in the value. This practise may lead to errors during CI/CD. It is good practise to specify the default value.
:::
- We can use <code>TF_VAR_</code> as a pre-fix for the variables and use environment variable.
```bash
export  TF_VAR_instance_type=t2.micro
```
```hcl
variable "instance_type" {
    type = "string"
}
```
- <code>.tfvars</code> files store values of input variables
```hcl
instance_type=t2.micro
foo=bar
```

### Output
- Output values are like <code>return</code> or <code>print</code> statements. 
- While using <code>output</code> in child modules, it works like <code>return</code> so that these output values can be used else where in the main module/terraform configuration.
```hcl
output "instance_id" {
  value = aws_instance.web.id
}
```

### Modules
- Similar to Classes in other programming language, modules help in offloading standard configuration. 
- In Terraform, every directory which consists of .tf files is a module.
- Modules can be import from local filesystem or from a public or private registry. 
- <code>source</code> atrribute consist of paths, addresses, and URIs which represent the local/public/private module.

```hcl
module "ec2-instance" {
  source  = "terraform-aws-modules/ec2-instance/aws" 
  version = "2.17.0"
  name                   = "my-cluster"
  instance_count         = 5
}
```

### Functions
- Similar to any programming language terraform provide [built-in functions](https://www.terraform.io/docs/language/functions/index.html)

```hcl
output "combinied" {
    value = zipmap(aws_iam_user.lb[*].name, aws_iam_user.lb[*].arn)
}
```
