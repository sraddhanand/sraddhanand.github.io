---
id: k8s_cli
title: Kubectl cheat sheet
---

- Connect to container in the pod
    ```bash
    kubectl exec -it pod_name -c container_name bash
    ```
- Get the list of contexts avalable in ``~/.kube/config`` 
```bash
kubectl config view
```
- Get the active context.
```bash
kubectl config current-context
```

- Set the context for current use
```bash
kubectl config use-context my_test_cluster
kubectl config use-context my_test_cluster --namespace
kubectl config set-context my_test_cluster --current --namespace=ggckad-s2
```

- Get all the list of API reources including te short names
```bash
kubectl api-resources
```