## Components involved

- Distributed tracing
- Canery Release
- Circuit Breakers
- security by using encryption


### Service Mesh & istio
- Extra layer of software in the cluster to handle robust networking, security, routing, telegmetry, traffic management etc.
- Istio uses proxy container in the pod
- The whole istio functionalities are implemented in ``istiod`` pod
- ``proxy`` containers interact with ``istiod`` pod to get the 
- All ``proxy`` containers are called ``Data plane`` 
- ``istio-system`` namespace is also known as ``control plane`` in istio.
- ``Kaili UI`` is used for graphical representation cluster.

### Enable sidecar injection
```bash
kubectl label namespace default istio-injection=enabled
```

Envoy return metrics on 9001/stats 

