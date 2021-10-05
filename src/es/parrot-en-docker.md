# Imágenes Docker para Parrot OS

Docker es una poderosa tecnología que permite a los usuarios ejecutar contenedores universalmente en cualquier plataforma de host.

Docker utiliza imágenes de plantilla y permite al usuario iniciar varias instancias de la misma plantilla, destruirlas o crear nuevas plantillas personalizadas sobre ellas.

Parrot utiliza Docker para permitir a sus usuarios utilizar su vasto arsenal de herramientas en cualquier plataforma compatible con Docker.

[Parrot Core](#parrotseccore) | [Parrot Security](#parrotsecsecurity)

[Nmap](#parrotsectools-nmap)

[Metasploit](#parrotsectools-metasploit)

[Social Engineering Toolkit](#parrotsectools-set)

[Beef-XSS](#parrotsectools-beef)

[Bettercap](#parrotsectoos-bettercap)

[SQLMap](#parrotsectools-sqlmap)

[Builder Container](#parrotsecbuild)



[(skip to usage examples)](instrucciones-uso-general-ejemplos.md)

# Plantillas (templates) disponibles #

Ya sea que desees tener un contenedor lleno de herramientas, o varios contenedores más pequeños con una pequeña selección de herramientas, o incluso un entorno Parrot limpio para construir una pila personalizada, este es el lugar adecuado para aprender a aprovechar el espacio de trabajo de Docker con Parrot.

## parrotsec/core ##

Sistema básico con solo los conceptos básicos de Parrot.
Puedes usarlo como punto de partida para crear tus contenedores personalizados.
<br>
<br>
Sabores disponibles:

**parrotsec/core:latest** - basado en parrot rolling (debian testing) amd64

**parrotsec/core:rolling-amd64** - basado en parrot rolling (debian testing) amd64

**parrotsec/core:rolling-i386** - basado en parrot rolling (debian testing) i386

**parrotsec/core:lts-amd64** - basado en parrot lts (devuan stable) amd64

**parrotsec/core:lts-i386** - basado en parrot lts (devuan stable) i386

**parrotsec/core:lts-arm64** - basado en parrot lts (devuan stable) arm64

**parrotsec/core:lts-armhf** - basado en parrot lts (devuan stable) armhf

- *lanzar el contenedor*:
    
    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/core:lts-amd64


## parrotsec/security ##

Este contenedor incluye una gran colección de herramientas que se pueden usar a través de la línea de comandos desde el interior de un contenedor de ventana acoplable.

Algunas herramientas con interfaz gráfica fueron excluidas por razones obvias.

Este contenedor se envía con los siguientes metapaquetes:

* parrot-pico
* parrot-mini
* parrot-tools-cloud

sabores disponibles:

**parrotsec/security:latest** - construido sobre parrotsec/core:rolling-amd64

**parrotsec/security:rolling** - construido sobre parrotsec/core:rolling-amd64

**parrotsec/security:lts** - construido sobre parrotsec/core:lts-amd64

- *Lanzar el contenedor*:

    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/security


## parrotsec/tools-* ##

Esta es una selección curada de contenedores Docker más pequeños que contienen solo herramientas específicas, solas o en colecciones seleccionadas.

Los contenedores con herramientas compartidas se apilan uno encima del otro (cuando es posible) para minimizar el desperdicio de almacenamiento y maximizar la reutilización de las capas.

Plantillas disponibles:

### parrotsec/tools-nmap ###

Basado en parrotsec/core:rolling-amd64
proporciona los siguientes paquetes:
* nmap
* ncat
* ndiff
* dnsutils
* netcat
* telnet

uso: 

    docker run --rm -ti parrotsec/tools-nmap <nmap options>

ejemplos:

    docker run --rm -ti parrotsec/tools-nmap -F 192.168.1.1

\

    docker run --rm -ti parrotsec/tools-nmap -Pn 89.36.210.176

### parrotsec/tools-metasploit ###

Basado en parrotsec/tools-nmap:latest
proporciona los siguientes paquetes:
* parrot-pico
* metasploit-framework
* postgresql

uso:

    docker run --rm -ti --network host -v $PWD/msf:/root/ parrotsec/tools-metasploit

### parrotsec/tools-set ###
Basado en parrotsec/tools-metasploit:latest
proporciona los siguientes paquetes:
* set

uso:

    docker run --rm -ti --network host -v $PWD/set:/root/.set parrotsec/tools-set

### parrotsec/tools-beef ###

Basado en parrotsec/core:rolling-amd64
proporciona los siguientes paquetes:
* beef-xss

uso:

    docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrotsec/tools-beef

### parrotsec/tools-bettercap ###

Basado en parrotsec/core:rolling-amd64
proporciona los siguientes paquetes:
* bettercap

uso:

    docker run --rm -ti parrotsec/tools-bettercap

### parrotsec/tools-sqlmap ###

Basado en parrotsec/core:rolling-amd64
proporciona los siguientes paquetes:
* sqlmap

uso:

    docker run --rm -ti parrotsec/tools-sqlmap <sqlmap options>

ejemplo:

    docker run --rm -ti parrotsec/tools-sqlmap -u parrotsec.org --wizard


## parrotsec/build ##

Parrot Build Platform utiliza este contenedor internamente para probar y crear los paquetes de distribución.

Incluso si no está destinado a ser utilizado directamente por los usuarios, contiene todas las herramientas para trabajar en el empaquetado de Debian y probar adecuadamente las compilaciones de paquetes en entornos limpios y desechables.

Este contenedor se envía con los siguientes paquetes:

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

Sabores disponibles:

**parrotsec/build:latest** - basado en parrotsec/core:rolling-amd64

**parrotsec/build:rolling-amd64** - basado en parrotsec/core:rolling-amd64

**parrotsec/build:rolling-i386** - basado en parrotsec/core:rolling-i386

**parrotsec/build:lts-amd64** - basado en parrotsec/core:lts-amd64

**parrotsec/build:lts-i386** - basado en parrotsec/core:lts-i386

**parrotsec/build:lts-arm64** - basado en parrotsec/core:lts-arm64

**parrotsec/build:lts-armhf** - basado en parrotsec/core:lts-armhf


Ejemplo de uso:

    git clone https://nest.parrot.sh/packages/tools/metasploit-framework

\
    
    cd metasploit-framework

*haz aquí tus modificaciones al paquete*

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
