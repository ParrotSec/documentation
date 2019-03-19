---
title: 'Parrot on QubesOS'
taxonomy:
    category:
        - docs
visible: true
---
### QubesOS

There are two ways to create a ParrotSec GNU/Linux VM on QUbesOS for now.

#### Option 1 - Create an HVM

1. Download any ParrotSec image you want.

2. Create a new HVM.

4. Start the HVM with attached CD/DVD.
```bash
     [user@dom0 ~]$ qvm-start <hvm-name> --cdrom <vm-name>:/home/user/Downloads/<iso-name>.iso
```

#### Option 2 - Build a ParrotSec TemplateVM on top of a Debian TemplateVM

WARNING: This website cannot guarantee that any PGP key you download from the Internet is authentic. Always obtain a trusted key fingerprint via other channels, and always check any key you download against your trusted copy of the fingerprint.

This step is required since by (security) default a TemplateVM do not have a direct Internet connectivity. Users understanding the risks of enabling such access can change this configuration in firewall settings for the TemplateVM.

Note: The prompt on each line indicates where each command should be entered (@dom0, @parrotsec, @xxxx-dvm or @debian-<X>). 

1. Retrieve the official ParrotSec GPG key using a DispVM.
```bash
    [user@xxxx-dvm ~]$ gpg --keyserver hkp://keys.gnupg.net --recv-key 3B3EAB807D70721BA9C03E55C7B39D0362972489
    [user@xxxx-dvm ~]$ gpg --list-keys --with-fingerprint 3B3EAB807D70721BA9C03E55C7B39D0362972489 
    [user@xxxx-dvm ~]$ gpg --export --armor 3B3EAB807D70721BA9C03E55C7B39D0362972489 > parrot-key.asc
```

2. DO N0T TURN OFF THE DISPVM.DO NOT TURN OFF the DispVM, the parrot-key.asc file will be copied to the ParrotSec template in a further step.

3. Make sure the key is the authentic ParrotSec key.

#### Create a ParrotSec TemplateVM.

These instructions will show you how to upgrade a Debian TemplateVM to ParrotSec.

1. (Optional) Check for latest Debian stable template and install it (if not already done)
```bash
    [user@dom0 ~]$ sudo qubes-dom0-update --action="search all" qubes-template-debian
    [user@dom0 ~]$ sudo qubes-dom0-update <latest Debian template>
```

2. Start,update and close your Debian TemplateVM.
```bash
    [user@dom0 ~]$ qvm-start debian-<X>
    [user@dom0 ~]$ qvm-run -a debian-<X> gnome-terminal
    [user@debian-<X> ~]$ sudo apt-get update
    [user@debian-<X> ~]$ sudo apt-get upgrade
    [user@dom0 ~]$ qvm-shutdown debian-<X>
```

3. Clone debian-x TemplateVM
```bash 
    [user@dom0 ~]$ qvm-clone debian-<X> parrotsec
```

4. Check the name of currently used repository in /etc/apt/sources.list and current testing Debian release. Update repository list accordingly
```bash
    [user@parrotsec ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list
    [user@parrotsec ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list.d/qubes-r<X>.list
```
e.g. in this example we update stretch stable repository to buster testing repository
```bash 
    [user@parrotsec ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list
    [user@parrotsec ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list.d/qubes-r<X>.list
```
5. Upgrade parrotsec template to latest Debian testing release
```bash 
    [user@parrotsec ~]$ sudo apt-get update && sudo apt-get dist-upgrade
    [user@parrotsec ~]$ sudo apt-get autoremove
```
Note: During execution of a dist-upgrade command read carefully list of packages to be removed. If it contains qubes-* packages, terminate operation and try to resolve qubes-* packages missing dependencies first.

6. Copy the ParrotSec GPG key from the DispVM to the new template:
```bash
    [user@xxxx-dvm ~]$ qvm-copy-to-vm parrotsec parrot-key.asc
```
Turn off the DispVM.

7. Add the ParrotSec GPG key to the list of keys trusted to authenticate packages:
```bash
    [user@parrotsec ~]$ cat /home/user/QubesIncoming/dispXXX/parrot-key.asc | sudo apt-key add -
```
The above command should return OK In a single line.

8. Attempt an update on the new TemplateVM
```bash 
    [user@parrotsec ~]$ sudo cat <<EOF > /etc/apt/sources.list.d/parrot.list
     # ParrotSec repository
    deb http://deb.parrotsec.org/parrot stable main contrib non-free
    #deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
    EOF
    [user@parrotsec ~]$ sudo apt-get update
    [user@parrotsec ~]$ sudo apt-get dist-upgrade
    [user@parrotsec ~]$ sudo apt-get autoremove
    [user@parrotsec ~]$ sudo apt install parrot-core parrot-archive-keyring parrot-drivers parrot-skel
```

9. Shut down and trim the new TemplateVM
```bash
    [user@dom0 ~]$ qvm-shutdown parrotsec
    [user@dom0 ~]$ qvm-trim-template parrotsec
```

10. Ensure a terminal can be opoened in the new TemplateVM
```bash 
    [user@dom0 ~]$ qvm-run -a parrotsec gnome-terminal
```


#### (Optional)Install the penetration testing tools
At this point you should have a working template and you can install the tools you need.

1. Resize the template disk image if you plan on installing the full ParrotSec distribution. For example to install parrot-tools-full you must grow the size of the VM system from 10GB to at least 20GB.

2. Install ParrotSec penetration testing tools:
```bash
    [user@parrotsec ~]$ sudo apt-get install parrot-tools-full
```

(Optional) Customise the template’s home directory (e.g. install your licensed copy of Burp Suite Professional)

#### Use the TemplateVM
The template is ready to be used. You can now spin up AppVMs based on the parrotsec template.

&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)