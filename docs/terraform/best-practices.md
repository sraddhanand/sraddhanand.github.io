---
id: terraform-best-practices
title: Terraform Best Practices
sidebar_label: Best Practices
---


- Implement Dev lifecycle practice for IaC code as well.
- Take backup of state files
- Enable versioning on S3 where state files are stored
- Maintain seperate state files for each environment
- Make use of workspace concept to better management.

### Lock the state
Lock the terraform state using ``dynamo_table`` attribute in the s3 backend to avoid the conflict of multiple users running the state modification.

```hcl
terraform { 
    backend "s3" {   
        bucket = "mybucket"
        key    = "path/to/my/key"
        region = "us-east-1" 
        dynamo_table = 'terraform_state_lock'
    }
}
```
