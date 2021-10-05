# Télécharger Parrot OS

Parrot OS est disponible en téléchargement [ici](https://parrotsec.org/download/).

L'OS fonctionne également sur des machines plus anciennes, mais il est recommandé de consulter la configuration requise [ici](./system-requirements.html).

## Quelle version dois-je choisir ? ##

Parrot est disponible dans de nombreuses formes et tailles afin de s'adapter à tous les matériels et besoins des utilisateurs.

En fonction de la configuration matérielle et du champ d'application dont vous disposez, considérez les options suivantes :

### Parrot 4.11.2 Security Edition ###

Comme son nom l'indique, il s'agit de l'édition complète.
Après l'installation, vous disposez d'une station de travail pentesting complète et prête à l'emploi, dotée d'une grande variété d'outils.
Fortement recommandé pour les PC de bureau et les portables avec au moins 4 Go de RAM, pour une expérience fluide en multitâche.


[Download](https://parrotsec.org/security-edition/)

|  Environnement de bureau |  Taille  |
|--------------------------|--------|
|<strong>[MATE](<./desktop-enviroments.html#mate-desktop>)</strong>| 4.1 GB |
|<strong>[KDE](<./desktop-enviroments.html#kde-desktop>)</strong>| 4.2 GB |

### Parrot 4.11.2 Home Edition 
Cette version de Parrot est une installation légère qui fournit les outils essentiels pour commencer à travailler.
Elle s'appuie sur les mêmes dépôts que l'édition complète, ce qui vous permet de choisir ultérieurement la plupart des programmes que vous souhaitez installer.
Recommandée pour ceux qui sont familiers avec les distros de Pentesting mais qui ont besoin d'une installation minimale.

[Download](https://parrotsec.org/home-edition/)

| Environnement de bureau |  Size  |
|-------------------------|--------|
|<strong>[MATE](<./desktop-enviroments.html#mate-desktop>)</strong>| 1.9 GB |
|<strong>[KDE](<./desktop-enviroments.html#kde-desktop>)</strong>| 2.0 GB |
|<strong>[XFCE](<./desktop-enviroments.html#xfce-desktop>)</strong>| 1.8 GB |


### Parrot 4.11.2 Security & Home OVA ###
Destinée à une installation rapide de la VM, cette version est prévue pour fonctionner sur votre logiciel de virtualisation préféré.

[Download](https://download.parrot.sh/parrot/iso/4.11.1/Parrot-home-4.11.2_virtual.ova.mirrorlist)

| Edition  |  Taille  |
|----------|----------|
| Security | 5.5 GB   |
| Home     | 2.8 GB   |


### Security ou Home edition, laquelle dois-je choisir ? ###

*Parrot Home Edition et Parrot Security Edition sont identiques, la seule différence entre elles est le jeu de logiciels pré-installés*.

Parrot OS Home Edition n'est pas livré avec des outils de sécurité, tandis que Parrot OS Security Edition est livré avec tous les outils de hacking et de pentest pré-installés.

Vous pouvez installer Parrot Home Edition et n'installer que les outils de hacking dont vous avez réellement besoin, ou vous pouvez les installer tous en même temps avec `sudo apt install parrot-tools-full`.


### Parrot 4.11.2 sur Docker ###
Oubliez tout ce que vous savez sur les circonstances du pentesting. Transporter un ordinateur portable partout où vous allez pour accomplir votre travail n'est plus obligatoire.
Vous pouvez désormais disposer d'un VPS distant chargé avec Parrot OS prêt à effectuer toutes sortes de tâches depuis un terminal embarqué, en toute discrétion. 
Cette édition ne fournit pas d'interface graphique, mais elle est disponible dans les dépôts si nécessaire.

[Découvrez-la maintenant](<./parrot-sur-docker.html>)