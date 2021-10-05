# Images Docker pour Parrot OS

Docker est une technologie puissante qui permet aux utilisateurs d'exécuter des conteneurs de manière universelle sur n'importe quelle plateforme hôte.

Docker utilise des images de modèles et permet à l'utilisateur de lancer plusieurs instances du même modèle, de les détruire ou de construire de nouveaux modèles personnalisés par-dessus.

Parrot utilise Docker pour permettre à ses utilisateurs d'utiliser son vaste arsenal d'outils sur toute plate-forme prise en charge par Docker.

[Parrot Core](#parrotseccore) | [Parrot Security](#parrotsecurity)

[Nmap](#parrotsectools-nmap)

[Metasploit](#parrotsectools-metasploit)

[Social Engineering Toolkit](#parrotsectools-set)

[Beef-XSS](#parrotsectools-beef)

[Bettercap](#parrotsectools-bettercap)

[SQLMap](#parrotsectools-sqlmap)

[Builder Container](#parrotsecbuild)



[skip to usage examples](#general-usage-instructions-and-examples)

# Modèles disponibles

Que vous souhaitiez disposer d'un conteneur rempli d'outils, de plusieurs conteneurs plus petits avec une petite sélection d'outils, ou même d'un environnement Parrot propre pour construire votre pile personnalisée, c'est le bon endroit pour apprendre à tirer parti de l'espace de travail Docker de Parrot.

## parrotsec/core ##

Système de base avec seulement les éléments de base de Parrot.
Vous pouvez l'utiliser comme point de départ pour créer vos conteneurs personnalisés.

Saveurs disponibles :

**parrotsec/core:latest** - basé sur parrot rolling (debian testing) amd64

**parrotsec/core:rolling-amd64** - basé sur parrot rolling (debian testing) amd64

**parrotsec/core:rolling-i386** - basé sur parrot rolling (debian testing) i386

**parrotsec/core:lts-amd64** - basé sur parrot lts (devuan stable) amd64

**parrotsec/core:lts-i386** - basé sur parrot lts (devuan stable) i386

**parrotsec/core:lts-arm64** - basé sur parrot lts (devuan stable) arm64

**parrotsec/core:lts-armhf** - basé sur parrot lts (devuan stable) armhf

*lancer le conteneur* :

    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/core:lts-amd64


## parrotsec/security ##

Ce conteneur comprend une énorme collection d'outils qui peuvent être utilisés via la ligne de commande depuis l'intérieur d'un conteneur docker.

Certains outils avec interface graphique ont été exclus pour des raisons évidentes.

Ce conteneur est livré avec les métapaquets suivants :

* parrot-pico
* parrot-mini
* parrot-tools-cloud

Saveurs disponibles :

**parrotsec/security:latest** - construit sur parrotsec/core:rolling-amd64

**parrotsec/security:rolling** - construit sur parrotsec/core:rolling-amd64

**parrotsec/security:lts** - construit sur parrotsec/core:lts-amd64

Lancez le conteneur :

    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/security


## parrotsec/tools-* ##

Il s'agit d'une sélection de petits conteneurs Docker qui contiennent uniquement des outils spécifiques, seuls ou dans des collections sélectionnées.

Les conteneurs contenant des outils communs sont empilés les uns sur les autres (lorsque cela est possible) afin de minimiser les déchets de stockage et de maximiser la réutilisation des couches.

modèles disponibles :

### parrotsec/tools-nmap ###

basé sur parrotsec/core:rolling-amd64
fournit les paquets suivants :
* nmap
* ncat
* ndiff
* dnsutils
* netcat
* telnet

utilisation : 

    docker run --rm -ti parrotsec/tools-nmap <nmap options>

exemples :

    docker run --rm -ti parrotsec/tools-nmap -F 192.168.1.1

\

    docker run --rm -ti parrotsec/tools-nmap -Pn 89.36.210.176

### parrotsec/tools-metasploit ###

basé sur parrotsec/tools-nmap:latest
fournit les paquets suivants :
* parrot-pico
* metasploit-framework
* postgresql

utilisation :

    docker run --rm -ti --network host -v $PWD/msf:/root/ parrotsec/tools-metasploit

### parrotsec/tools-set ###
basé sur parrotsec/tools-metasploit:latest
fournit les paquets suivants :
* set

utilisation:

    docker run --rm -ti --network host -v $PWD/set:/root/.set parrotsec/tools-set

### parrotsec/tools-beef ###

basé sur parrotsec/core:rolling-amd64
fournit les paquets suivants :
* beef-xss

utilisation:

    docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrotsec/tools-beef

### parrotsec/tools-bettercap ###

basé sur parrotsec/core:rolling-amd64
fournit les paquets suivants :
* bettercap

utilisation:

    docker run --rm -ti parrotsec/tools-bettercap

### parrotsec/tools-sqlmap ###

basé sur parrotsec/core:rolling-amd64
fournit les paquets suivants :
* sqlmap

utilisation:

    docker run --rm -ti parrotsec/tools-sqlmap <sqlmap options>

exemple:

    docker run --rm -ti parrotsec/tools-sqlmap -u parrotsec.org --wizard


## parrotsec/build ##

Ce conteneur est utilisé en interne par la plateforme de construction Parrot pour tester et construire les paquets de la distro.

Même s'il n'est pas destiné à être utilisé directement par les utilisateurs, il contient tous les outils permettant de travailler sur les paquets Debian et de tester correctement les constructions de paquets dans des environnements propres et jetables.

Ce conteneur est livré avec les paquets suivants :

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

Saveurs disponibles :

**parrotsec/build:latest** - basé sur parrotsec/core:rolling-amd64

**parrotsec/build:rolling-amd64** - Basé sur parrotsec/core:rolling-amd64

**parrotsec/build:rolling-i386** - Basé sur parrotsec/core:rolling-i386

**parrotsec/build:lts-amd64** - basé sur parrotsec/core:lts-amd64

**parrotsec/build:lts-i386** - basé sur parrotsec/core:lts-i386

**parrotsec/build:lts-arm64** - basé sur parrotsec/core:lts-arm64

**parrotsec/build:lts-armhf** - Basé sur parrotsec/core:lts-armhf


Exemple d'utilisation :

    git clone https://nest.parrot.sh/packages/tools/metasploit-framework

\
    
    cd metasploit-framework

*faites vos modifications au paquet ici*.

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
