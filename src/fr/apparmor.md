
# AppArmor #

AppArmor est un système de sécurité des applications Linux efficace et facile à utiliser. AppArmor protège de manière proactive le système d'exploitation et les applications contre les menaces externes ou internes, même les attaques de type "zero-day" (avec des profils stricts), en imposant un bon comportement et en empêchant l'exploitation des failles applicatives, même inconnues.

Les profils de sécurité d'AppArmor définissent complètement les ressources du système auxquelles les applications individuelles peuvent accéder, et avec quels privilèges. Plusieurs profils par défaut sont inclus dans AppArmor et, grâce à une combinaison d'outils avancés d'analyse statique et d'apprentissage, les profils AppArmor peuvent être déployés avec succès en quelques heures, même pour des applications très complexes.


## Vérifier si AppArmor est installé ##

AppArmor et ses profils devraient déjà être activés et fonctionner sur Parrot OS. Pour vérifier si AppArmor est actif, faites : 

    sudo aa-status --enabled ; echo $?

La sortie doit retourner 0. Vous pouvez également exécuter la commande suivante pour afficher les profils AppArmor chargés :

    sudo aa-status
    
<img src="./images/apparmor/0.png" width="75%"/>

Si, pour une raison quelconque, AppArmor n'est pas préinstallé, poursuivez la lecture ci-dessous.

## Installer AppArmor ## 

    sudo apt install apparmor apparmor-utils auditd

**apparmor** = paquet principal \
**apparmor-utils** = utilitaires pour contrôler les profils AppArmor \
**auditd** = outils de génération automatique de profils 

\ 

Pour activer AppArmor, exécutez les commandes suivantes : 

    sudo mkdir -p /etc/default/grub.d\ 
    
\

    echo 'GRUB_CMDLINE_LINUX_DEFAULT=\"$GRUB_CMDLINE_LINUX_DEFAULT apparmor=1 security=apparmor\"' | sudo tee /etc/default/grub.d/apparmor.cfg
    
\ 

    sudo update-grub
    
\ 
    
    sudo reboot

Puis exécutez la commande suivante pour inspecter l'état actuel : 

    sudo aa-status

Ceci listera tous les profils AppArmor chargés pour les applications, les processus et détaillera leur état (enforced, complain, unconfined). Par exemple, pour vérifier le mode d'application, exécutez la commande suivante : 

    ps auxZ | grep -v '^unconfined'

Pour installer un profil, exécutez la commande suivante : 

    sudo apt install apparmor-profiles apparmor-profiles-extra 

Les profils AppArmor se trouvent dans `/etc/apparmor.d/`. Vous pouvez utiliser apparmor_parser(8) pour les insérer dans le noyau. Cela est fait automatiquement lors de l'installation de paquets qui déposent la politique dans `/etc/apparmor.d/`.

Par exemple, pour mettre tous les profils \"extra\" (fournis dans le paquet apparmor-profiles) en mode plainte (sauf les règles de refus qui sont appliquées silencieusement, la politique de sécurité n'est pas appliquée et les violations d'accès sont enregistrées), faites ce qui suit : 

    cd /usr/share/doc/apparmor-profiles/extras
    
\ 
    
    cp -i *.* /etc/apparmor.d/
    
\ 
    
    for f in *.* ; 
        do aa-complain /etc/apparmor.d/$f; 
    done

Pour mettre ces profils en **mode enforce**, utilisez `aa-enforce` au lieu de `aa-complain`. Attention cependant : beaucoup de ces profils ne sont pas à jour et casseront des fonctionnalités en mode enforce (et peut-être même en mode complain) ; ne les appliquez que si vous êtes prêt à les améliorer en amont. 

## Désactiver AppArmor ##

D'abord, vous pouvez désactiver les profils individuels avec `aa-disable`. Mais si vous voulez *vraiment* désactiver AppArmor sur votre système, lancez : 

    sudo mkdir -p /etc/default/grub.d

\   

    echo 'GRUB_CMDLINE_LINUX_DEFAULT="$GRUB_CMDLINE_LINUX_DEFAULT apparmor=0"' | sudo tee /etc/default/grub.d/apparmor.cfg

\ 

    sudo update-grub

\   

    sudo reboot

## Debugger AppArmor ##

La commande `aa-notify`, du paquet *apparmor-notify*, est capable de fournir une notification sur le bureau chaque fois qu'un programme provoque un message DENIED dans `/var/log/kern.log`. Accordez-vous les droits de lecture sur `/var/log/kern.log` en rejoignant le groupe adm : 

    sudo adduser "$USER" adm 

Ensuite, `aa-notify` devrait démarrer automatiquement lors de votre prochaine connexion (en utilisant `/etc/xdg/autostart/apparmor-notify.desktop`). Si ce n'est pas le cas, lancez-le manuellement : 

    aa-notify -p 
    
Si vous utilisez **auditd**, vous devriez lancer `aa-notify` de cette manière : 

    sudo aa-notify -p -f /var/log/audit/audit.log
    
\

#### Diagnostiquer si un bug a pu être causé par AppArmor ####

Le paquet apparmor-utils fournit de nombreuses commandes utiles pour déboguer AppArmor. Découvrez si AppArmor est activé à l'aide de la commande `cat` : 

    cat /sys/module/apparmor/parameters/enabled 
    
Cette commande renvoie Y si elle est vraie.

#### Découvrez quels profils sont activés #####

    sudo aa-status
 
 La commande ci-dessus répertorie tous les profils AppArmor chargés pour les applications et les processus et détaille leur état (enforced, complain, unconfined, et 
 
    ps auxZ | grep -v '^unconfined'

répertorie les exécutables en cours d'exécution qui sont actuellement confinés par un profil AppArmor. Parfois, il est utile de désactiver un profil et de tester à nouveau si le bug persiste : 

    sudo aa-disable /etc/apparmor.d/$profile 

par exemple `sudo aa-disable /etc/apparmor.d/usr.bin.pidgin`.

Vous pouvez réactiver le profil de cette façon : 

    sudo aa-enforce /etc/apparmor.d/$profile
 
 #### Vérifier les journaux ####
 
    sudo tail -f /var/log/syslog | grep 'DENIED' 
  
  ou (si **auditd** est installé) : sudo tail -f /var/log/auditd/auditd.log | grep 'DENIED' Les lignes \"DENIED\" devraient fournir plus d'informations sur le processus concret ou l'accès au système de fichiers qui a été refusé. Produire une liste des processus avec des ports tcp ou udp qui n'ont pas de profils AppArmor chargés : 
  
    sudo aa-unconfined 
  
  également possible avec le paramètre `--paranoid`.
  
  Les profils en mode complain enverront des lignes ALLOWED dans les journaux pour des entrées qui seraient normalement DENIED en mode enforce. Vous pouvez utiliser ceci pour modifier les configurations avant de les activer en mode exécution.