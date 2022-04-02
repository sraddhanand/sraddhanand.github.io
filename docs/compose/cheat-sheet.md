---
id: compose-cheat-sheet
title: Docker compose CLI Cheat sheet
sidebar_label: docker-compose commands
---

---

## Bring up the containers

- Just like docker run, docker-compose up simply launches the containers and once the entrypoint commands run, it will bring down the containers.
  ```bash
  docker-compose up
  ```
- Run all the containers in the detach mode. By default docker-compose looks for docker-compose.y(a)ml file.
  ```bash
  docker-compose up -d
  ```
- Specify the compose file name to launch containers.

  ```bash
  docker-compose -f docker-compose-dev.yaml up -d
  ```

- **Build the images and then run the docker images** . For this, we need to specify the Dockerfile name in the compose file for the services which need to be build. In most of the cases we don't need to build all the images. In such cases, we can specify the dockerfile file for the service of our interest. For the rest of the services it will check for the images flag to run the container.
  ```bash
  $ docker-compose up -d --build
  ```
- When the service names modified or services are deleted from the compose file, run up command with <code>--remove-orphans</code> flag to delete the unused containers.
  ```bash
  docker-compose up -d --remove-orphans
  ```
- Scale the service or specify how many containers should be run for the particular service using the scale flag.
  ```bash
  $ docker-compose up -d --scale SERVICE=NUM
  ```
- You can scale single or multiple services in a single run.
  ```bash
  $ docker-compose up -d --scale web=2
  $ docker-compose up -d --scale web=2 app=3
  ```
  docker-compose scale command is depreciated in the latest version.

## Logs of all containers

- Docker-compose gives the ability to view the logs of all the containers at a time. It will be easier to troubleshoot how a single request behaves to the application instead of using multiple terminals for container log.

Check the logs for all the containers launched by compose file in <code>\$PWD</code> (present working directory). It will give the entire log of the container starting from the launch of the container.

```bash
docker-compose logs
```

- To get the last 10 lines

```bash
docker-compose logs --tail 10
```

- To get the last 10 lines and follow output logs.

```bash
docker-compose logs --tail 10 -f
```

## Verify containers

- when you run docker ps, it lists all the running containers by the docker engine. But when you run docker-compose ps it lists only those containers which are running using the docker-compose.yml file in \$PWD.
  ```bash
  docker-compose ps
  ```
- Displays what are the running processes inside the containers. It can give the better picture than regular ps -ef command in the container.
  ```bash
  docker-compose top
  ```

## Stop and deleting the containers

- stop all the containers of the services defined in the compose file.
  ```bash
  docker-compose stop
  ```
- Delete all the stopped containers
  ```bash
  docker-compose rm
  ```
- Delete all the containers and networks. It does exactly opposite of docker-compose up.
  ```bash
  docker-compose down
  ```
