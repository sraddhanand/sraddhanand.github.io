---
id: linux-commands
title: Linux Commands
sidebar_label: Linux Commands
---

- yum repo checks
```bash
yum whatprovides openssl
```

- Openssl commands
```bash
# Generate private key
openssl genrsa -out opscode.key 2048
# Use the private key and generate Certificate Signing Request
openssl req -new -key opscode.key -out opscode.csr -subj "/CN=opscode/O=opscode"
openssl x509 -in 
```

### SSH agent forwarding
- Login to private instance thr bastion without copying the pem to bastion
```bash
ssh-add -k ~/.ssh/myssh.pem
ssh -A -i ~/.ssh/myssh.pem ec2-user@bastion_host
ssh private_ip
```

### overwrite the files
```bash
dd if=/dev/zero of=/home/ec2-user/test.txt bs=1M count=10
``` 


- stress 
```bash
while :
do
    stress --cpu 2 -m 1 -d 1 --timeout 30 2>&1 > /dev/null
    sleep 5
done
```
- 
```bash
while :
do
    echo "Calculating pi's 3000 digits..."
    sudo cgexec -g cpu:/formulaone bash -c 'time echo "scale=3000; 4*a(1)" | bc -l | head -n1'
done
```

```bash
echo "Killing instance B (port 8002)"
ps auxf | grep python | grep 8002 | awk '{system("sudo kill " $2)}'
sleep 0.5
systemctl status faas001_b --no-pager
```
### find
- find the files bigger than 100 Mb and list
```bash
find / -xdev -size +100M -exec ls -lh {} \;
```
- Find the log file bigger than 50 Mb and older than 180 days then remove
```bash
find /var/log -name "*.log.*" -type f -size +50M   -mtime +180 -exec rm -rf {} \;
```

### date
```bash
date '+%Y%m%dT%H%M%S'
```