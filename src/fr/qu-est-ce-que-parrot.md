\

<h1 align="center">Qu'est-ce que ParrotOS</h1>


Parrot Security (Parrot OS, Parrot) est une distribution GNU/Linux libre et ouverte basée sur *Debian Testing* conçue pour les experts en sécurité, les développeurs et les personnes soucieuses du respect de la vie privée.

Parrot comprend un arsenal portable complet pour la sécurité informatique et les opérations de criminalistique numérique. Vous trouverez également tout ce dont vous avez besoin pour développer vos propres programmes ou protéger votre vie privée lorsque vous surfez sur le net.

Parrot est disponible dans les éditions [Security](https://parrotsec.org/security-edition) et [Home](https://parrotsec.org/home-edition), même en tant que VM et également sur Docker.

Le système d'exploitation est livré par défaut avec les environnements de bureau MATE, KDE et XFCE (uniquement l'édition familiale).

\
\

![ParrotOS Desktop](./images/parrot_desktop.png)

<h5 align="center">Parrot Security 4.11 with MATE Desktop</h5>

\

## Histoire ##

La première version publique est apparue le 10 avril 2013, résultat du travail de Lorenzo Faletra qui continue à diriger le développement.

Développé à l'origine dans le cadre de Frozenbox (un forum communautaire par le même créateur de Parrot), l'effort a grandi pour inclure une communauté de développeurs open source, d'experts en sécurité professionnelle, de défenseurs des droits numériques et de passionnés de Linux du monde entier.

Le projet a son siège à Palerme, en Italie, et est géré par Parrot Security CIC, une société d'intérêt communautaire enregistrée au Royaume-Uni.


## Pourquoi "Parrot" (perroquet)? ##

*Parce que c'est né comme un jeu, et que chaque pirate des sept mers a besoin d'un perroquet sur ses épaules s'il veut embarquer sur les galions avec son équipage de flibustiers prisonniers*.

### A qui s'addresse cet OS? ###

Le système est conçu de manière à être familier pour l'expert en sécurité et facile à utiliser pour l'étudiant débutant, mais n'essaie pas de cacher son fonctionnement interne comme d'autres distributions à usage général tentent de le faire.

Parrot peut être utilisé au quotidien. Il fournit tous les programmes pour les tâches de tous les jours, y compris une édition dédiée du système ([Parrot Home Edition](../fr/download-parrot.html#security-or-home-edition-which-one-should-i-choose)) qui n'inclut pas les outils de sécurité.

 
### Gestion des programmes ###

Le système possède son propre dépôt d'applications comprenant tous les paquets pris en charge par Debian, plus de nombreux autres outils et applications que Debian ne peut pas encore fournir. Tous sont accessibles directement depuis le gestionnaire de paquets APT.

De plus, Parrot supporte [Snap](https://snapcraft.io/), un système de distribution de paquets qui fournit un accès facile à de nombreux autres programmes que les distributions GNU/Linux ne fournissent pas toujours dans leurs archives logicielles.

[Flatpak](https://flatpak.org/) est un magasin universel de logiciels similaire à Snap. Il peut être installé à partir du dépôt officiel de Parrot.

Parrot prend également en charge [Wine](https://www.winehq.org/), une couche de compatibilité permettant d'exécuter des applications Windows dans des environnements GNU/Linux.

 
## Devrais-je utiliser Parrot? ##

### En quoi Parrot est différent ###

Même si nous aimerions que tout le monde utilise Parrot ou, au moins, l'essaye, il y a quelques considérations importantes à faire concernant les personnes qui devraient utiliser Parrot et celles qui pourraient en tirer une mauvaise expérience.

Tout d'abord, même si Parrot offre des saveurs d'usage général, son cœur est toujours adapté aux opérations de sécurité et de criminalistique. Dans cette section, nous expliquerons en quoi Parrot est différent des autres distributions à usage général et en quoi il est différent des autres distributions Pentest et Forensics. Nous présenterons ensuite quelques profils de personnes et le type d'expérience qu'elles peuvent avoir en utilisant ce système.

### Un système transparent ###

Parrot est différente d'une distribution généraliste (Ubuntu) car elle n'essaie en aucun cas de cacher ses composants internes.

Cela signifie que de nombreux outils d'automatisation sont inclus dans le système pour le rendre plus facile à utiliser, tout en exposant assez bien ce que le système a sous le capot.

Un bon exemple est le rappel de mise à jour de Parrot : c'est un programme simple mais puissant qui invite l'utilisateur à vérifier les mises à jour du système une fois par semaine. Mais au lieu de cacher le processus de mise à jour derrière une barre de progression, il montre à l'utilisateur le processus complet de mise à jour à partir de la sortie d'apt.

Une autre différence importante est que Parrot désactive par défaut tous les services réseau préinstallés dans le système, non seulement pour maintenir une empreinte RAM très faible et offrir de meilleures performances, mais aussi pour éviter l'exposition des services dans un réseau cible. Chaque service réseau doit être démarré manuellement lorsque l'utilisateur en a besoin.

### Distribution de Pentest ###

Les distributions Pentest sont réputées pour n'intégrer que des outils de sécurité, permettre un accès root facile et faire tomber toutes les barrières du système de sécurité qui peuvent influencer le flux de travail d'un pentester.

Parrot a été conçu pour être un environnement très confortable pour les experts en sécurité et les chercheurs. Il inclut de nombreux programmes de base pour un usage quotidien que les distributions de pentesting excluent généralement (au prix de moins d'un gigaoctet de stockage supplémentaire). Ce choix a été fait pour faire de Parrot non seulement un bon système pour effectuer des tests de sécurité, mais aussi un bon environnement où vous pouvez rédiger des rapports, construire vos propres outils et communiquer de manière transparente avec vos coéquipiers, sans avoir besoin d'ordinateurs, de systèmes d'exploitation ou de configuration supplémentaires.

Notre objectif est de permettre à tout pentester professionnel de réaliser un test de sécurité complet, du début jusqu'au rapport, avec seulement une ISO Parrot et un ordinateur portable ordinaire.


### Distribution sécurisée ###

Parrot Security est livré avec des profils et des configurations de durcissement personnalisés pour AppArmor et d'autres technologies de durcissement linux, et s'inspire du succès d'autres projets qui offrent le plus haut niveau de sécurité dans le scénario GNU/Linux, comme Tails et Whonix pour mettre le système en sandbox et offrir une couche de sécurité supérieure à la moyenne.

Les applications de l'utilisateur dans Parrot sont protégées et "emprisonnées" pour limiter les dommages en cas de compromission du système.

Toute cette sécurité supplémentaire a un coût : il est plus difficile d'adopter de mauvais comportements sur Parrot. Par exemple, il n'est pas possible de se connecter en tant que root avec l'ensemble de l'environnement de bureau, ou de lancer des applications critiques comme des navigateurs, des lecteurs multimédia ou des lecteurs de documents avancés avec des autorisations privilégiées inutiles.

L'utilisateur peut toujours ouvrir des consoles root, lancer des outils de sécurité avec des permissions privilégiées et utiliser le système sans limites. La seule chose qui change, c'est que toutes les applications critiques de l'utilisateur sont désormais protégées contre les très mauvais comportements et les techniques d'exploitation courantes, voire les zero-days, et que les dommages causés par les exploitations avancées sont très limités.

### Distribution de Forensics ### 

Les experts en criminalistique/forensic numérique ont besoin d'un environnement qui ne compromet pas leurs preuves.

Parrot est livré avec des fonctions d'automontage désactivées par défaut, afin de permettre aux opérations de forensics d'être effectuées en toute sécurité. La politique globale d'automontage est configurée de manière redondante dans toutes les couches de la pile système, de l'option noautomount du noyau passée par défaut au démarrage, aux paramètres spécifiques du gestionnaire de fichiers pour désactiver l'auto-montage et les fonctions plug & play.

N'oubliez pas que les disques sont toujours reconnus par le système, et que le système les montera sans protection si l'utilisateur les ouvre accidentellement.

Le comportement de non-montage est cohérent et stable, mais aucune protection n'est fournie en cas de montages accidentels. Un bloqueur d'écriture est toujours recommandé dans tout scénario de criminalistique numérique.

En résumé, Parrot est fait pour :

- Experts en sécurité
- Experts en forensics 
- Etudiant en computer science et ingénierie
- Chercheurs
- Développeurs