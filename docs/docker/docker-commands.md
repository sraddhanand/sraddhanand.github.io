---
id: commands
title: Docker Commands
---


- Docker login
```bash
$ docker login
```
- Docker login info
```bash
$ cat /home/ubuntu/.docker/config.json
```
- List docker images
```bash
$ docker images
```
- List running docker containers
```bash
$ docker ps
```
- List all docker containers in the host
```bash
$ docker ps -a
```
- Tag a image
```bash
$ docker tag busybox:1.28.4 podofminerva.azurecr.io/busybox:latest
```
- Pull the image
```bash
$ docker pull busybox:1.28.4
```
- Push the images to the registry
```bash
$ docker push podofminerva.azurecr.io/busybox:latest
```
