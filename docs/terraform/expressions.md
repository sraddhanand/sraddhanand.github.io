---
id: expressions
title: Expressions
sidebar_label: Expressions
---

### Element in list & map
```terraform
variable "ami_id" {
    type = map
    default = {
        "us-east-1" = "ami-1w2e3f5d3w",
        "us-east-2" = "ami-375wer34f3",
        "us-west-1" = "ami-asdf23r2a3",
    }
}

variable "subnets" {
    type = list
    default = ["subnet-23e12371", "subnet-adfa1e171", "subnet-9876hsei"]
}

variable "security_groups" {
    type = list
    default = ["sg-23e12371", "sg-7dsf73jd"]
}

resource "aws_instance" "web" {
  ami           = var.ami_id["us-east-1"] # select the value for the key = "us-east-1"
  instance_type = "t3.micro"
  subnet_id     = var.subnets[0]  # select the first element of the list 
  securoty_groups = var.security_groups # select the entire list
  tags = {
    Name = "HelloWorld"
  }
}
```

### Count & index
Below block will 3 ec2 instances, each instance will be launched in each subnet. 
```terraform
resource "aws_instance" "web" {
    subnet_id     = var.subnets[count.index]
    count = 3
    # ...
}
```

### Conditional Expression
- Syntax: 
    ```terraform
    condition ? true_value : false_value
    ```
- Below block will launch 3 instances in 'Production' environment and 1 instance in other environments.
    ```terraform
    resource "aws_instance" "web" {
        subnet_id     = var.subnets[count.index]
        count = var.environment == 'Production' ? 3 : 1
        # ...
    }
    ```