---
id: architecture
title: K8S Architecture
---


Kubernetes is a **container orchestration** tool, i.e. using Kubernetes you can automate the management of containerized applications. 
kubernetes cluster follows master-node architecture. instead of managing containers' kubernets actually manages pods which can consist of one or more container. 

## Benifits
- **High availability** : If pod goes down, kubernetes replaces with new pod in the same node or any other node in the cluster based on the resource availability. 
- **scalability** : Can run multiple pods with the same defination and can scaled using policies.
- **Robust CD** : Kubernetes intelligently manages the upgrades and rollbacks.


## Control PLane Components

### kube-apiserver
- Responsible for providing API endpoint for kubernetes components
- Gateway for all communications with K8s cluster
- Only component whcih connects to ``ectd`` 
- Responsible for authentication & autherization 
- Inform the ``kubelet`` to manage the pod.
- Any CLI command or GUI commands reaches kube-apiserver and gets the responce
- Cluster endpoint in the browser will list all the apis available 
- Documentation 
    - [API Reference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.21/)
    - [Github Docs](https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata)
```bash
kubectl explain pod
kubectl explain pod.spec
kubectl explain pod.spec.container
```

### etcd
Distributed key-value store used by k8s to store entire cluster data (state) and keep update the changes.
 
### kube-scheduler 
- It watches newly creates pods that have node node assigned and selects a node fot them to run on
- Factors considered while scheduling the pod
    - Resource requirements of pod
    - Hardware/Software policy constrains
    - Affinity & Anti-Affinity
    - Data Locality

### kube-control-manager
-Every resource/object in k8s is controlled by a controller (control loop) with spec fields as values for desired state.
-Responsible for controlling various aspects of the clusters, like
    - Node controller
    - Replication controller

```bash
kubectl api-resources
```

### Cloud-controller-manager
Runs controller that interact with the underlying cloud provider. It uses cloud connector to interact with cloud.


## Node Components
### kubelet
- Is an agent in the each node which communicates with APIserver
- Interact with ``container-runtime`` to manage the pod.

### kube-proxy
Acts as network proxy which maintains network rules on the host and perform connection forwarding

### container-runtime
like Docker engine, contrainerd 