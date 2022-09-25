---
sidebar_position: 1
---

# Docker images for ParrotOS

Docker is a powerful technology that allows users to run containers universally on any host platform.

Docker uses template images, and allows the user to start several instances of the same template, destroy them, or build new custom templates on top of them.

Parrot uses docker to allow its users to use its vast arsenal of tools on any platform supported by docker.

[Parrot Core](#parrotseccore) | [Parrot Security](#parrotsecsecurity)

[Nmap](#parrotsecnmap)

[Metasploit](#parrotsecmetasploit)

[Social Engineering Toolkit](#parrotsecset)

[Beef-XSS](#parrotsecbeef)

[Bettercap](#parrotsectoos-bettercap)

[SQLMap](#parrotsecsqlmap)

[Builder Container](#parrotsecbuild)


[skip to usage examples](#general-usage-instructions-and-examples)

# Available Templates

Whether you want to have a container full of tools, or several smaller containers with a tiny selection of tools, or even a clean Parrot environment to build yor custom stack on, this is the right place where to learn how to take advantage of the Parrot Docker workspace.

## parrot.run/core

Core system with just the Parrot basics.
You can use it as a start point to create your custom containers.

This image is multiarch, and works for amd64, arm64 and armhf architectures

*launch the container*:
    
    docker run --rm -ti --network host -v $PWD/work:/work parrot.run/core


## parrot.run/security

This container includes a huge collection of tools that can be used via command line from inside a docker container.

Some tools with graphical interface were excluded for obvious reasons.

This container ships with the following metapackages:

* parrot-cloud


Launch the container:

    docker run --rm -ti --network host -v $PWD/work:/work parrot.run/security


## Individual Parrot Tools

This is a curated selection of smaller docker containers that contain only specific tools, alone or in cherry-picked collections.

Containers with shared tools are stacked on top of each other (when possible) to minimize storage waste and maximize layers reuse.

available templates:

### parrot.run/nmap

based on parrot.run/core
provides the following packages:
* nmap
* ncat
* ndiff
* dnsutils
* netcat
* telnet

usage: 

    docker run --rm -ti parrot.run/nmap <nmap options>

examples:

    docker run --rm -ti parrot.run/nmap -F 192.168.1.1

    docker run --rm -ti parrot.run/nmap -Pn 89.36.210.176

### parrot.run/metasploit

based on parrot.run/nmap:latest
provides the following packages:
* nmap
* metasploit-framework
* postgresql

usage:

    docker run --rm -ti --network host -v $PWD/msf:/root/ parrot.run/metasploit

### parrot.run/set

based on parrot.run/metasploit:latest
provides the following packages:
* set

usage:

    docker run --rm -ti --network host -v $PWD/set:/root/.set parrot.run/set

### parrot.run/beef

based on parrot.run/core
provides the following packages:
* beef-xss

usage:

    docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrot.run/beef

### parrot.run/bettercap

based on parrot.run/nmap
provides the following packages:
* bettercap

usage:

    docker run --rm -ti --network host parrot.run/bettercap

### parrot.run/sqlmap

based on parrot.run/nmap
provides the following packages:
* sqlmap

usage:

    docker run --rm -ti parrot.run/sqlmap <sqlmap options>

example:

    docker run --rm -ti parrot.run/sqlmap -u parrotsec.org --wizard