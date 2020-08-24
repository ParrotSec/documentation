---
title: 'Parrot on Docker'
taxonomy:
    category:
        - docs
visible: true
---

## What is Docker?
Docker is a powerful technology which alllows user to run containers universally on every platform. Docker uses template images, and its power is that user can start several instances of the template, it can destroy them and even build a custom one on top of them.

For further information, go here: [Docker Official Website](https://www.docker.com/)

> **Index**
>
> [Parrot OS On Docker](#parrot-os-on-docker)
> 
> [Different Images, different flavors](#different-images-different-flavors)
> 
> [Parrot Security](#parrosecsecurity)
> 
> [Nmap](#parrotsectools-nmap)
> 
> [Metasploit](#parrotsectools-metasploit)
> 
> [Social Engineering Toolkit](#parrotsectools-set)
> 
> [Beef-XSS](#parrotsectools-beef)
> 
> [Bettercap](#parrotsectoos-bettercap)
> 
> [SQLMap](#parrotsectools-sqlmap)
> 
> [General Instructions and usage examples](#general-instructions-and-usage-examples)



## Parrot OS on Docker

Before starting with Parrot OS docker images, you'll need the docker engine first. 
Start with this:
```bash
   sudo apt update
   sudo apt install docker.io
```

#### Different images, different flavors

Parrot OS Docker images come with a vanilla image, the core of Parrot just with the basics. You can use it as a starting point for your custom containers. 

Available versions and architecture for core version:

 - **parrosec/core:latest** based on parrot rolling (debian testing) amd64 architecture

- **parrosec/core:rolling-amd64** based on parrot rolling (debian testing) amd64 architecture

 - **parrosec/core:rolling-i386** based on parrot rolling (debian testing) i386 architecture

- **parrosec/core:lts-amd64** based on parrot lts (devuan stable) amd64 architecture

- **parrosec/core:lts-i386** based on parrot lts (devuan stable) i386 architecture

- **parrosec/core:lts-arm64** based on parrot lts (devuan stable) arm64 architecture

- **parrosec/core:lts-armhf** based on parrot lts (devuan stable) armhf

Launch the container:

`docker run --rm -ti --network host -v $PWD/work:/work parrotsec/core:lts-amd64`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


Parrot OS Docker images are also available in the following flavors:

#### parrotsec/security 
This flavor contains a huge collection that can be used via command line inside a docker container. The template ships with the following metapackages:

- `parrot-pico`
- `parrot-mini`
- `parrot-tools-cloud`

Available flavors for security version:

- **parrotsec/security:latest** built over `parrotsec/core:rolling-amd64`
- **parrotsec/security:rolling** built over `parrotsec/core:rolling-amd64`
- **parrotsec/security:lts** built over `parrotsec/core:lts-amd64`

Launch the container:

`docker run --rm -ti --network host -v $PWD/work:/work parrotsec/security`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


#### parrotsec/tools-*
An accurate selection of small docker containers with specific tools, alone or in cherry-picked collections.

Containers with shared tools are stacked on top of each other (when possible) to minimize storage waste and maximize layers reuse.

Available flavors:

##### parrotsec/tools-nmap
Based on template `parrotsec/core:rolling-amd64`, comes with the following packages:

- `nmap`
- `ncat`
- `ndiff`
- `dnsutils`
- `netcat`
- `telnet`

usage: 
`docker run --rm -ti parrotsec/tools-nmap <nmap options>`

examples:

`docker run --rm -ti parrotsec/tools-nmap -F 192.168.1.1`

`docker run --rm -ti parrotsec/tools-nmap -Pn 89.36.210.176`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


##### parrotsec/tools-metasploit
Based on template `parrotsec/tools-nmap:latest`, comes with the following packages:

- `parrot-pico`
- `metasploit-framework`
- `postgresql`

usage:

`docker run --rm -ti --network host -v $PWD/msf:/root/ parrotsec/tools-metasploit`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.

##### parrotsec/tools-set
Based on template `parrotsec/tools-metasploit:latest`, comes onboarding the package `set`

usage:

`docker run --rm -ti --network host -v $PWD/set:/root/.set parrotsec/tools-set`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


##### parrotsec/toos-beef

Based on template parrotsec/core:rolling-amd64, comes onboarding the package `beef-xss`

usage:

`docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrosec/tools-beef`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


##### parrotsec/tools-bettercap

Based on template `parrotsec/core:rolling-amd64`, comes onboarding the package `bettercap`

usage:

`docker run --rm -ti parrotsec/tools-bettercap`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.


##### parrotsec/tools-sqlmap

Based on template `parrotsec/core:rolling-amd64`, comes onboarding the package `sqlmap`

usage:
`docker run --rm -ti parrotsec/tools-sqlmap <sqlmap options>`

example:
`docker run --rm -ti parrotsec/tools-sqlmap -u parrotsec.org --wizard`

*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.
****

## General Instructions and usage examples
*ATTENTION: every docker command needs sudo, otherwise you'll get an error similar to this:*

	docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/create": dial unix /var/run/docker.sock: connect: permission denied.
	See 'docker run --help'.

- **Launch a container:**

`docker run --name pcore-1 -ti parrotsec/core`
	*NOTE: the pcore-1 name is arbitrary and can be customized*

- **Stop the container:**

`docker stop pcore-1`

- **Resume a previously-stopped container:**

`docker start pcore-1`

- **Remove a container after use:**

`docker rm pcore-1`

- **List all the instantiated containers:**

`docker ps -a`

- **Start multiple containers:**

*On terminal 1* `docker run --name pentest1 -ti parrotsec/security`

 *On terminal 2* `docker run --name pentest2 -ti parrotsec/security`

*On terminal 3*  `docker run --name msf-listener -ti parrotsec/tools-metasploit`

- **Remove all the containers:**

`docker rm $(docker ps -qa)`

- **Start a container and automatically remove it on exit:**

`docker run --rm -ti parrotsec/core`

- **Use Volumes to share files with the host:**

*It is a good practice to not keep persistent docker containers, but to remove them on every use and make sure to save important files on a docker volume.
The following command creates a "work" folder inside the current directory and mounts it in /work inside the container.*


`docker run --rm -ti -v $PWD/work:/work parrotsec/core`

- **Use Volumes to share files across multiple containers:**

*On terminal 1* `docker run --name pentest -ti -v $PWD/work:/work parrotsec/security`

*On terminal 2* `docker run --rm --network host -v $PWD/work:/work -ti parrotsec/security`

*On terminal 3* `docker run --rm -v $PWD/work:/work -ti parrotsec/tools-metasploit`

- **Open a port from the container to the host**

Every docker container has its own network space connected to a virtual LAN, all the traffic from within the docker container will be NATted by the host computer.

If you need to expose a port to other machines outside your local computer, use the following example:

`docker run --rm -p 8080:80 -ti parrotsec/core`

NOTE: the first port is the port that will be opened on your host, and the second one is the container port to bind to.

Here a reference usage of the -p flag:

**-p <host port>:<container port>** `-p 8080:80`
**-p <host port>:<container port>/<proto>** `-p 8080:80/tcp` 
**-p <address>:<host port>:<container port>** `-p 192.168.1.30:8080:80` (in case of multiple adresses on host network)

- **Use network host instead of docker NAT**
Every docker container has its own network space connected to a virtual LAN.

All the traffic from within the docker container will be NATted by the host computer.

If you need to make the docker container share the same networking space of the host machine, then use the **--network host** flag as shown below

`docker run --rm --network host -ti parrotsec/core`

NOTE 1: every port opened in the container will be opened on the host as well.

NOTE 2: you can perform packet sniffing on the host network.

NOTE 3: iptables rules applied inside the container will take effect on the host as well.
&nbsp;

[Using Parrot](https://docs.parrotlinux.org/info/start/) | [Troubleshooting](https://docs.parrotlinux.org/trbl/start/) | [Linux Beginner Guide](https://docs.parrotlinux.org/library/lbg-basics/) | [Home](https://docs.parrotlinux.org/)

