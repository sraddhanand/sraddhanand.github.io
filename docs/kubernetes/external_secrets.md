---
id: external_secrets_aws
title: External Secrets implimentation in AWS 
---

### Create IAM Policy
The least needed IAM policy for external secrets is ``GetSecretValue`` on your account.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [                
                "secretsmanager:GetSecretValue",
            ],
            "Resource": [
                "arn:aws:secretsmanager:us-west-2:111122223333:secret:*",
            ]
        }
    ]
}
``` 
### IAM role
Create the role using the above policy.
```bash
aws iam create-role --role-name K8S-ES-role --assume-role-policy-document file://sm_get_secrets_value_policy.json
``` 

### Helm deploy
- [GithubRepo](https://github.com/external-secrets/external-secrets)
- To use the external seccrets, K8S cluster needs ``custom resource definition`` and a controller (pod) to get the secret values.
- Use helm chart to deploy the required objects.
```bash
helm repo add external-secrets https://external-secrets.github.io/kubernetes-external-secrets/
helm install [RELEASE_NAME] external-secrets/kubernetes-external-secrets
``

