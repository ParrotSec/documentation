# Parrot en QubesOS #

Hay dos maneras de crear una MV de ParrotOS en QubesOS por ahora.

### Opción 1 - Crear una HVM (siglas en inglés de Máquina virtual asistida por hardware) ###

1. Descarga la imagen de ParrotOS x86_64 que quieras.

2. [Crea](https://www.qubes-os.org/doc/standalones-and-hvms/#command-line) una nueva HVM ([Hardware-assisted Virtual Machine](https://www.qubes-os.org/doc/glossary/#hvm)).
    

3. Inicia la HVM con el CD/DVD insertado.

    
        [user@dom0 ~]$ qvm-start <nombre-de-hvm> --cdrom <nombre-de-hvm>:/home/user/Descargas/<nombre-de-iso>.iso



### Opción 2 - Construye una TemplateVM de ParrotOS sobre una TemplateVM de Debian ###

**PRECAUCIÓN**: Esta documentación no garantiza que cualquier llave GPG que descargues desde internet sea auténtica. Obtén siempre una huella digital (fingerprint) de clave confiable a través de otros canales y siempre verifica cualquier clave que descargues con tu copia confiable de la fongerprint.

Este paso es necesario ya que, por defecto (de seguridad), TemplateVM no tiene conectividad directa a Internet. Los usuarios que comprendan los riesgos de habilitar dicho acceso pueden cambiar esta configuración en los ajustes del firewall para TemplateVM.

*Nota*: El indicador en cada línea muestra dónde se debe ingresar cada comando (@dom0, @parrot, @xxxx-dvm, @debian-<X>). 

1. Recupera la clave GPG oficial de ParrotOS usando una [DispVM](https://www.qubes-os.org/doc/how-to-use-disposables/).

    
    
        [user@xxxx-dvm ~]$ gpg --keyserver hkp://keys.gnupg.net --recv-key 3B3EAB807D70721BA9C03E55C7B39D0362972489
    \

        [user@xxxx-dvm ~]$ gpg --list-keys --with-fingerprint 3B3EAB807D70721BA9C03E55C7B39D0362972489 
    \

        [user@xxxx-dvm ~]$ gpg --export --armor 3B3EAB807D70721BA9C03E55C7B39D0362972489 > parrot-key.asc
    

2. NO APAGAR LA DISPVM. El archivo parrot-key.asc se copiará en la plantilla de ParrotOS en un paso posterior.

3. Asegúrate de que la clave sea la auténtica de ParrotOS.

### Crear una TemplateVM de ParrotOS ###

Estas instrucciones te mostrarán cómo actualizar una TemplateVM de Debian a ParrotOS.

1. (Opcional) Busca la última plantilla estable de Debian e instálala (si aún no lo has hecho):

        [user@dom0 ~]$ sudo qubes-dom0-update --action="search all" qubes-template-debian
    
    \

        [user@dom0 ~]$ sudo qubes-dom0-update <última template de Debian>

2. Inicia, actualiza y cierra tu TemplateVM de Debian.

        [user@dom0 ~]$ qvm-start debian-<X>
    \

        [user@dom0 ~]$ qvm-run -a debian-<X> gnome-terminal

    \

        [user@debian-<X> ~]$ sudo apt update

    \

        [user@debian-<X> ~]$ sudo apt upgrade

    \

        [user@dom0 ~]$ qvm-shutdown debian-<X>


3. Clona tu TemplateVM de debian-x

        [user@dom0 ~]$ qvm-clone debian-<X> parrot


4. Verifica el nombre del repositorio utilizado actualmente en /etc/apt/sources.list y la versión de prueba actual de Debian. Actualiza la lista de repositorios respectivamente

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list

    \

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list.d/qubes-r<X>.list

p.ej. en este ejemplo actualizamos el repositorio estable stretch al repositorio testing buster

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list

  \

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list.d/qubes-r<X>.list

5. Actualiza el temmplate de Parrot a la última versión testing de Debian

        [user@parrot ~]$ sudo apt update && sudo apt full-upgrade

    \

        [user@parrot ~]$ sudo apt autoremove

Nota: Durante la ejecución de un comando de actualización completa, lee atentamente la lista de paquetes que se eliminarán. Si contiene paquetes qubes- *, finaliza la operación e intenta resolver primero las dependencias de paquetes qubes- * que faltan.

6. Copia la clave GPG desde la DispVM al nuevo template:

        [user@xxxx-dvm ~]$ qvm-copy-to-vm parrot parrot-key.asc

Apaga la DispVM.

7. Agrega la clave GPG de Parrot a la lista claves confiables para autenticar paquetes:

        [user@parrot ~]$ cat /home/user/QubesIncoming/dispXXX/parrot-key.asc | sudo apt-key add -

El comando de arriba debería retornar 'OK' en una línea simple.

8. Intenta una actualización en la nueva TemplateVM

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


9. Apaga y ajusta (trim) la nueva TemplateVM

        [user@dom0 ~]$ qvm-shutdown parrot

    \
    
        [user@dom0 ~]$ qvm-trim-template parrot


10. Asegúrate de que una terminal pueda abrirse en la nueva TemplateVM

        [user@dom0 ~]$ qvm-run -a parrot gnome-terminal



#### Instala las herramientas de Pentesting (opcional) ####

Hasta aquí deberías tener un template funcional y puedes instalar las herramientas que necesites.

1. Cambia el tamaño de la imagen del disco del template si planeas instalar la distribución completa de ParrotOS. Por ejemplo, para instalar parrot-tools-full, debes aumentar el tamaño de la VM de 10 GB a al menos 20 GB.

2. Instala las herramientas de Pentesting de ParrotSec:

        [user@parrot ~]$ sudo apt install parrot-tools-full


(Optional) Personaliza el directorio de inicio del template (por ejemplo, instala tu copia con licencia de Burp Suite Professional)

#### Usar la TemplateVM ####
El template está listo para ser usado. Ahora puedes activar AppVMs basadas en el template de ParrotOS.
