---
id: secrets
title: Kubernetes Secrets
---

## How to use?

Using kubernetes secrets, you can store the sensitive information as an encrypted data and use them on pods.

### What can be stored in secrets

- Sensitive text like **password**
- **Entire file** with multiple sensitive information
- Docker registry credentials to pull the image using <code>ImagePullSecrets</code>

### ways to use with pods

- Simply retrieve the secret as environment variable
- Mount as a file to the pod
- Mount all items in the secrets to a directory on the pod

## Create secrets

### Create a simple secret

```bash
$ kubectl create secret generic db-user-pass --from-literal=password=mysecretpass
$ kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt
$ kubectl create secret generic db-user-pass --from-file=username=./username.txt --from-file=password=./password.txt
```

:::tip
If the key is not specifies as in 2nd statement, the secret get file name as key. Preferred way is <code>--from-file=key=source</code>  
:::

- Create secret using the config file
  ```yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: db-user-pass
  type: Opaque
  data:
    USER_NAME: mongousr
    PASSWORD: MWYyZDFlMmU2N2Rm
  ```
- Create pod with environment secret

### Create secret file and mount to pod

- Create secret file using the config file

  ```yaml
  # mongo-master-secret.yaml
  apiVersion: v1
  kind: Secret
  metadata:
    name: mongo-master-key
  type: Opaque
  stringData:
    master.key: |-
      32d1b093fc5db7d104206702f31789e9
  ```

  Kubernetes creates a secret <code>mongo-master-key</code> with item <code>master.key</code>

- Create pod with secret as persistent mount.

  - Create a volume **_masterkey_** with the secret **_mongo-master-key_**
  - Mount the volume **_masterkey_** to the path: **_/opt/some-config/master.key_** using <code>mountPath</code>.
    :::caution
    If <code>subPath</code> is not specified, **_/opt/some-config/master.key_** would be created as directory rather than file.
    :::

  ```yaml
  # mongo-deploy.yaml
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: mongo-deploy
  spec:
    template:
      spec:
        containers:
          - name: mongod
            image: opscode/mongo:latest
            volumeMounts:
              - name: masterkey
                mountPath: /opt/some-config/master.key
                subPath: master.key
                readOnly: true
        volumes:
          - name: masterkey
            secret:
              secretName: mongo-master-key
  ```

- Apply both configurations
  ```bash
  $ kubectl apply -f mongo-master-secret.yaml
  $ kubectl apply -f mongo-deploy.yaml
  ```

### Create secret with docker config

```bash
$ kubectl create secret docker-registry <name> --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL
```

##### Ex:

- Create secret for docker registry
  ```bash
  $ kubectl create secret docker-registry docker-hub-secret --docker-server='https://index.docker.io/v1/'  --docker-username=opscode --docker-password='mysecurepassword' --docker-email='mysingedupemail@example.com'
  ```
- Create pod using the secret.
  ```yaml
  apiVersion: apps/v1beta2
  kind: Deployment
  metadata:
    name: mongo-deploy
  spec:
    template:
      spec:
        containers:
          - name: mongod
            image: opscode/mongo:latest
        imagePullSecrets:
          - name: docker-hub-secret
  ```

## Takeaways

- Secrets are **limited to namespace**. pods are created in the same namespace can use the secrets.
- Individual secrets are **limited to 1MiB** in size.
- Secret name must be a valid [DNS subdomain name](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names)
- When a Pod is created, there is **no check if a referenced secret exists**. Once a Pod is scheduled, the kubelet will try to fetch the secret value.
  - If secret does not exist kubelet will periodically retry.
  - None of pod containers will start until all the Pod's volumes are mounted.

## Useful commands

- Secret info

```bash
kubectl describe secrets/db-user-pass
kubectl get secret mysecret -o yaml
kubectl edit secrets mysecret
```

- To create encrypted text. Below command will return _MWYyZDFlMmU2N2Rm_

```bash
echo -n '1f2d1e2e67df' | base64
```
