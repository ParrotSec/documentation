# Parrot sur QubesOS #

Il existe deux façons de créer une VM ParrotOS sur QubesOS pour le moment.

### Option 1 - Créer un HVM ###

1. Téléchargez n'importe quelle image ParrotOS x86_64 de votre choix.

2. [Créez](https://www.qubes-os.org/doc/standalones-and-hvms/#command-line) une nouvelle HVM ([Machine virtuelle assistée par matériel ](https://www.qubes-os.org/doc/glossary/#hvm)).
    

3. Démarrez le HVM avec le CD/DVD attaché.

    
        [user@dom0 ~]$ qvm-start <hvm-name> --cdrom <vm-name>:/home/user/Downloads/<iso-name>.iso



### Option 2 - Construire un TemplateVM ParrotOS sur un TemplateVM Debian ###

**AVERTISSEMENT**: Cette documentation ne peut garantir l'authenticité des clés PGP que vous téléchargez sur Internet. Obtenez toujours une empreinte digitale d'une clé de confiance via d'autres canaux et vérifiez toujours toute clé que vous téléchargez par rapport à votre copie de confiance de l'empreinte digitale.

Cette étape est requise car par (sécurité) défaut un TemplateVM n'a pas de connectivité Internet directe. Les utilisateurs comprenant les risques liés à l'activation d'un tel accès peuvent modifier cette configuration dans les paramètres du pare-feu pour le TemplateVM.

*Remarque*: L'invite sur chaque ligne indique où chaque commande doit être saisie (@dom0, @parrot, @xxxx-dvm, @debian-<X>). 

1. Récupérez la clé officielle ParrotOS GPG à l'aide d'un [DispVM](https://www.qubes-os.org/doc/how-to-use-disposables/).

    
    
        [user@xxxx-dvm ~]$ gpg --keyserver hkp://keys.gnupg.net --recv-key 3B3EAB807D70721BA9C03E55C7B39D0362972489
    \

        [user@xxxx-dvm ~]$ gpg --list-keys --with-fingerprint 3B3EAB807D70721BA9C03E55C7B39D0362972489 
    \

        [user@xxxx-dvm ~]$ gpg --export --armor 3B3EAB807D70721BA9C03E55C7B39D0362972489 > parrot-key.asc
    

2. NE PAS ETEINDRE LE DISPVM. Le fichier parrot-key.asc sera copié dans le template ParrotOS à une étape ultérieure.

3. Assurez-vous que la clé que vous possédez soit bien la clé authentique de ParrotOS.

### Créer un TemplateVM ParrotOS ###

Ces instructions vous montreront comment mettre à niveau un Debian TemplateVM vers ParrotOS.


1. (Facultatif) Recherchez le dernier modèle Debian stable et installez-le (si ce n'est déjà fait) :

        [user@dom0 ~]$ sudo qubes-dom0-update --action="search all" qubes-template-debian
    
    \

        [user@dom0 ~]$ sudo qubes-dom0-update <latest Debian template>

2. Démarrez, mettez à jour et fermez votre Debian TemplateVM.

        [user@dom0 ~]$ qvm-start debian-<X>
    \

        [user@dom0 ~]$ qvm-run -a debian-<X> gnome-terminal

    \

        [user@debian-<X> ~]$ sudo apt update

    \

        [user@debian-<X> ~]$ sudo apt upgrade

    \

        [user@dom0 ~]$ qvm-shutdown debian-<X>


3. Cloner debian-x TemplateVM

        [user@dom0 ~]$ qvm-clone debian-<X> parrot


4. Vérifiez le nom du dépôt actuellement utilisé dans /etc/apt/sources.list et la version de test actuelle de Debian. Mettez à jour la liste des repo en conséquence.

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list

    \

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list.d/qubes-r<X>.list

e.g. par exemple, dans cet exemple, nous mettons à jour le repo stretch stable vers le référentiel testing Buster

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list

  \

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list.d/qubes-r<X>.list

5. Upgrade le template Parrot vers la dernière version testing de Debian

        [user@parrot ~]$ sudo apt update && sudo apt full-upgrade

    \

        [user@parrot ~]$ sudo apt autoremove

Remarque : lors de l'exécution d'une commande d'upgrade complète, lisez attentivement la liste des packages à supprimer. S'il contient des packages qubes-*, terminez l'opération et essayez d'abord de résoudre les problèmes de dépendances manquantes pour les packages qubes-*.

6. Copiez la clé ParrotOS GPG du DispVM vers le nouveau template :

        [user@xxxx-dvm ~]$ qvm-copy-to-vm parrot parrot-key.asc

Eteindre la DispVM.

7. Ajoutez la clé ParrotOS GPG à la liste des clés de confiance pour authentifier les packages :


        [user@parrot ~]$ cat /home/user/QubesIncoming/dispXXX/parrot-key.asc | sudo apt-key add -

La commande ci-dessus doit renvoyer OK sur une seule ligne.

8. Tenter une mise à jour sur le nouveau TemplateVM

        [user@parrot ~]$ sudo cat <<EOF > /etc/apt/sources.list.d/parrot.list
        # ParrotOS repository
        deb http://deb.parrotsec.org/parrot stable main contrib non-free
        #deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
        EOF

    \

        [user@parrot ~]$ sudo apt update

    \

        [user@parrot ~]$ sudo apt full-upgrade

    \

        [user@parrot ~]$ sudo apt autoremove

    \

        [user@parrot ~]$ sudo apt install parrot-core parrot-archive-keyring parrot-drivers parrot-skel


9. Arrêtez et coupez le nouveau TemplateVM

        [user@dom0 ~]$ qvm-shutdown parrot

    \
    
        [user@dom0 ~]$ qvm-trim-template parrot


10. Assurez-vous qu'un terminal peut être ouvert dans le nouveau TemplateVM

        [user@dom0 ~]$ qvm-run -a parrot gnome-terminal



#### Installer les outils de test d'intrusion (facultatif) ####

À ce stade, vous devriez avoir un template de travail et vous pourrez installer les outils dont vous avez besoin.

1. Redimensionnez l'image disque du template si vous prévoyez d'installer la distribution complète de ParrotOS. Par exemple, pour installer parrot-tools-full, vous devez augmenter la taille du système VM de 10 Go à au moins 20 Go.

2. Installez les outils de test d'intrusion ParrotSec :

        [user@parrot ~]$ sudo apt install parrot-tools-full


(Facultatif) Personnalisez le répertoire d'accueil du modèle (par exemple, installez votre copie sous licence de Burp Suite Professional)

#### Utiliser le TemplateVM ####
Le template est prêt à être utilisé. Vous pouvez maintenant lancer des AppVMs basées sur le template de perrotOS.

