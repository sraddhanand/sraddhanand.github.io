---
id: state
title: State
sidebar_label: State
---

- Default file is terraform.tfstate
- State file contains
    - terraform version
    - Outputs
    - Resources

- Terraform tries to ensure that the infrastructure deployed is based on desired state
- Terraform plan will provide the changes, which will be taken place in order to maintain the desired state from current state.
- Desired state for resources should be mentioned in the terraform configuration(.tf files).
:::note
Desired state will be computed based on attributes specified in the terraform configuration file but not based on state file. Because state file contains the whole information of the resources and could be refreshed by multiple means.
:::

## What operations update the state
- terraform plan
- terraform apply
- terraform import
- terraform refresh
