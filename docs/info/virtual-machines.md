# Virtual Machines

## Docker

#### Parrotsec/Parrot-core

Official Parrot Security Base system without tools.

Start a new instance

Public image from Docker Cloud
```bash
    docker run -ti --rm --network host parrotsec/parrot-core
```
Local image from Dockerfile
```bash
    docker run -ti --rm -network host parrot-core
```
Install/Update from Docker Cloud
```bash
    docker pull parrotsec/parrot-core
```
Install/Update from local Dockerfile
```bash
    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t parrot-core[:version] parrot-core
```
#### Parrotsec/Parrot

Official Parrot Security image with basic security tools.

-Start a new instance

-Public image from Docker Cloud
```bash
    docker run -ti --rm --network host parrotsec/parrot
```
Local image from Dockerfile
```bash
    docker run -ti --rm -network host parrot
```
Install/Update from Docker Cloud
```bash
    docker pull parrotsec/parrot
```
Install/Update from local Dockerfile
```bash
    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t parrot[:version] parrot
```
#### Parrotsec/Metasploit

Parrot Security Metasploit bundle.

Install/Update from Docker Cloud
```bash
    docker pull parrotsec/metasploit
```
Install/Update from local Dockerfile
```bash
    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t metasploit[:version] metasploit
```
Start a new instance

Public image from Docker Cloud
```bash
    docker run -ti --network host parrotsec/metasploit
```
Local image from Dockerfile
```bash
    docker run -ti -network host metasploit
```

## Virtual Machines 

### VirtualBox

Download the OVA images from parrotsec.org

1. Open VirtualBox (You can also double click on the .ova file and it will open to the import screen on VirtualBox)

2. File > Import Appliance 

3. Click the Folder icon and select your .ova file 

NOTE: in Parrot Linux the firejail profile limits the directories VirtualBox has access to.

4. Once you have your file, edit to your likeing > click import > agree/disagree with the license > import! 

5. To start Parrot, double-click on parrot-home/parrot-security. 
Parrot will boot to the login greeter with autologin enabled. 

Username: user
Password: toor

(same password for root)
To change password use `passwd` on the account you want to change the password of.

### KVM

Under construction

### VMware

Under construction

### QEMU

Under construction
