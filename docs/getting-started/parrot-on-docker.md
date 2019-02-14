# Docker

#### Parrotsec/Parrot-core

Official Parrot Security Base system without tools.

Start a new instance

Public image from Docker Cloud
```bash
    docker run -ti --rm --network host parrotsec/parrot-core
```
Local image from Dockerfile
```bash
    docker run -ti --rm -network host parrot-core
```
Install/Update from Docker Cloud
```bash
    docker pull parrotsec/parrot-core
```
Install/Update from local Dockerfile
``` bash
git clone https://nest.parrotsec.org/parrot-build/docker-images && cd docker-images
docker build -t parrot-core[:version] parrot-core
```
---

#### Parrotsec/Parrot

Official Parrot Security image with basic security tools.

-Start a new instance

-Public image from Docker Cloud
``` bash
    docker run -ti --rm --network host parrotsec/parrot
```
Local image from Dockerfile
```bash
    docker run -ti --rm -network host parrot
```
Install/Update from Docker Cloud
```bash
    docker pull parrotsec/parrot
```
Install/Update from local Dockerfile
```bash
    git clone https://nest.parrotsec.org/parrot-build/docker-images && cd docker-images

    docker build -t parrot[:version] parrot
```
---

#### Parrotsec/Metasploit

Parrot Security Metasploit bundle.

Install/Update from Docker Cloud
```bash
    docker pull parrotsec/metasploit
```
Install/Update from local Dockerfile
```bash
    git clone https://nest.parrotsec.org/parrot-build/docker-images && cd docker-images

    docker build -t metasploit[:version] metasploit
```
Start a new instance

Public image from Docker Cloud
```bash
    docker run -ti --network host parrotsec/metasploit
```
Local image from Dockerfile
```bash
    docker run -ti -network host metasploit
```
