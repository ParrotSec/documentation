# Gestion des logiciels Parrot #

Dans ce chapitre, nous allons présenter le gestionnaire de paquets APT pour Parrot. Un programme est une série d'instructions écrites dans des langages de programmation tels que C, Go, Nim ou Rust (pour n'en citer que quelques-uns). Ces instructions sont stockées dans des fichiers texte appelés sources. Pour fonctionner dans nos systèmes, elles doivent être converties en langage machine. Cette étape s'appelle la compilation. La compilation génère un ou plusieurs fichiers, compréhensibles par le système, appelés fichiers binaires. 

L'utilisateur n'a pas besoin de compiler les sources de chaque programme car les développeurs sont responsables de la compilation et de la génération des fichiers binaires respectifs. Un programme peut contenir non seulement l'exécutable mais aussi une série de fichiers. Les développeurs combinent de tels logiciels dans un fichier appelé paquet. Deux des plus connus sont les paquets RPM et les paquets DEB. RPM a été développé par Red Hat et DEB par Debian. Parrot utilise le format DEB. 

Pour compiler des programmes, des bibliothèques tierces et d'autres programmes sont souvent nécessaires. Si nous essayons de compiler un programme qui a des dépendances avec d'autres bibliothèques et d'autres programmes, nous installerons ces "dépendances" avant sa compilation. De même, si nous voulons installer un binaire, nous devrons avoir installé les dépendances nécessaires à son bon fonctionnement.

Pour gérer ces dépendances et l'installation des "paquets", des gestionnaires de paquets ont été créés. Il existe de nombreux gestionnaires de paquets, certains graphiques et d'autres via la ligne de commande. Dans ce chapitre, nous allons voir l'un des plus connus, créé par les développeurs de Debian, et celui utilisé par Parrot : **APT**.

Les principales fonctions d'un gestionnaire de paquets doivent être :

- La recherche de logiciels
- L'installation de logiciels
- La mise à jour de logiciels
- La mise à jour du système
- La gestion des dépendances
- La suppression de logiciels

Le gestionnaire de paquets doit vérifier dans un emplacement donné (cela peut être un répertoire local ou une adresse réseau) la disponibilité de ces logiciels. Ces emplacements sont appelés référentiels. Le système maintient des fichiers de configuration pour vérifier les emplacements des dépôts.

## Liste des dépôts ##

Bien que dans Parrot il ne soit pas nécessaire (ni recommandé) d'ajouter de nouveaux dépôts ou de modifier les dépôts existants, nous allons voir où nous pouvons les configurer. Dans le système de fichiers, sous le chemin \"/etc/apt/sources.list.d\", nous trouvons le fichier parrot.list. Le contenu de ce fichier devrait être:

    ## stable repository
    deb http://deb.parrotsec.org/parrot stable main contrib non-free
    #deb-src http://archive.parrotsec.org/parrot stable contrib non-free
    
Avec ceci, nous nous assurons que nous avons la liste correcte des dépôts. Dans cet emplacement, les développeurs de Parrot maintiennent les paquets à jour.

## Gestionnaire de paquets (APT) ##

Le gestionnaire de paquets Parrot est apt. Entre autres choses, ce gestionnaire est responsable de l'installation des paquets, de la vérification des dépendances et de la mise à jour du système. Voyons ce que nous pouvons faire avec lui. Nous verrons ci-dessous les options les plus courantes. Pour des instructions plus approfondies, consultez les pages de manuel de chacune des commandes suivantes : apt, apt-get, apt-cache, dpkg.

Rechercher un paquet ou une chaîne de texte : 

    apt search <text_string>

\
Afficher les informations sur le paquet :

    apt show <package>

\
Montrer les dépendances d'un paquet : 

    apt depends <package>

\    
Afficher la liste de tout les paquets installé : 

    apt list --installed
    
\
Installer un paquet : 

    apt install <package>
    
\
Désinstaller un paquet: 

    apt remove <package>

\
Désinstaller un paquet en supprimant ses fichiers de configurations : 

    apt purge <package>
    
\
Supprime automatiquement les paquets qui ne sont pas utilisés (faites attention avec cette commande, en raison du système de dépendance d'apt, elle peut supprimer des paquets imprévus) : 

    apt autoremove 
    
\
Met à jour les informations des dépôts : 
    
    apt update 
    
\
Met à jour un paquet avec la dernière version disponible dans le dépôt : 
    
    apt upgrade <package>    

\
Update la distribution complète. Elle mettra à jour notre système à la prochaine version disponible : 
    
    parrot-upgrade
    
\
Nettoyer les caches, les paquets téléchargés, etc : 

    apt clean && apt autoclean
\
Il s'agit là de quelques exemples, pour plus d'information consultez le manuel d'apt (man 8 apt). 