## Autorisations sur les fichiers et répertoires ##

Précédemment, nous avons mentionné que, sous Linux, tous les fichiers du système appartiennent à un utilisateur et à un groupe. Le propriétaire d'un fichier est l'utilisateur qui l'a créé et le groupe principal de ce fichier est le groupe de l'utilisateur qui l'a créé. Par exemple, dans les chapitres précédents, nous avons travaillé avec l'utilisateur « parrot ». Si cet utilisateur crée un fichier, l'utilisateur "parrot" et le groupe par défaut de l'utilisateur parrot seront les propriétaires de ce nouveau fichier, donc le fichier appartient à l'utilisateur parrot et au groupe par défaut de l'utilisateur parrot. Pour cette raison, nous utilisons souvent la commande "sudo" pour pouvoir lire, modifier ou exécuter des fichiers et des programmes du système ou apporter des modifications aux autorisations des fichiers en question.

Analysons le résultat de la commande `ls -l`

	┌─[root@parrot]─[/home/parrot]
	└──╼ # ls -l archive.txt 
	-rw-rw-r-- 1 parrot hackers    0    oct 16 12:32 archive.txt
	drwxr-xr-x 3 parrot hackers  4096   oct 15 16:25 scripts

La sortie de la commande `ls -l` indique s'il s'agit d'un fichier (-) ou d'un répertoire (d), les permissions du fichier/répertoire (rw-rw-r--), le champ suivant (indique le nombre de fichiers/répertoires) utilisateur et groupe auquel il appartient (parrot et hackers), ensuite la taille (le fichier archive.txt fait 0 octet), puis la date de dernière modification (16 oct 12:32) et enfin le nom (archive.txt et scripts). Commençons par les champs autorisation, utilisateur et groupe. Nous allons nous concentrer sur le premier champ (autorisations de fichier). Sous Linux, la gestion des permissions que les utilisateurs et les groupes d'utilisateurs ont sur les fichiers et les dossiers s'effectue à l'aide d'un schéma simple de trois types de permissions :

Autorisation de **lecture**, représentée par la lettre **" r "**.

Autorisation d'**écriture**, représentée par la lettre **" w "**.

Autorisation d'**exécution**, représentée par la lettre **" x "**.

La signification de ces autorisations est différente pour les fichiers et les dossiers, nous expliquerons ensuite chacun des cas.

Dans le cas d'un fichier *.txt* , il dispose des autorisations suivantes :

	Owner	Group	Other Users
	r  w  -	r  w  -	r  -  -
	
Cela signifie que tous les utilisateurs du système ont des autorisations pour lire ce fichier, mais seuls le propriétaire et les membres appartennant au groupe du propriétaire peuvent apporter des modifications à ce fichier.

Pour calculer la valeur d'une permission, on determinera la somme de ses valeurs décimales selon la correspondance suivante :

|Permission	|r |w| x |
|-----------------------------------|--|---|----|
|Decimal Value	|4| 2 | 1 |

C'est-à-dire que la valeur décimale de l'autorisation de lecture est 4, la valeur de l'autorisation d'écriture est 2 et la valeur de l'autorisation d'exécution est 1. Par conséquent, les valeurs possibles pour une autorisation sont les suivantes :




| Permission | Value |
|------------|--------|
|    rwx     |   7   |
|  rw-  |   6   |
|  r-x    |   5   |
|  r--     |   4   |
|  -wx  |   3   |
|  -w-   |   2   |
|  --r     |   1 |
|   ---   |  0   |




Par conséquent, nous arrivons à la conclusion suivante : 

| Permission     |   Value  |
|-----------------------|-------------|
| rwx rwx rwx  |   777      |
| rwx r-x r--        |   754      |
| r-x r- - ----------- |   540      |

Cela étant clair, nous pouvons passer à l'utilisation de la commande "chmod", qui nous aidera à gérer les autorisations des fichiers et des dossiers.

#### chmod ####

Syntaxe de base de chmod :

	$ chmod [mode] [permissions] [file or directory]

Nous avons ce dossier de scripts, dans lequel tous les scripts n'ont pas les autorisations d'exécution.

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rw-r--r-- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxr-xr-x 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxr-xr-x 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rw-r--r-- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

Comme vous pouvez le voir après l'exécution de `ls -l scripts/`, certains scripts ont des autorisations d'exécution pour tous les utilisateurs du système (ce qui n'est pas recommandé), tandis que d'autres n'ont pas d'autorisation d'exécution même pour l'utilisateur propriétaire. Pour corriger cette erreur, nous appliquons les autorisations suivantes :

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chmod -R 770 scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrwx--- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxrwx--- 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxrwx--- 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrwx--- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

Désormais, l'utilisateur propriétaire et les membres du groupe propriétaire ont des autorisations de lecture, d'écriture et d'exécution, tandis que les autres utilisateurs du système 
n'ont pas accès à ce fichier.

\
`a` --> indique qu'il sera appliqué à tous
\
`u` --> indique qu'il sera appliqué à l'utilisateur
\
`g` --> indique qu'il sera appliqué au groupe
\
`o` --> indique qu'il s'appliquera aux autres
\
`+` --> indique que l'autorisation est ajoutée
\
`-` --> indique que l'autorisation est supprimée
\
`r` --> indique l'autorisation de lecture
\
`w` --> indique l'autorisation d'écriture
\
`x` --> indique l'autorisation d'exécution
\

La syntaxe de base pour utiliser "chmod", avec ces options et ces modes, est la suivante :

    chmod [a | u | g | o] [+ | -] [r | w | x]

That is, to whom the permit is applied, add or remove permission and type of permit that is to be added or removed.

Combinaisons possibles :

- `a+r` Lire les autorisations pour tous
- `+r` Comme précédemment, si rien n'est indiqué, 'a' est implicite.
- `og-x` Supprime l'autorisation d'exécution de tout sauf de l'utilisateur.
- `u+rwx` Donne toutes les autorisations à l'utilisateur.
- `o-rwx` Supprimez les autorisations des autres.

Exemple d'utilisation :

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chmod -R og-x scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

Si nous analysons le résultat de l'exécution précédente, nous remarquons comment les autorisations d'exécution ont été supprimées pour tous les utilisateurs du système, y compris les membres du groupe propriétaire, à l'exception de l'utilisateur propriétaire, qui conserve les autorisations de lecture, d'écriture et d'exécution.

#### chown ####

chown (change owner) est un autre utilitaire système qui nous permet de modifier le propriétaire des fichiers, il ressemble à "chmod" mais la fonction qu'il remplit est différente. Comme son nom l'indique, il s'agit de changer le propriétaire d'un fichier ou d'un dossier.

Sa syntaxe de base est la suivante :

	$ chown [options] [owner]: [group (optional)] [files or directories]

Options de la commande chown :
\
`-R` --> Changement récursif de propriétaire pour les répertoires ainsi que tout le contenu.
\
`-v or --verbose` --> Utilisé pour afficher une sortie plus détaillé.
\
`--version` --> Voir le numéro de version du programme.
\
`-dereference` --> Agit sur les liens symboliques plutôt que sur la destination.
\
`-h or --no-deference` --> Dans le cas de liens symboliques, change le propriétaire de la destination au lieu du lien lui-même.
\
`--reference` --> Change le propriétaire d'un fichier en prenant comme référence le propriétaire d'un autre fichier.
\

Exemples d'utilisation :

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot parrot  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot parrot  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot parrot  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot parrot 1587 oct 18 01:05 wireless-dos.py

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chown -R root:root scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py

Dans l'exemple précédent, nous pouvons voir comment l'utilisateur et le propriétaire du groupe de tous les fichiers qui se trouvent dans le répertoire des scripts ont été remplacer. Voyons un exemple où nous allons seulement changer le propriétaire des fichiers.
	
	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chown -R parrot scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot root 1587 oct 18 01:05 wireless-dos.py

Dans l'exemple précédent, vous pouvez voir comment l'utilisateur qui possède tous les fichiers du répertoire de scripts est devenu parrot.

#### chgrp ####

La commande chgrp est utilisée pour changer le groupe auquel appartient un fichier ou un répertoire. Sa syntaxe de base est la suivante :

	$ chgrp [options] [file (s)] or [directory (s)]

Options

`-R` -> Change récursivement le groupe auquel appartiennent les répertoires avec tout leur contenu.

`-v (or --verbose)` -> Utilisé pour afficher une sortie plus détaillé.

`--version` -> Voir le numéro de version du programme.

`--dereference` -> Agit sur les liens symboliques plutôt que sur la destination.

`-h (or --no-dereference)` -> Dans le cas de liens symboliques, change le groupe de destination au lieu du lien lui-même.

`--reference` -> Change le groupe d'un fichier en prenant comme référence le propriétaire d'un autre fichier.

Ce sont pratiquement les mêmes options **"chown"** , à la différence que **"chgrp"** ne change que le groupe qui possède les fichiers et/ou les répertoires, en gardant l'utilisateur propriétaire.

Exemple d'utilisation de chgrp :

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot parrot  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot parrot  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot parrot  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot parrot 1587 oct 18 01:05 wireless-dos.py

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chgrp -R root:root scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py

Dans l'exemple précédent, nous pouvons voir comment l'utilisateur et le propriétaire du groupe de tous les fichiers qui se trouvent dans le répertoire des scripts ont changé. Voyons un exemple où nous allons seulement changer l'utilisateur propriétaire.

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py

	┌─[root@parrot]─[/home/parrot]
	└──╼ #chgrp -R parrot scripts/

	┌─[root@parrot]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot root 1587 oct 18 01:05 wireless-dos.py

Dans l'exemple ci-dessus, vous pouvez voir comment le groupe propriétaire des fichiers wireless-dos-ids.py et wireless-dos.py est passé de root à parrot.

