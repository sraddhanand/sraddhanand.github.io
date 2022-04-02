---
id: helm-secrets
title: Helm secrets plugin
---

## Challanges
- When you have the need to store kubernetes secrets as part of helm chart in code repository, it does not make sense to encrypt using ``base64``, ``base64 -d`` can decrypt the secret and results out the plain test password/sensitive strings
- Using ``helm-secret``, you can encrypt the secret strings using the keys and check-in as part of helm chart
- During the ``helm install`` helm secret plugin will decrypt using the encryption key and applies to the K8S cluster
- Ref: [github repo](https://github.com/jkroepke/helm-secrets)

## Steps to use
### Installation
```bash
helm plugin install https://github.com/jkroepke/helm-secrets  
helm secrets help # validate the installation
```

### Use 
gpg --list-keys
gpg --gen-key

sops -p (key) secrets.yaml


2:52 gpg --list-keys
3:01
4:11 helm secrets view secrets.yaml
4:49 helm create app
5:12 secrets.yaml helm template
5:50 create env for k8s pod
6:09 helm secrets install app ./app -n default -f ./secrets.yaml
6:45 helm ls
6:53 kubectl get secrets credentials -o yaml
7:14 echo "" | base64 -d
7:26 kubectl exec (pod) -- printenv
