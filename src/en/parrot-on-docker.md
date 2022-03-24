# Docker images for Parrot OS

Docker is a powerful technology that allows users to run containers universally on any host platform.

Docker uses template images, and allows the user to start several instances of the same template, destroy them, or build new custom templates on top of them.

Parrot uses docker to allow its users to use its vast arsenal of tools on any platform supported by docker.

[Parrot Core](#parrotseccore) | [Parrot Security](#parrotsecsecurity)

[Nmap](#parrotsectools-nmap)

[Metasploit](#parrotsectools-metasploit)

[Social Engineering Toolkit](#parrotsectools-set)

[Beef-XSS](#parrotsectools-beef)

[Bettercap](#parrotsectoos-bettercap)

[SQLMap](#parrotsectools-sqlmap)

[Builder Container](#parrotsecbuild)



[skip to usage examples](#general-usage-instructions-and-examples)

# Available Templates #

Whether you want to have a container full of tools, or several smaller containers with a tiny selection of tools, or even a clean Parrot environment to build yor custom stack on, this is the right place where to learn how to take advantage of the Parrot Docker workspace.

## parrotsec/core ##

Core system with just the Parrot basics.
You can use it as a start point to create your custom containers.

available flavors:

**parrotsec/core:latest** - based on parrot rolling (debian testing) amd64

**parrotsec/core:rolling-amd64** - based on parrot rolling (debian testing) amd64

**parrotsec/core:rolling-i386** - based on parrot rolling (debian testing) i386


*launch the container*:
    
    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/core:lts-amd64


## parrotsec/security ##

This container includes a huge collection of tools that can be used via command line from inside a docker container.

Some tools with graphical interface were excluded for obvious reasons.

This container ships with the following metapackages:

* parrot-pico
* parrot-mini
* parrot-tools-cloud

available flavors:

**parrotsec/security:latest** - built over parrotsec/core:rolling-amd64

**parrotsec/security:rolling** - built over parrotsec/core:rolling-amd64

**parrotsec/security:lts** - built over parrotsec/core:lts-amd64

Launch the container:

    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/security


## parrotsec/tools-* ##

This is a curated selection of smaller docker containers that contain only specific tools, alone or in cherry-picked collections.

Containers with shared tools are stacked on top of each other (when possible) to minimize storage waste and maximize layers reuse.

available templates:

### parrotsec/tools-nmap ###

based on parrotsec/core:rolling-amd64
provides the following packages:
* nmap
* ncat
* ndiff
* dnsutils
* netcat
* telnet

usage: 

    docker run --rm -ti parrotsec/tools-nmap <nmap options>

examples:

    docker run --rm -ti parrotsec/tools-nmap -F 192.168.1.1

\

    docker run --rm -ti parrotsec/tools-nmap -Pn 89.36.210.176

### parrotsec/tools-metasploit ###

based on parrotsec/tools-nmap:latest
provides the following packages:
* parrot-pico
* metasploit-framework
* postgresql

usage:

    docker run --rm -ti --network host -v $PWD/msf:/root/ parrotsec/tools-metasploit

### parrotsec/tools-set ###
based on parrotsec/tools-metasploit:latest
provides the following packages:
* set

usage:

    docker run --rm -ti --network host -v $PWD/set:/root/.set parrotsec/tools-set

### parrotsec/tools-beef ###

based on parrotsec/core:rolling-amd64
provides the following packages:
* beef-xss

usage:

    docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrotsec/tools-beef

### parrotsec/tools-bettercap ###

based on parrotsec/core:rolling-amd64
provides the following packages:
* bettercap

usage:

    docker run --rm -ti parrotsec/tools-bettercap

### parrotsec/tools-sqlmap ###

based on parrotsec/core:rolling-amd64
provides the following packages:
* sqlmap

usage:

    docker run --rm -ti parrotsec/tools-sqlmap <sqlmap options>

example:

    docker run --rm -ti parrotsec/tools-sqlmap -u parrotsec.org --wizard


## parrotsec/build ##

This container is used internally by the Parrot Build Platform to test and build the distro packages.

Even if it is not meant to be used directly by users, it contains all the tools to work on debian packaging and properly test package builds in clean and disposable environments.

This container ships with the following packages:

* git-buildpackage
* ubuntu-dev-tools
* devscripts
* debhelper
* dh-apparmor
* dh-autoreconf
* dh-buildinfo
* dh-cargo
* dh-consoledata
* dh-di
* dh-exec
* dh-golang
* dh-linktree
* dh-lisp
* dh-lua
* dh-make
* dh-make-golang
* dh-make-perl
* dh-metainit
* dh-perl6
* dh-php
* dh-python
* dh-runit
* dh-strip-nondeterminism
* dh-sysuser
* dh-vim-addon
* dh-virtualenv
* kernel-wedge

Available flavors:

**parrotsec/build:latest** - based on parrotsec/core:rolling-amd64

**parrotsec/build:rolling-amd64** - based on parrotsec/core:rolling-amd64

**parrotsec/build:rolling-i386** - based on parrotsec/core:rolling-i386

**parrotsec/build:lts-amd64** - based on parrotsec/core:lts-amd64

**parrotsec/build:lts-i386** - based on parrotsec/core:lts-i386

**parrotsec/build:lts-arm64** - based on parrotsec/core:lts-arm64

**parrotsec/build:lts-armhf** - based on parrotsec/core:lts-armhf


Example usage:

    git clone https://nest.parrot.sh/packages/tools/metasploit-framework

\
    
    cd metasploit-framework

*make your modfications to the package here*

    cd ..

\
    
    docker run --rm -ti -v $PWD:/build/ parrotsec/build:rolling-amd64 - bash

\
    
    cd /build/metasploit-framework

\
    
    apt build-dep .
    
\

    debuild -us -uc

\
    
    exit
