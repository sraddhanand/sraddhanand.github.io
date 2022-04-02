---
id: providers
title: Terraform providers
sidebar_label: Providers
---

[All the providers](https://registry.terraform.io/browse/providers) are categorized into 3 types.
- __Official__ : Managed HashiCorp
- __Verified__ : Developed by Community or enterprises and verified by HashiCorp
- __Community__ : Developed by Community or enterprises 


:::tip
Maintain the version specifcations in the terraform configuration
:::

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

```

### Version number syntax:
| Syntax | Meaning |
| ------ | ------- |
| >= 3.0 | Greater than or equal to 3.0 |
| <= 3.0 | Less than or equal to 3.0 |
| ~> 3.0 | Any version in 3.X range |
| <=3.0 , >=2.5 | Any version betweek 2.5 & 3.0 inclusive |

* <code>terraform init</code> will download plugins associated with the providers into <code>.terraform</code> directory.
* terraform uses <code>.terraform.lock.hcl</code> as the dependency lock file.
* To upgrade the dependency lock file, run terraform init with <code>upgrade</code> flag
```hcl
terraform init -upgrade
```

### Mulit Region terraform providers
To handle AWS provider for multiple regions, use <code>alias</code> & <code>provider</code> as attribute in <code>resourece</code>
```hcl
provider "aws" {
  region = "us-east-1" 
}

# Additional provider configuration for west coast region
provider "aws" {
  alias  = "west"
  region = "us-west-2"
}

resource "aws_instance" "east_ec2" {
  provider = "aws.west"
  # ...
}

resource "aws_instance" "west_ec2" {
  provider = "aws.west"
  # ...
}
```
