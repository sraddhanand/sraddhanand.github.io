---
id: cronjob
title: Kubernetes cronjob
---

Linux cronjobs are useful to run script or commands at a particular time or scheduled intervals. You can refer [crontab.guru](https://crontab.guru/) for verifying the syntax. Similarly, kubernetes give the ability to run the pods at the scheduled intervals.

```yaml
apiVersion: batch/v1beta1
kind: CronJob
spec:
  schedule: "*/10 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: pandas
              image: python3
```

## How it works?

- Once the cronjob is created using the above yaml statements, kubernetes create component with <code>kind: CronJob</code>. Based on the cron schedule like every 10 mins as par the above example, following steps happen.
  - a new <code>job</code> will be created
  - respect <code>pod</code> kicks in and starts performing the task
  - Once the task is completed, pod goes into <code>completed</code> state.
  - if the task is failed, pod will restart based on <code>restartPolicy</code> setting.
