# Instructions et exemples d'utilisation générale #

#### Lancer un conteneur #### 

    docker run --name pcore-1 -ti parrotsec/core
<div class="panel panel-info"> 
    <div class="panel-heading"> 
        <i class="fa fa-info-circle badge" aria-hidden="true"></i> 
        
**Note** 
    
</div> 
    <div class="panel-body"> 
    Le nom de pcore-1 est arbitraire et peut être personnalisé. 
    </div>
</div>
    
#### Arrêter le conteneur ####
    
    docker stop pcore-1
 
#### Reprendre un conteneur précédemment arrêté ####
    
    docker start pcore-1
    
#### Supprimer un conteneur après l'avoir utilisé ####
    
    docker rm pcore-1
 
#### Lister tous les conteneurs instanciés #### 
 
    docker ps -a
 
#### Démarrer plusieurs conteneurs ####

sur le terminal 1 -> `docker run --name pentest1 -ti parrotsec/security` \
sur le terminal 2 -> `docker run --name pentest2 -ti parrotsec/security` \
sur le terminal 3 -> `docker run --name msf-listener -ti parrotsec/tools-metasploit`
\

#### Supprimer tous les conteneurs ####

    docker rm $(docker ps -qa)
  
#### Démarrer un conteneur et le supprimer automatiquement ensuite ####

    docker run --rm -ti parrotsec/core

## Utiliser les Volumes pour partager des fichiers avec l'hôte :

C'est une bonne pratique de ne pas garder les conteneurs docker persistants, mais de les supprimer à chaque utilisation et de s'assurer de sauvegarder les fichiers importants sur un volume docker.

La commande suivante crée un dossier **travail** à l'intérieur du répertoire courant et le monte dans /travail à l'intérieur du conteneur. 

    docker run --rm -ti -v $PWD/travail:/travail parrotsec/core
    
#### Utiliser des volumes pour partager des fichiers entre plusieurs conteneurs ####

sur le terminal 1 -> `docker run --name pentest -ti -v $PWD/work:/work parrotsec/security` \
sur le terminal 2 -> `docker run --rm --network host -v $PWD/work :/work -ti parrotsec/security` \
sur le terminal 3 -> `docker run --rm -v $PWD/work:/work -ti parrotsec/tools-metasploit`
\

#### Ouvrir un port du conteneur vers l'hôte ####

Chaque conteneur docker possède son propre espace réseau connecté à un LAN virtuel.

Si vous avez besoin d'exposer un port à d'autres machines en dehors de votre ordinateur local, utilisez l'exemple suivant : 

    docker run --rm -p 8080:80 -ti parrotsec/core
    
Notez que le premier port est le port qui sera ouvert sur votre hôte, et le second est le port du conteneur auquel se lier.

Voici une utilisation de référence de l'indicateur **-p** : 

`-p <host port>:<container port>` (e.g `-p 8080:80`) \
`-p <host port>:<container port>/<protocol>` (e.g `-p 8080:80/tcp`) \
\
`-p <address>:<host port>:<container port>` (e.g `-p 192.168.1.30:8080:80`) \
en cas d'adresses multiples sur le réseau hôte.

#### Utiliser le réseau de l'hôte au lieu du NAT de docker ####

Chaque conteneur de docker possède son propre espace réseau connecté à un LAN virtuel.

Tout le trafic provenant de l'intérieur du conteneur docker sera NATé par l'ordinateur hôte.

Si vous devez faire en sorte que le conteneur docker partage le même espace réseau que la machine hôte, utilisez l'indicateur **--network host** comme indiqué ci-dessous 

    docker run --rm --network host -ti parrotsec/core
    
<div class="panel panel-info"> 
    <div class="panel-heading"> 
        <i class="fa fa-info-circle badge" aria-hidden="true"></i>
        
**Note 1** 
</div> 
    <div class="panel-body"> 
    Chaque port ouvert dans le conteneur sera également ouvert sur l'hôte. 
    </div>
</div> 
    
<div class="panel panel-info"> 
    <div class="panel-heading"> 
        <i class="fa fa-info-circle badge" aria-hidden="true"></i> 

**Note 2** 
</div> 
    <div class="panel-body"> 
    Vous pouvez effectuer du reniflage de paquets sur le réseau de l'hôte. 
    </div>
</div>
    
<div class="panel panel-info"> 
    <div class="panel-heading"> 
        <i class="fa fa-info-circle badge" aria-hidden="true"></i> 

**Note 3** 
</div> 
    <div class="panel-body"> 
    Les règles iptables appliquées dans le conteneur prendront effet sur l'hôte également. 
    </div>
</div>