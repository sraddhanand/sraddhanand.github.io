---
id: volumes
title: Kubernetes Volumes
---

Similar to docker volumes, mount the volume to kubernetes pods. Moreover, it is not just limited to host volumes, kubernetes supports various types of volumes.
[Kubernetes Doc](https://kubernetes.io/docs/concepts/storage/volumes/)

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: example-pv
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: local-storage
  local:
    path: /path/to/store/output
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: app-pv
              operator: In
              values:
                - pandas-node
```

:::info
While using the local mount, it is mandatory to specify the <code>nodeAffinity</code> values and the make sure <code>/path/to/store/output</code> is created/exists. Unlike docker, kubernetes does not create host mount directories if not exists, because in kubernetes the <code>local-storage</code> could be one among disk, partition or directory.
:::
:::caution
Though kubernetes supports <code>local-storage</code>, it is not a good practice to use it for production purpose because it is ephemeral and can be lost along with the node.
:::
