El Proyecto Parrot no solo ofrece un sistema listo para usar en formato ISO, sino que también proporciona una gran cantidad de software adicional que se puede instalar además desde el repositorio oficial de Parrot.

El repositorio de Parrot se utiliza para proporcionar software con soporte oficial, actualizaciones del sistema y correcciones de seguridad.

# La red de Mirrors #

El software en el archivo parrot se entrega en forma de paquetes deb, y estos paquetes se brindan a través de una vasta red de servidores espejo que proporcionan el mismo conjunto de paquetes distribuidos por todo el mundo para una entrega de software más rápida.

El sistema Parrot está configurado para utilizar los directores centrales de archivos de Parrot. Los directores Parrot son servidores especiales que recogen todas las solicitudes de los usuarios finales y las redireccionan al servidor de descarga más cercano geográficamente disponible para el usuario que realizó la solicitud.

Si quieres y puedes, puedes crear tu propio mirror para Parrot siguiendo [este procedimiento](./mirrors-list.md#crea-tu-propio-mirror).

### Medidas de Seguridad ###

La red de Espejos de Parrot está protegida por firmas digitales centralizadas y los espejos no pueden inyectar actualizaciones falsas.

Si un espejo maligno intenta inyectar un paquete falso, Parrot automáticamente se negará a descargarlo e instalarlo y generará un mensaje de alerta.

Esta medida de seguridad implementada en APT (el administrador de paquetes Parrot / Debian) es muy eficiente y confiable porque las firmas digitales son aplicadas fuera de línea por el encargado del archivo Parrot y no por los servidores espejo, lo que garantiza una cadena de confianza directa y segura entre el desarrollador y el usuario.

## Configuración y configuración personalizada ##

El administrador de paquetes APT utiliza `/etc/apt/sources.list` y cualquier archivo *.list* que se encuentre en el directorio `/etc/apt/sources.list.d/`.


<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**Nota**

  </div>
  <div class="panel-body">
  /etc/apt/sources.list está VACÍO y la configuración APT predeterminada está en /etc/apt/sources.list.d/parrot.list.
  </div>
</div>
<br>

### Contenido de /etc/apt/sources.list.d/parrot.list ###

    deb https://deb.parrot.sh/parrot/ parrot main contrib non-free
    #deb-src https://deb.parrot.sh/parrot/ parrot main contrib non-free
    deb https://deb.parrot.sh/parrot/ rolling-security main contrib non-free
    #deb-src https://deb.parrot.sh/parrot/ rolling-security main contrib non-free
    
## Otros mirrors para configuración manual ##

### Worldwide (CDN) ###

| Mirror ID<br>bandwidth (per node) | Provider Name | URL | APT config string |
|:----------------------------------|:---------------:|:-----|:-------------------|
|parrot<br>1 Gbps|Parrot Infrastructure|[deb.parrot.sh/parrot](https://deb.parrot.sh/parrot)|<sub>deb https://deb.parrot.sh/parrot parrot main contrib non-free</sub>|
|bunny<br>10/80 Gbps|Bunny.net|[bunny.deb.parrot.sh](https://bunny.deb.parrot.sh)|<sub>deb https://bunny.deb.parrot.sh parrot main contrib non-free</sub>|
|alibaba<br>10 Gbps|Alibaba Cloud|[mirrors.aliyun.com/parrot](https://mirrors.aliyun.com/parrot)|<sub>deb https://mirrors.aliyun.com/parrot parrot main contrib non-free</sub>|
|azure<br>1 Gbps<br>/|Microsoft Azure|[edge1.parrot.run/parrot](https://azure.deb.parrot.sh/parrot)|<sub>deb https://azure.deb.parrot.sh/parrot parrot main contrib non-free</sub>|

### NCSA ###
Norte, Centro y Sudamérica

| Ubicación<br>Mirror ID<br>Ancho de banda | Nombre de proveedor | URL | Cadena de configuración APT |
|:----------------------------------|:---------------:|:-----|:-------------------|
|Massachussetts<br>MIT<br>1 Gbps|SIPB MIT|[mirrors.mit.edu/parrot](http://mirrors.mit.edu/parrot/)|<sub>deb http://mirrors.mit.edu/parrot/ parrot main contrib non-free</sub>|
|New York<br>Clarkson<br>1 Gbps|Clarkson University|[mirror.clarkson.edu/parrot](https://mirror.clarkson.edu/parrot/)|<sub>deb https://mirror.clarkson.edu/parrot/ parrot main contrib non-free</sub>|
|Oregon<br>Osuosl<br>1 Gbps|Oregon State University - Open Source Lab|[ftp.osuosl.org/pub/parrotos](https://ftp.osuosl.org/pub/parrotos)|<sub>deb https://ftp.osuosl.org/pub/parrotos parrot main contrib non-free</sub>|
|Oregon<br>/<br>/|wasabi-oregon|[s3.us-west-1.wasabisys.com/parrot-oregon](https://s3.us-west-1.wasabisys.com/parrot-oregon)|<sub>deb https://s3.us-west-1.wasabisys.com/parrot-oregon main contrib non-free</sub>|
|California<br>Berkeley<br>1 Gbps|Berkeley Open Computing Facility|[mirrors.ocf.berkeley.edu/parrot](http://mirrors.ocf.berkeley.edu/parrot)|<sub>deb https://mirrors.ocf.berkeley.edu/parrot/ parrot main contrib non-free</sub>|
|California<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.sfo12.us.leaseweb.net/parrot](https://mirror.sfo12.us.leaseweb.net/parrot)|<sub>deb https://mirror.sfo12.us.leaseweb.net/parrot parrot main contrib non-free</sub>|
|Florida<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.mia11.us.leaseweb.net/parrot](https://mirror.mia11.us.leaseweb.net/parrot)|<sub>deb https://mirror.mia11.us.leaseweb.net/parrot parrot main contrib non-free</sub>|
|Virginia<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.wdc1.us.leaseweb.net/parrot](https://mirror.wdc1.us.leaseweb.net/parrot)|<sub>deb https://mirror.wdc1.us.leaseweb.net/parrot parrot main contrib non-free</sub>|
|Virginia<br>/<br>/|wasabi-virginia|[s3.us-east-2.wasabisys.com/parrot-virginia](https://s3.us-east-2.wasabisys.com/parrot-virginia)|<sub>deb https://s3.us-east-2.wasabisys.com/parrot-virginia main contrib non-free</sub>|
|Texas<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.dal10.us.leaseweb.net/parrot](https://mirror.dal10.us.leaseweb.net/parrot)|<sub>deb https://mirror.dal10.us.leaseweb.net/parrot parrot main contrib non-free</sub>|
|Texas<br>/<br>/|wasabi-texas|[s3.us-central-1.wasabisys.com/parrot-texas](https://s3.us-central-1.wasabisys.com/parrot-texas)|<sub>deb https://s3.us-central-1.wasabisys.com/parrot-texas main contrib non-free</sub>|
|Winnipeg - Canada<br>muug<br>10 Gbps|Manitoba Unix User Group|[muug.ca/mirror/parrot/](https://muug.ca/mirror/parrot/)|<sub>deb https://muug.ca/mirror/parrot/ parrot main contrib non-free</sub>|
|Beauharnois - Canada<br>Cythin<br>100 Mbps|Cythin.com|[parrot.ca.mirror.cythin.com/parrot](https://parrot.ca.mirror.cythin.com/parrot)|<sub>deb https://parrot.ca.mirror.cythin.com/parrot parrot main contrib non-free</sub>|
|Ecuador<br>CEDIA<br>100 Mbps|RED CEDIA (National research and education center of Ecuador)|[mirror.cedia.org.ec/parrot](http://mirror.cedia.org.ec/parrot)|<sub>deb https://mirror.cedia.org.ec/parrot/ parrot main contrib non-free</sub>|
|Ecuador<br>UTA<br>100 Mbps|UTA (Universidad Técnica de ambato)|[mirror.uta.edu.ec/parrot](http://mirror.uta.edu.ec/parrot)|<sub>deb https://mirror.uta.edu.ec/parrot/parrot main contrib non-free<</sub>|
|Ecuador<br>UEB<br>100 Mbps|UEB (Universidad Estatal de Bolivar)|[mirror.ueb.edu.ec/parrot](http://mirror.ueb.edu.ec/parrot)|<sub>deb https://mirror.ueb.edu.ec/parrot/ parrot main contrib non-free</sub>|
|Brazil<br>USP<br>1 Gbps|University of Sao Paulo|[sft.if.usp.br/parrot](http://sft.if.usp.br/parrot)|<sub>deb http://sft.if.usp.br/parrot/ main contrib non-free</sub>|
|Canada<br>/<br>/|0xem|[https://mirror.0xem.ma/parrot/](https://mirror.0xem.ma/parrot/)|<sub>deb https://mirror.0xem.ma/parrot/ main contrib non-free</sub>|


### EMEA ###
Eropa, Medio Oriente y Asia

| Ubicación<br>Mirror ID<br>Ancho de banda | Nombre de proveedor | URL | Cadena de configuración APT |
|:----------------------------------|:---------------:|:-----|:-------------------|
|Italy<br>GARR<br>10 Gbps|GARR Consortium (Italian Research & Education Network)|[parrot.mirror.garr.it/mirrors/parrot](http://parrot.mirror.garr.it/mirrors/parrot)|<sub>deb https://parrot.mirror.garr.it/mirrors/parrot/ parrot main contrib non-free</sub>|
|Germany<br>Halifax<br>20 Gbps|RWTH-Aachen (Halifax students group)|[ftp.halifax.rwth-aachen.de/parrotsec](http://ftp.halifax.rwth-aachen.de/parrotsec)|<sub>deb https://ftp.halifax.rwth-aachen.de/parrotsec/ parrot main contrib non-free</sub>|
|Germany<br>Esslingen<br>10 Gbps|Esslingen (University of Applied Sciences)|[ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org](http://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org)|<sub>deb https://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org/ parrot main contrib non-free</sub>|
|Germany<br>Leaseweb<br>10 Gbps|Leaseweb|[mirror.fra10.de.leaseweb.net/parrot](https://mirror.fra10.de.leaseweb.net/parrot)|<sub>deb https://mirror.fra10.de.leaseweb.net/parrot parrot main contrib non-free</sub>|
|Germany<br>pyratelan<br>/|pyratelan|[mirror.pyratelan.org/parrot](https://mirror.pyratelan.org/parrot)|<sub>deb https://mirror.pyratelan.org/parrot parrot main contrib non-free</sub>|
|Netherlands<br>NLUUG<br>10 Gbps|Nluug|[ftp.nluug.nl/os/Linux/distr/parrot](http://ftp.nluug.nl/os/Linux/distr/parrot)|<sub>deb https://ftp.nluug.nl/os/Linux/distr/parrot/ parrot main contrib non-free</sub>|
|Netherlands<br>lyrahosting<br>/|lyrahosting|[mirror.lyrahosting.com/parrot](https://mirror.lyrahosting.com/parrot)|<sub>deb  https://mirror.lyrahosting.com/parrot parrot main contrib non-free</sub>|
|Netherlands<br>wasabi-amsterdam<br>/|wasabi-amsterdam|[s3.eu-central-1.wasabisys.com/parrot-amsterdam](https://s3.eu-central-1.wasabisys.com/parrot-amsterdam)|<sub>deb  https://s3.eu-central-1.wasabisys.com/parrot-amsterdam parrot main contrib non-free</sub>|
|Sweden<br>UMU<br>20 Gbps|ACC UMU (Academic Computer Club, Umea University)|[ftp.acc.umu.se/mirror/parrotsec.org/parrot](http://ftp.acc.umu.se/mirror/parrotsec.org/parrot)|<sub>deb https://ftp.acc.umu.se/mirror/parrotsec.org/parrot/ parrot main contrib non-free</sub>|
|Greece<br>UOC<br>1 Gbps|UoC (University of Crete - Computer Center)|[ftp.cc.uoc.gr/mirrors/linux/parrot](http://ftp.cc.uoc.gr/mirrors/linux/parrot)|<sub>deb https://ftp.cc.uoc.gr/mirrors/linux/parrot/ parrot main contrib non-free</sub>|
|Belgium<br>Belnet<br>10 Gbps|Belnet (The Belgian National Research)|[ftp.belnet.be/archive.parrotsec.org](http://ftp.belnet.be/mirror/archive.parrotsec.org)|<sub>deb http://ftp.belnet.be/mirror/archive.parrotsec.org/ parrot main contrib non-free</sub>|
|Spain<br>Osluz<br>1 Gbps|Osluz (Oficina de software libre de la Universidad de Zaragoza)|[matojo.unizar.es/parrot](http://matojo.unizar.es/parrot)|<sub>deb http://matojo.unizar.es/parrot/ parrot main contrib non-free</sub>|
|Portugal<br>UP<br>1 Gbps|U.Porto (University of Porto)|[mirrors.up.pt/parrot](http://mirrors.up.pt/parrot)|<sub>deb https://mirrors.up.pt/parrot/ parrot main contrib non-free</sub>|
|Denmark<br>Dotsrc<br>10 Gbps|Dotsrc (Aalborg university)|[mirrors.dotsrc.org/parrot](http://mirrors.dotsrc.org/parrot)|<sub>deb https://mirrors.dotsrc.org/parrot/ parrot main contrib non-free</sub>|
|France<br>Cythin<br>100 Mbps|Cythin.com|[parrot.mirror.cythin.com/parrot](https://parrot.mirror.cythin.com/parrot)|<sub>deb https://parrot.mirror.cythin.com/parrot parrot main contrib non-free</sub>|
|France<br>iriseden<br>/|iriseden|[parrot-mirror.iriseden.eu](https://parrot-mirror.iriseden.eu)|<sub>deb https://parrot-mirror.iriseden.eu parrot main contrib non-free</sub>|
|Hungary<br>quantum-mirror<br>700 Mbps|quantum-mirror.hu|[quantum-mirror.hu/mirrors/pub/parrot](https://quantum-mirror.hu/mirrors/pub/parrot)|<sub>deb https://quantum-mirror.hu/mirrors/pub/parrot parrot main contrib non-free</sub>|
|Turkey<br>EB<br>100 Mbps|EB|[turkey.archive.parrotsec.org/parrot](http://turkey.archive.parrotsec.org/parrot)|<sub>deb http://turkey.archive.parrotsec.org/parrot/ parrot main contrib non-free</sub>|
|Estonia<br>cspacehosting<br>/|cspacehosting|[mirror.cspacehostings.com/parrotsec](https://mirror.cspacehostings.com/parrotsec)|<sub>deb https://mirror.cspacehostings.com/parrotsec parrot main contrib non-free</sub>|
|Russia<br>Yandex<br>1 Gbps|Yandex|[mirror.yandex.ru/mirrors/parrot](http://mirror.yandex.ru/mirrors/parrot)|<sub>deb https://mirror.yandex.ru/mirrors/parrot/ parrot main contrib non-free</sub>|
|Russia<br>Truenetwork<br>10 Gbps|Truenetwork|[mirror.truenetwork.ru/parrot](http://mirror.truenetwork.ru/parrot)|<sub>deb https://mirror.truenetwork.ru/parrot/ parrot main contrib non-free</sub>|
|Russia<br>surf<br>/|surf|[mirror.surf/parrot](https://mirror.surf/parrot)|<sub>deb https://mirror.surf/parrot parrot main contrib non-free</sub>|
|Ukraine<br>comsys<br>1 Gbps|KPI (National Technical University of Ukraine - Comsys)|[mirrors.comsys.kpi.ua/parrot](http://mirrors.comsys.kpi.ua/parrot)|<sub>only ISO files are mirrored</sub>|


### APAC ###
Asia y Pacífico

| Ubicación<br>Mirror ID<br>Ancho de banda| Nombre de proveedor | URL | Cadena de configuración APT |
|:--------------------------------------|:---------------:|:-----|:-------------------|
|Bangladesh<br>Amberit<br>1 Gbps|Amberit (formerly Dhakacom)|[mirror.amberit.com.bd/parrotsec](http://mirror.amberit.com.bd/parrotsec)|<sub>deb http://mirror.amberit.com.bd/parrotsec/ parrot main contrib non-free</sub>|
|Taiwan<br>NCHC<br>20 Gbps|NCHC (Free Software Lab)|[free.nchc.org.tw/parrot](http://free.nchc.org.tw/parrot)|<sub>deb http://free.nchc.org.tw/parrot/ parrot main contrib non-free</sub>|
|Singapore<br>0x<br>10 Gbps|0x|[mirror.0x.sg/parrot](http://mirror.0x.sg/parrot)|<sub>deb https://mirror.0x.sg/parrot/ parrot main contrib non-free</sub>|
|China<br>USTC<br>1Gbps CMCC<br>1Gbps Cernet<br>300Mbps ChinaNet|University of Science and Technology of China and USTCLUG|[mirrors.ustc.edu.cn/parrot](http://mirrors.ustc.edu.cn/parrot)|<sub>deb http://mirrors.ustc.edu.cn/parrot parrot main contrib non-free</sub>|
|China<br>TUNA<br>2 Gbps|TUNA (Tsinghua university of Beijing, TUNA association)|[mirrors.tuna.tsinghua.edu.cn/parrot](http://mirrors.tuna.tsinghua.edu.cn/parrot)|<sub>deb https://mirrors.tuna.tsinghua.edu.cn/parrot/ parrot main contrib non-free</sub>|
|China<br>SJTUG<br>2 Gbps|SJTUG (SJTU *NIX User Group)|[mirrors.sjtug.sjtu.edu.cn/parrot](http://mirrors.sjtug.sjtu.edu.cn/parrot)|<sub>deb https://mirrors.sjtug.sjtu.edu.cn/parrot/ parrot main contrib non-free</sub>|
|Japan<br>wasabi-tokyo<br>/|wasabi-tokyo|[s3.ap-northeast-1.wasabisys.com/parrot-tokyo](https://s3.ap-northeast-1.wasabisys.com/parrot-tokyo)|<sub>deb https://s3.ap-northeast-1.wasabisys.com/parrot-tokyo parrot main contrib non-free</sub>|
|New Caledonia<br>Lagoon<br>1 Gbps|Lagoon Networks|[mirror.lagoon.nc/pub/parrot](http://mirror.lagoon.nc/pub/parrot)|<sub>deb http://mirror.lagoon.nc/pub/parrot/ parrot main contrib non-free</sub>|
|Thailand<br>KKU<br>1 Gbps|KKU (Khon Kaen University)|[mirror.kku.ac.th/parrot](http://mirror.kku.ac.th/parrot)|<sub>deb https://mirror.kku.ac.th/parrot/ parrot main contrib non-free</sub>|
|Indonesia<br>Datautama<br>1 Gbps|Datautama (PT. Data Utama Dinamika)|[kartolo.sby.datautama.net.id/parrot](http://kartolo.sby.datautama.net.id/parrot)|<sub>deb http://kartolo.sby.datautama.net.id/parrot/ parrot main contrib non-free</sub>|
|New Zeland<br>Takeshi<br>1 Gbps worldwide<br>10 Gbps New Zeland|Takeshi (D T Consulting Ltd)|[mirrors.takeshi.nz/parrot](https://mirrors.takeshi.nz/parrot/)|<sub>deb https://mirrors.takeshi.nz/parrot parrot main contrib non-free</sub>|
|Sud Corea<br>krmir<br>/|krmir|[mirror.krmir.org/parrot](https://mirror.krmir.org/parrot)|<sub>deb https://mirror.krmir.org/parrot parrot main contrib non-free</sub>|

## Crea tu propio mirror ##

Tú puedes configurar un espejo de archivos Parrot en su servidor para uso personal o público siguiendo los pasos a continuación.


### Asegúrate de tener espacio suficiente ###

Puedes sincronizar todo el repositorio o elegir solo las imágenes ISO.

Asegúrate de tener suficiente espacio libre para alojar un espejo y mantente preparado para futuras actualizaciones a medida que fluctúe el tamaño del archivo.

El tamaño actual del archivo está disponible aquí [archive.parrotsec.org/parrot/misc/archive-size.txt](https://deb.parrotsec.org/parrot/misc/archive-size.txt)


### Elige el servidor ascendente ###

Manejamos varios dominios para los servicios de sincronización de repositorios, te sugerimos que uses `rsync.parrot.sh` para configuraciones automáticas y a prueba de fallas, pero la configuración ascendente se puede ajustar en caso de necesidades específicas.

No dudes en ponerte en contacto con el equipo de Parrot si tiene necesidades específicas de duplicación o limitaciones de ancho de banda. Podemos proporcionarte fuentes ascendentes dedicadas o soporte profesional para tu espejo.

<pre>
Main Mirror Director:
    rsync.parrot.sh

Zonas Globales (leer las notas):
    EMEA:
        emea.rsync.parrot.sh
    NCSA:
        ncsa.rsync.parrot.sh
    APAC:
        apac.rsync.parrot.sh
</pre>

Es posible que los archivos individuales no estén disponibles o se reemplacen de vez en cuando.

`rsync.parrot.sh` se equilibra automáticamente entre todos los espejos disponibles y no le dará tiempos de inactividad.


### Descarga el archivo ###

Si sincronizas todo el archivo con las instrucciones siguientes, NO es necesario que sincronices el archivo ISO. Los archivos ISO están incluidos de forma predeterminada.

#### Sincroniza el repositorio ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot

#### Configura un cronjob ####

Lanza el siguiente comando:

    crontab -e

y agrega el siguiente contenido al archivo crontab:

    */10 * * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot



### Descargar sólo el archivo ISO ###

No sincronices el archivo ISO si ya estás sincronizando el archivo completo con las instrucciones anteriores. Los archivos ISO ya se proporcionan con las instrucciones del párrafo anterior.

Utiliza las siguientes instrucciones si deseas sincronizar sólo los archivos ISO.

#### Sincroniza el repositorio ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot

#### Configura un cronjob ####

Lanza el siguiente comando:

    crontab -e

y agrega el siguiente contenido al archivo crontab:

    30 2 * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot


### Expone tu espejo a través de rsync ###

Tu espejo puede exponerse a través de rsync para permitir que otras personas se sincronicen contigo y permitir que nuestro director de espejo escanee periódicamente tu espejo y realice controles de indexación y estado.

La exposición Rsync es obligatoria para agregar tu espejo a nuestra lista oficial.

Las siguientes instrucciones configurarán rsync y expondrán el archivo parrot de acuerdo con nuestros estándares en un servidor debian / ubuntu. Se requieren ajustes menores para otros sistemas no aptos.

Instala rsync con:

    sudo apt install rsync

Edita /etc/rsyncd.conf con nano:

    sudo nano /etc/rsyncd.conf

Pega las siguientes configuraciones en el archivo de configuración y guárdalo:

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


Habilita el servicio rsync:

    sudo systemctl enable rsync    

Inicia el servicio rsync:

    sudo service rsync start


### Crea tu espejo oficial ###

Si deseas que su espejo se agregue a nuestra lista de espejos oficiales y a nuestros directores espejo, envíanos un email a `team AT parrotsec DOT org`

¡Que te diviertas! :)
