Le projet Parrot propose un système prêt à l'emploi au format ISO, mais il fournit également une grande quantité de logiciels supplémentaires qui peuvent être installés en dehors du dépôt officiel de Parrot.

Le référentiel Parrot est utilisé pour fournir les logiciels officiellement pris en charge, les mises à jour du système et les correctifs de sécurité.

# Le miroirs réseau #

Les logiciels de l'archive parrot sont livrés sous forme de paquets deb, et ces paquets sont servis par un vaste réseau de serveurs miroirs qui fournissent le même ensemble de paquets distribués dans le monde entier pour une livraison plus rapide des logiciels.

Le système Parrot est configuré pour utiliser les directeurs centraux d'archives Parrot. Les directeurs Parrot sont des serveurs spéciaux qui collectent toutes les demandes des utilisateurs finaux et les redirigent vers le serveur de téléchargement disponible le plus proche géographiquement de l'utilisateur qui a fait la demande.

Si vous voulez et pouvez, vous pouvez fabriquer votre propre miroir pour Parrot en suivant [cette procédure](./mirrors-list.html#make-your-own-mirror).

### Mesures de sécurité ###

Le réseau de miroirs Parrot est sécurisé par des signatures numériques centralisées et les miroirs ne peuvent pas injecter de fausses mises à jour.

Si un miroir malveillant tente d'injecter un faux paquet, le système Parrot refusera automatiquement de le télécharger et de l'installer, et émettra un message d'alerte.

Cette mesure de sécurité mise en œuvre dans APT (le gestionnaire de paquets Parrot/Debian) est très efficace et fiable car les signatures numériques sont appliquées hors ligne par le responsable de l'archive Parrot, et non par les serveurs miroirs, ce qui garantit une chaîne de confiance directe et sécurisée entre le développeur et l'utilisateur.

## Configuration et paramétrage personnalisé ##

Le gestionnaire de paquets APT utilise `/etc/apt/sources.list` et tout fichier *.list* trouvé dans le répertoire `/etc/apt/sources.list.d/`.

<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**Note**
  </div>
  <div class="panel-body">
Le fichier /etc/apt/sources.list est VIDE et la configuration APT par défaut se trouve dans le fichier /etc/apt/sources.list.d/parrot.list.
  </div>
</div>

### Contenu de /etc/apt/sources.list.d/parrot.list ###

    deb https://deb.parrot.sh/parrot/ rolling main contrib non-free
    #deb-src https://deb.parrot.sh/parrot/ rolling main contrib non-free
    deb https://deb.parrot.sh/parrot/ rolling-security main contrib non-free
    #deb-src https://deb.parrot.sh/parrot/ rolling-security main contrib non-free

## Autres miroirs pour la configuration manuelle ###

### NCSA ###
Amériques du Nord, centrale et du Sud

| Emplacement<br>Identification du miroir<br>Bande passante | Nom du fournisseur | URL | Chaîne de configuration de l'APT
|:----------------------------------|:---------------:|:-----|:-------------------|
|Massachussetts<br>MIT<br>1 Gbps|SIPB MIT|[mirrors.mit.edu/parrot](http://mirrors.mit.edu/parrot/)|<sub>deb http://mirrors.mit.edu/parrot/ rolling main contrib non-free</sub>|
|New York<br>Clarkson<br>1 Gbps|Clarkson University|[mirror.clarkson.edu/parrot](https://mirror.clarkson.edu/parrot/)|<sub>deb https://mirror.clarkson.edu/parrot/ rolling main contrib non-free</sub>|
|Oregon<br>Osuosl<br>1 Gbps|Oregon State University - Open Source Lab|[ftp.osuosl.org/pub/parrotos](https://ftp.osuosl.org/pub/parrotos)|<sub>deb https://ftp.osuosl.org/pub/parrotos rolling main contrib non-free</sub>|
|Californie<br>Berkeley<br>1 Gbps|Berkeley Open Computing Facility|[mirrors.ocf.berkeley.edu/parrot](http://mirrors.ocf.berkeley.edu/parrot)|<sub>deb https://mirrors.ocf.berkeley.edu/parrot/ rolling main contrib non-free</sub>|
|Virgina<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.wdc1.us.leaseweb.net/parrot](https://mirror.wdc1.us.leaseweb.net/parrot)|<sub>deb https://mirror.wdc1.us.leaseweb.net/parrot rolling main contrib non-free</sub>|
|Equateur<br>CEDIA<br>100 Mbps|RED CEDIA (Centre national de recherche et d'éducation de l'Equateur)|[mirror.cedia.org.ec/parrot](http://mirror.cedia.org.ec/parrot)|<sub>deb https://mirror.cedia.org.ec/parrot/ rolling main contrib non-free</sub>|
|Equateur<br>UTA<br>100 Mbps|UTA (Universidad Técnica de ambato)|[mirror.uta.edu.ec/parrot](http://mirror.uta.edu.ec/parrot)|<sub>deb https://mirror.uta.edu.ec/parrot/rolling main contrib non-free</sub>|
|Équateur<br>UEB<br>100 Mbps|UEB (Universidad Estatal de Bolivar)|[mirror.ueb.edu.ec/parrot](http://mirror.ueb.edu.ec/parrot)|<sub>deb https://mirror.ueb.edu.ec/parrot/ rolling main contrib non-free</sub>|
|Brésil<br>USP<br>1 Gbps|Université de São Paulo|[sft.if.usp.br/parrot](http://sft.if.usp.br/parrot)|<sub>deb http://sft.if.usp.br/parrot/ main contrib non-free</sub>|
|Canada<br>/<br>/|0xem|[https://mirror.0xem.ma/parrot/](https://mirror.0xem.ma/parrot/)|<sub>deb https://mirror.0xem.ma/parrot/ main contrib non-free</sub>|

### EMEA ###

Europe Moyen-Orient et Asie

| Emplacement<br>Identification du miroir<br>Bande passante | Nom du fournisseur | URL | Chaîne de configuration de l'APT
|:----------------------------------|:---------------:|:-----|:-------------------|
|Italie<br>GARR<br>10 Gbps| Consortium GARR (Réseau italien de recherche et d'éducation)|[parrot.mirror.garr.it/mirrors/parrot](http://parrot.mirror.garr.it/mirrors/parrot)|<sub>deb https://parrot.mirror.garr.it/mirrors/parrot/ rolling main contrib non-free</sub>|
|Allemagne<br>Halifax<br>20 Gbps|RWTH-Aachen (groupe d'étudiants de Halifax)|[ftp.halifax.rwth-aachen.de/parrotsec](http://ftp.halifax.rwth-aachen.de/parrotsec)|<sub>deb https://ftp.halifax.rwth-aachen.de/parrotsec/ rolling main contrib non-free</sub>|
|Allemagne<br>Esslingen<br>10 Gbps|Esslingen (Université des Sciences Appliquées)|[ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org](http://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org)|<sub>deb https://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org/ rolling main contrib non-free</sub>|
|Allemagne<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.fra10.de.leaseweb.net/parrot](https://mirror.fra10.de.leaseweb.net/parrot)|<sub>deb https://mirror.fra10.de.leaseweb.net/parrot rolling main contrib non-free</sub>|
|Allemagne<br>pyratelan<br>/|pyratelan|[mirror.pyratelan.org/parrot](https://mirror.pyratelan.org/parrot)|<sub>deb https://mirror.pyratelan.org/parrot rolling main contrib non-free</sub>|
|Pays-bas<br>NLUUG<br>10 Gbps|Nluug|[ftp.nluug.nl/os/Linux/distr/parrot](http://ftp.nluug.nl/os/Linux/distr/parrot)|<sub>deb https://ftp.nluug.nl/os/Linux/distr/parrot/ rolling main contrib non-free</sub>|
|Pays-Bas<br>lyrahosting<br>/|lyrahosting|[mirror.lyrahosting.com/parrot](https://mirror.lyrahosting.com/parrot)|<sub>deb https://mirror.lyrahosting.com/parrot rolling main contrib non-free</sub>|.
|Suède<br>UMU<br>20 Gbps|ACC UMU (Club informatique académique, Université d'Umea)|[ftp.acc.umu.se/mirror/parrotsec.org/parrot](http://ftp.acc.umu.se/mirror/parrotsec.org/parrot)|<sub>deb https://ftp.acc.umu.se/mirror/parrotsec.org/parrot/ rolling main contrib non-free</sub>|
|Grèce<br>UOC<br>1 Gbps|UoC (Université de Crète - Centre informatique)|[ftp.cc.uoc.gr/mirrors/linux/parrot](http://ftp.cc.uoc.gr/mirrors/linux/parrot)|<sub>deb https://ftp.cc.uoc.gr/mirrors/linux/parrot/ rolling main contrib non-free</sub>|
|Belgique<br>Belnet<br>10 Gbps|Belnet (The Belgian National Research)|[ftp.belnet.be/archive.parrotsec.org](http://ftp.belnet.be/mirror/archive.parrotsec.org)|<sub>deb http://ftp.belnet.be/mirror/archive.parrotsec.org/ rolling main contrib non-free</sub>|
|Espagne<br>Osluz<br>1 Gbps|Osluz (Oficina de software libre de la Universidad de Zaragoza)|[matojo.unizar.es/parrot](http://matojo.unizar.es/parrot)|<sub>deb http://matojo.unizar.es/parrot/ rolling main contrib non-free</sub>|
|Portugal<br>UP<br>1 Gbps|U.Porto (Université de Porto)|[mirrors.up.pt/parrot](http://mirrors.up.pt/parrot)|<sub>deb https://mirrors.up.pt/parrot/ rolling main contrib non-free</sub>||.
|Danemark<br>Dotsrc<br>10 Gbps|Dotsrc (Université Aalborg)|[mirrors.dotsrc.org/parrot](http://mirrors.dotsrc.org/parrot)|<sub>deb https://mirrors.dotsrc.org/parrot/ rolling main contrib non-free</sub>|
|France<br>Cythin<br>100 Mbps|Cythin.com|[parrot.mirror.cythin.com/parrot](https://parrot.mirror.cythin.com/parrot)|<sub>deb https://parrot.mirror.cythin.com/parrot rolling main contrib non-free</sub>|
|France<br>iriseden<br>/|iriseden|[parrot-mirror.iriseden.eu/parrot](https://parrot-mirror.iriseden.eu/parrot)|<sub>deb https://parrot-mirror.iriseden.eu/parrot rolling main contrib non-free</sub>|
|Hongrie<br>quantum-mirror<br>700 Mbps|quantum-mirror.hu|[quantum-mirror.hu/mirrors/pub/parrot](https://quantum-mirror.hu/mirrors/pub/parrot)|<sub>deb https://quantum-mirror.hu/mirrors/pub/parrot rolling main contrib non-free</sub>|
|Turquie<br>EB<br>100 Mbit/s|EB|[turkey.archive.parrotsec.org/parrot](http://turkey.archive.parrotsec.org/parrot)|<sub>deb http://turkey.archive.parrotsec.org/parrot/ rolling main contrib non-free</sub>|.
|Estonie<br>cspacehosting<br>/|cspacehosting|[mirror.cspacehostings.com/parrotsec](https://mirror.cspacehostings.com/parrotsec)|<sub>deb https://mirror.cspacehostings.com/parrotsec rolling main contrib non-free</sub>|
|Russie<br>Yandex<br>1 Gbps|Yandex|[mirror.yandex.ru/mirrors/parrot](http://mirror.yandex.ru/mirrors/parrot)|<sub>deb https://mirror.yandex.ru/mirrors/parrot/ rolling main contrib non-free</sub>|
|Russie<br>Truenetwork<br>10 Gbps|Truenetwork|[mirror.truenetwork.ru/parrot](http://mirror.truenetwork.ru/parrot)|<sub>deb https://mirror.truenetwork.ru/parrot/ rolling main contrib non-free</sub>|
|Russie<br>surf<br>/|surf|[mirror.surf/parrot](https://mirror.surf/parrot)|<sub>deb https://mirror.surf/parrot rolling main contrib non-free</sub>|
|Ukraine<br>comsys<br>1 Gbps|KPI (National Technical University of Ukraine - Comsys)|[mirrors.comsys.kpi.ua/parrot](http://mirrors.comsys.kpi.ua/parrot)|<sub>seulement les fichiers ISO sont mis en miroir</sub>|

### APAC ###

Asie et Pacifique

| Location<br>Mirror ID<br>bandwidth| Provider Name | URL | APT config string |
|:--------------------------------------|:---------------:|:-----|:-------------------|
|Bangladesh<br>Amberit<br>1 Gbps|Amberit (formerly Dhakacom)|[mirror.amberit.com.bd/parrotsec](http://mirror.amberit.com.bd/parrotsec)|<sub>deb http://mirror.amberit.com.bd/parrotsec/ rolling main contrib non-free</sub>|
|Taiwan<br>NCHC<br>20 Gbps|NCHC (Free Software Lab)|[free.nchc.org.tw/parrot](http://free.nchc.org.tw/parrot)|<sub>deb http://free.nchc.org.tw/parrot/ rolling main contrib non-free</sub>|
|Singapore<br>0x<br>10 Gbps|0x|[mirror.0x.sg/parrot](http://mirror.0x.sg/parrot)|<sub>deb https://mirror.0x.sg/parrot/ rolling main contrib non-free</sub>|
|China<br>USTC<br>1Gbps CMCC<br>1Gbps Cernet<br>300Mbps ChinaNet|University of Science and Technology of China and USTCLUG|[mirrors.ustc.edu.cn/parrot](http://mirrors.ustc.edu.cn/parrot)|<sub>deb http://mirrors.ustc.edu.cn/parrot rolling main contrib non-free</sub>|
|China<br>TUNA<br>2 Gbps|TUNA (Tsinghua university of Beijing, TUNA association)|[mirrors.tuna.tsinghua.edu.cn/parrot](http://mirrors.tuna.tsinghua.edu.cn/parrot)|<sub>deb https://mirrors.tuna.tsinghua.edu.cn/parrot/ rolling main contrib non-free</sub>|
|China<br>SJTUG<br>2 Gbps|SJTUG (SJTU *NIX User Group)|[mirrors.sjtug.sjtu.edu.cn/parrot](http://mirrors.sjtug.sjtu.edu.cn/parrot)|<sub>deb https://mirrors.sjtug.sjtu.edu.cn/parrot/ rolling main contrib non-free</sub>|
|Japan<br>wasabi-tokyo<br>/|wasabi-tokyo|[s3.ap-northeast-1.wasabisys.com/parrot-tokyo](https://s3.ap-northeast-1.wasabisys.com/parrot-tokyo)|<sub>deb https://s3.ap-northeast-1.wasabisys.com/parrot-tokyo rolling main contrib non-free</sub>|
|New Caledonia<br>Lagoon<br>1 Gbps|Lagoon Networks|[mirror.lagoon.nc/pub/parrot](http://mirror.lagoon.nc/pub/parrot)|<sub>deb http://mirror.lagoon.nc/pub/parrot/ rolling main contrib non-free</sub>|
|Thailand<br>KKU<br>1 Gbps|KKU (Khon Kaen University)|[mirror.kku.ac.th/parrot](http://mirror.kku.ac.th/parrot)|<sub>deb https://mirror.kku.ac.th/parrot/ rolling main contrib non-free</sub>|
|Indonesia<br>Datautama<br>1 Gbps|Datautama (PT. Data Utama Dinamika)|[kartolo.sby.datautama.net.id/parrot](http://kartolo.sby.datautama.net.id/parrot)|<sub>deb http://kartolo.sby.datautama.net.id/parrot/ rolling main contrib non-free</sub>|

## Fabriquer son propre miroir ##

Vous pouvez configurer un miroir d'archives Parrot sur votre serveur pour un usage personnel ou public en suivant les étapes ci-dessous.

### Assurez-vous d'avoir suffisamment d'espace libre. ###

Vous pouvez synchroniser l'ensemble du référentiel ou sélectionner uniquement les images ISO.

Assurez-vous d'avoir suffisamment d'espace libre pour héberger un miroir, et soyez prêt pour les mises à jour futures car la taille de l'archive fluctue.

La taille actuelle de l'archive est disponible ici [archive.parrotsec.org/parrot/misc/archive-size.txt](https://deb.parrotsec.org/parrot/misc/archive-size.txt)

### Choisir le serveur amont ###

Nous gérons plusieurs domaines pour les services de synchronisation des dépôts, nous vous suggérons d'utiliser `rsync.parrot.sh` pour des configurations automatiques et sans faille, mais les paramètres amont peuvent être ajustés en cas de besoins spécifiques.

N'hésitez pas à contacter l'équipe Parrot si vous avez des besoins spécifiques en matière de miroir ou des limitations de bande passante. Nous pouvons vous fournir des sources amont dédiées ou un support professionnel pour votre miroir.

<pre>
Miroir principal :
    rsync.parrot.sh
    
Zones globales (lisez les notes) :
    EMEA:
        emea.rsync.parrot.sh
    NCSA:
        ncsa.rsync.parrot.sh
    APAC:
        apac.rsync.parrot.sh
</pre>

Certaines archives peuvent être indisponibles ou remplacées de temps en temps.

`rsync.parrot.sh` est automatiquement équilibré entre tous les miroirs disponibles et vous donnera zéro temps d'arrêt.

### Télécharger l'archive ###

Si vous synchronisez l'archive entière en suivant les instructions ci-dessous, vous n'avez PAS besoin de synchroniser l'archive ISO. Les fichiers ISO sont inclus par défaut !

#### Synchroniser le référentiel ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot

#### Configurer un cronjob ####

lancez la commande suivante :

    crontab -e

et ajoutez le contenu suivant au fichier crontab :

    */10 * * * * flock -xn /tmp/parrot-rsync.lock -c'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot

### Télécharger uniquement l'archive ISO ###

Ne synchronisez pas l'archive ISO si vous synchronisez déjà l'archive complète avec les instructions ci-dessus. 
Les fichiers ISO sont déjà fournis avec les instructions du paragraphe précédent.

Utilisez les instructions suivantes si vous souhaitez synchroniser uniquement les fichiers ISO.

#### Synchronisation du référentiel ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot

#### Configurer un cronjob ####

lancez la commande suivante :

    crontab -e

et ajoutez le contenu suivant au fichier crontab :

    30 2 * * * flock -xn /tmp/parrot-rsync.lock -c'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot

### Exposer votre miroir via rsync ###

Votre miroir peut être exposé via rsync pour permettre à d'autres personnes de se synchroniser à partir de vous et pour permettre à notre directeur de miroir de scanner périodiquement votre miroir et d'effectuer des contrôles d'indexation et de santé.

L'exposition via rsync est obligatoire pour ajouter votre miroir à notre liste officielle.

Les instructions suivantes permettent de configurer rsync et d'exposer l'archive parrot conformément à nos standards sur un serveur debian/ubuntu. Des ajustements mineurs sont nécessaires pour les autres systèmes non-apt.

installer rsync avec :

    sudo apt install rsync

éditez /etc/rsyncd.conf avec nano :

    sudo nano /etc/rsyncd.conf

collez les paramètres suivants dans le fichier de configuration et sauvegardez-le :

    [parrot]
            comment = Parrot OS - full archive [rsync.parrot.sh/parrot]
            path = /var/www/html/parrot/
            hosts allow = *
            #hosts deny = *
            list=true
            uid=www-data
            gid=www-data
            read only = yes
            use chroot=yes
            dont compress # for better performance
    
    [parrot-iso]
            comment = Parrot OS - ISO files only [rsync.parrot.sh/parrot-iso]
            path = /var/www/html/parrot/
            exclude = pool dists
            hosts allow = *
            list=true
            uid=www-data
            gid=www-data
            read only = yes
            use chroot=yes
            dont compress

Activez le service rsync :

    sudo systemctl enable rsync    

Démarrez le service rsync :

    sudo service rsync start


### Rendre votre miroir officiel ###

Si vous voulez que votre miroir soit ajouté à notre liste de miroirs officiels et à nos directeurs de miroirs, envoyez-nous un courriel à `team AT parrotsec DOT org`.

Amusez-vous bien :)
