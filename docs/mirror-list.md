---
title: 'Mirror list'
taxonomy:
    category:
        - docs
visible: true
---

## Introduction
The Parrot project does not only deliver a ready-to-use system in the ISO format, but it also provides a vast amount of additional software that can be installed apart from the official parrot repository.

The Parrot repository is used to provide officially supported software, system updates and security fixes.



&nbsp;




&nbsp;



### The mirrors network

The software in the parrot archive is delivered in form of deb packages, and these packages are served through a vast network of mirror servers that provide the same set of packages distributed all around the world for faster software delivery.

The Parrot system is configured to use the central parrot archive directors. The Parrot directors are special servers that collect all the requests of the end users and redirect them to the geographically nearest download server available for the user who made the request.



&nbsp;




&nbsp;



### Security measures

The Parrot Mirror Network is secured by centralized digital signatures and the mirrors can't inject fake updates.

If a evil mirror tries to inject a fake package, the parrot system will automatically refuse to download and install it, and will raise an alert message.

This security measure implemented in APT (the parrot/debian package manager) is very efficient and reliable because digital signatures are applied offline by the Parrot archive maintainer, and not by the mirror servers, ensuring direct and secure developer-to-user chain of trust.



&nbsp;




&nbsp;




## Configuration and custom setup

The APT package manager uses `/etc/apt/sources.list` and any *.list* file found in the `/etc/apt/sources.list.d/` directory.


&nbsp;




NOTE:

<h4>/etc/apt/sources.list is EMPTY</h4>

<h4>and the default APT configuration is located at /etc/apt/sources.list.d/parrot.list.</h4>


&nbsp;



&nbsp;



&nbsp;



&nbsp;







### Content of /etc/apt/sources.list.d/parrot.list:

    deb http://deb.parrotsec.org/parrot stable main contrib non-free
    #deb-src http://deb.parrotsec.org/parrot stable main contrib non-free



&nbsp;



&nbsp;



## Other mirrors for manual configuration

&nbsp;



&nbsp;



### NCSA
North Central and South Americas

| Location<br>Mirror ID<br>bandwidth | Provider Name | URL | APT config string |
|:----------------------------------|:---------------:|:-----|:-------------------|
|Massachussetts<br>MIT<br>1 Gbps|SIPB MIT|[mirrors.mit.edu/parrot](http://mirrors.mit.edu/parrot/)|<sub>deb http://mirrors.mit.edu/parrot/ parrot main contrib non-free</sub>|
|New York<br>Clarkson<br>1 Gbps|Clarkson University|[mirror.clarkson.edu/parrot](https://mirror.clarkson.edu/parrot/)|<sub>deb https://mirror.clarkson.edu/parrot/ parrot main contrib non-free</sub>|
|California<br>Berkeley<br>1 Gbps|Berkeley Open Computing Facility|[mirrors.ocf.berkeley.edu/parrot](http://mirrors.ocf.berkeley.edu/parrot)|<sub>deb https://mirrors.ocf.berkeley.edu/parrot/ parrot main contrib non-free</sub>|
|Oregon<br>Osuosl<br>1 Gbps|Oregon State University - Open Source Lab|[ftp.osuosl.org/pub/parrotos](https://ftp.osuosl.org/pub/parrotos)|<sub>deb https://ftp.osuosl.org/pub/parrotos parrot main contrib non-free</sub>|

| Location<br>Mirror ID<br>bandwidth | Provider Name | URL | APT config string |
|:----------------------------------|:---------------:|:-----|:-------------------|
|Ecuador<br>CEDIA<br>100 Mbps|RED CEDIA (National research and education center of Ecuador)|[mirror.cedia.org.ec/parrot](http://mirror.cedia.org.ec/parrot)|<sub>deb https://mirror.cedia.org.ec/parrot/ parrot main contrib non-free</sub>|
|Ecuador<br>UTA<br>100 Mbps|UTA (Universidad Técnica de ambato)|[mirror.uta.edu.ec/parrot](http://mirror.uta.edu.ec/parrot)|<sub>deb https://mirror.uta.edu.ec/parrot/parrot main contrib non-free<</sub>|
|Brazil<br>USP<br>1 Gbps|University of Sao Paulo|[sft.if.usp.br/parrot](http://sft.if.usp.br/parrot)|<sub>deb http://sft.if.usp.br/parrot/ main contrib non-free</sub>|
|Ecuador<br>UEB<br>100 Mbps|UEB (Universidad Estatal de Bolivar)|[mirror.ueb.edu.ec/parrot](http://mirror.ueb.edu.ec/parrot)|<sub>deb https://mirror.ueb.edu.ec/parrot/ parrot main contrib non-free</sub>|



### EMEA
Europe Middle East and Asia

| Location<br>Mirror ID<br>bandwidth | Provider Name | URL | APT config string |
|:----------------------------------|:---------------:|:-----|:-------------------|
|Italy<br>GARR<br>10 Gbps|GARR Consortium (Italian Research & Education Network)|[parrot.mirror.garr.it/mirrors/parrot](http://parrot.mirror.garr.it/mirrors/parrot)|<sub>deb https://parrot.mirror.garr.it/mirrors/parrot/ parrot main contrib non-free</sub>|
|Germany<br>Halifax<br>20 Gbps|RWTH-Aachen (Halifax students group)|[ftp.halifax.rwth-aachen.de/parrotsec](http://ftp.halifax.rwth-aachen.de/parrotsec)|<sub>deb https://ftp.halifax.rwth-aachen.de/parrotsec/ parrot main contrib non-free</sub>|
|Germany<br>Esslingen<br>10 Gbps|Esslingen (University of Applied Sciences)|[ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org](http://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org)|<sub>deb https://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org/ parrot main contrib non-free</sub>|
|Netherland<br>NLUUG<br>10 Gbps| Nluug |[ftp.nluug.nl/os/Linux/distr/parrot](http://ftp.nluug.nl/os/Linux/distr/parrot)|<sub>deb https://ftp.nluug.nl/os/Linux/distr/parrot/ parrot main contrib non-free</sub>|
|Sweden<br>UMU<br>20 Gbps|ACC UMU (Academic Computer Club, Umea University)|[ftp.acc.umu.se/mirror/parrotsec.org/parrot](http://ftp.acc.umu.se/mirror/parrotsec.org/parrot)|<sub>deb https://ftp.acc.umu.se/mirror/parrotsec.org/parrot/ parrot main contrib non-free</sub>|
|Greece<br>UOC<br>1 Gbps|UoC (University of Crete - Computer Center)|[ftp.cc.uoc.gr/mirrors/linux/parrot](http://ftp.cc.uoc.gr/mirrors/linux/parrot)|<sub>deb https://ftp.cc.uoc.gr/mirrors/linux/parrot/ parrot main contrib non-free</sub>|
|Belgium<br>Belnet<br>10 Gbps|Belnet (The Belgian National Research)|[ftp.belnet.be/archive.parrotsec.org](http://ftp.belnet.be/mirror/archive.parrotsec.org)|<sub>deb http://ftp.belnet.be/mirror/archive.parrotsec.org/ parrot main contrib non-free</sub>|
|Spain<br>Osluz<br>1 Gbps|Osluz (Oficina de software libre de la Universidad de Zaragoza)|[matojo.unizar.es/parrot](http://matojo.unizar.es/parrot)|<sub>deb http://matojo.unizar.es/parrot/ parrot main contrib non-free</sub>|
|Portugal<br>UP<br>1 Gbps|U.Porto (University of Porto)|[mirrors.up.pt/parrot](http://mirrors.up.pt/parrot)|<sub>deb https://mirrors.up.pt/parrot/ parrot main contrib non-free</sub>|
|Denmark<br>Dotsrc<br>10 Gbps|Dotsrc (Aalborg university)|[mirrors.dotsrc.org/parrot](http://mirrors.dotsrc.org/parrot)|<sub>deb https://mirrors.dotsrc.org/parrot/ parrot main contrib non-free</sub>|
|Hungary<br>quantum-mirror<br>200Mbps|quantum-mirror.hu|[quantum-mirror.hu/mirrors/pub/parrot](https://quantum-mirror.hu/mirrors/pub/parrot)|<sub>deb https://quantum-mirror.hu/mirrors/pub/parrot parrot main contrib non-free</sub>|
|Turkey<br>EB<br>100 Mbps|EB|[turkey.archive.parrotsec.org/parrot](http://turkey.archive.parrotsec.org/parrot)|<sub>deb http://turkey.archive.parrotsec.org/parrot/ parrot main contrib non-free</sub>|
|Russia<br>Yandex<br>1 Gbps|Yandex|[mirror.yandex.ru/mirrors/parrot](http://mirror.yandex.ru/mirrors/parrot)|<sub>deb https://mirror.yandex.ru/mirrors/parrot/ parrot main contrib non-free</sub>|
|Russia<br>Truenetwork<br>10 Gbps|Truenetwork|[mirror.truenetwork.ru/parrot](http://mirror.truenetwork.ru/parrot)|<sub>deb https://mirror.truenetwork.ru/parrot/ parrot main contrib non-free</sub>|
|Iran<br>ASIS<br>1 Gbps|ASIS|[parrot.asis.io](http://parrot.asis.io)|<sub>deb http://parrot.asis.io/ parrot main contrib non-free</sub>|


### APAC
Asia and Pacific

| Location<br>Mirror ID<br>bandwidth| Provider Name | URL | APT config string |
|:--------------------------------------|:---------------:|:-----|:-------------------|
|Bangladesh<br>Amberit<br>1 Gbps|Amberit (formerly Dhakacom)|[mirror.amberit.com.bd/parrotsec](http://mirror.amberit.com.bd/parrotsec)|<sub>deb http://mirror.amberit.com.bd/parrotsec/ parrot main contrib non-free</sub>|
|Taiwan<br>NCHC<br>20 Gbps|NCHC (Free Software Lab)|[free.nchc.org.tw/parrot](http://free.nchc.org.tw/parrot)|<sub>deb http://free.nchc.org.tw/parrot/ parrot main contrib non-free</sub>|
|Singapore<br>0x<br>10 Gbps|0x|[mirror.0x.sg/parrot](http://mirror.0x.sg/parrot)|<sub>deb https://mirror.0x.sg/parrot/ parrot main contrib non-free</sub>|
|China<br>USTC<br>1Gbps CMCC<br>1Gbps Cernet<br>300Mbps ChinaNet|University of Science and Technology of China and USTCLUG|[mirrors.ustc.edu.cn/parrot](http://mirrors.ustc.edu.cn/parrot)|<sub>deb http://mirrors.ustc.edu.cn/parrot parrot main contrib non-free</sub>|
|China<br>TUNA<br>2 Gbps|TUNA (Tsinghua university of Beijing, TUNA association)|[mirrors.tuna.tsinghua.edu.cn/parrot](http://mirrors.tuna.tsinghua.edu.cn/parrot)|<sub>deb https://mirrors.tuna.tsinghua.edu.cn/parrot/ parrot main contrib non-free</sub>|
|China<br>SHU<br>2 Gbps|SHU(Shanghai University)|[mirrors.shu.edu.cn/parrot](http://mirrors.shu.edu.cn/parrot)|<sub>deb https://mirrors.shu.edu.cn/parrot/ parrot main contrib non-free</sub>|
|China<br>SJTUG<br>2 Gbps|SJTUG (SJTU *NIX User Group)|[mirrors.sjtug.sjtu.edu.cn/parrot](http://mirrors.sjtug.sjtu.edu.cn/parrot)|<sub>deb https://mirrors.sjtug.sjtu.edu.cn/parrot/ parrot main contrib non-free</sub>|
|New Caledonia<br>Lagoon<br>1 Gbps|Lagoon Networks|[mirror.lagoon.nc/pub/parrot](http://mirror.lagoon.nc/pub/parrot)|<sub>deb http://mirror.lagoon.nc/pub/parrot/ parrot main contrib non-free</sub>|
|Thailand<br>KKU<br>1 Gbps|KKU (Khon Kaen University)|[mirror.kku.ac.th/parrot](http://mirror.kku.ac.th/parrot)|<sub>deb https://mirror.kku.ac.th/parrot/ parrot main contrib non-free</sub>|
|Indonesia<br>Datautama<br>1 Gbps|Datautama (PT. Data Utama Dinamika)|[kartolo.sby.datautama.net.id/parrot](http://kartolo.sby.datautama.net.id/parrot)|<sub>deb http://kartolo.sby.datautama.net.id/parrot/ parrot main contrib non-free</sub>|


## Make your own mirror

You can set up a Parrot archive mirror on your server for personal or public usage by following the steps below.


### Make sure to have enough free space

You can sync the entire repository or pick just the ISO images.

Make sure to have enough free space to host a mirror, and be ready for future upgrades as the archive size fluctuates.

The current archive size is available here [archive.parrotsec.org/parrot/misc/archive-size.txt](https://archive.parrotsec.org/parrot/misc/archive-size.txt)


### Choose the upstream server

We handle several domains for repository syncing services, we suggest to use `archive.parrotsec.org` for automatic and failproof setups, but upstream settings can be adjusted in case of specific needs.

Feel free to contact the Parrot team if you have specific mirroring needs or bandwidth limitations. We can provide you dedicated upstream sources or professional support for your mirror.

<pre>
Main Mirror Director:
    archive.parrotsec.org

Global Zones:
    EMEA:
        emea.archive.parrotsec.org
    NCSA:
        ncsa.archive.parrotsec.org
    APAC:
        apac.archive.parrotsec.org

Individual Masters:
    archive1 france:
        archive1.parrotsec.org
    archive2 canada:
        archive2.parrotsec.org
    archive3 france:
        archive3.parrotsec.org
    archive4 poland:
        archive4.parrotsec.org
</pre>

Single archives may be unavailable or replaced form time to time.

`archive.parrotsec.org` is automatically balanced between all the available mirrors and will give you zero downtimes.


### Download the archive

If you sync the entire archive with the below instructions, you do NOT need to synchronize the ISO archive.

ISO files are included by default!

#### Sync the repository

<pre>rsync -Pahv --delete-after rsync://archive.parrotsec.org:/parrot-iso /var/www/html/parrot</pre>

#### Configure a cronjob

launch the following command:

`crontab -e`

and add the following content to the crontab file:

`*/10 * * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://archive.parrotsec.org:/parrot-iso /var/www/html/parrot'`



### Download the ISO archive only

Do not sync the ISO archive if you are already synchronizing the full archive with the above instructions.

ISO files are already provided with the instructions in the precedent paragraph.

use the following instructions if you want to sync only the ISO files.

#### Sync the repository

<pre>rsync -Pahv --delete-after rsync://archive.parrotsec.org:/parrot-iso /var/www/html/parrot</pre>

#### Configure a cronjob

launch the following command:

`crontab -e`

and add the following content to the crontab file:

`30 2 * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://archive.parrotsec.org:/parrot /var/www/html/parrot-iso'`


### Expose your mirror via rsync

Your mirror can be exposed via rsync to allow other people to sync from you and to allow our mirror director to periodically scan your mirror and perform indexing and health checks.

Rsync exposure is mandatory to add your mirror to our official list.

The following instructions will set up rsync and expose the parrot archive in compliance with our standards on a debian/ubuntu server. Minor adjustments are required for other non-apt systems.

install rsync with:
`sudo apt install rsync`

edit /etc/rsyncd.conf with nano:
`sudo nano /etc/rsyncd.conf`

paste the following settings in the config file and save it:

----

<pre>
[parrot]
        comment = Parrot OS - full archive [archive.parrotsec.org/parrot]
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
        comment = Parrot OS - ISO files only [archive.parrotsec.org/parrot-iso]
        path = /var/www/html/parrot/
        exclude = pool dists
        hosts allow = *
        list=true
        uid=www-data
        gid=www-data
        read only = yes
        use chroot=yes
        dont compress
</pre>

----

Enable the rsync service:
`sudo systemctl enable rsync`

Start the rsync service:
`sudo service rsync start`



### Make your mirror official

If you want your mirror to be added to our official mirrors list and to our mirror directors, contact us with the following email: team AT parrotsec DOT org



have fun :)
