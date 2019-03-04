# Virtual Machines

## Docker

#### Parrotsec/Parrot-core

**Official Parrot Security Base system without tools.**

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

**Official Parrot Security image with basic security tools.**

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

### QubesOS

There are three ways to install ParrotSec GNU/Linux on QUbesOS for now.

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


#### (Optional)Install the penetraton testing tools
At this point you should have a working template and you can install the tools you need.

1. Resize the template disk image if you plan on installing the full ParrotSec distribution. For example to install parrot-tools-full you must grow the size of the VM system from 10GB to at least 20GB.

2. Install ParrotSec penetration testing tools:
```bash
    [user@parrotsec ~]$ sudo apt-get install parrot-tools-full
```

(Optional) Customise the template’s home directory (e.g. install your licensed copy of Burp Suite Professional)

#### Use the TemplateVM
The template is ready to be used. You can now spin up AppVMs based on the parrotsec template.

### KVM

KVM is a full virtualization solution for Linux on x86 (64-bit included) hardware containing virtualization extensions (Intel VT or AMD-V). It consists of a loadable kernel module, kvm.ko, that provides the core virtualization infrastructure and a processor specific module, kvm-intel.ko or kvm-amd.ko.

#### Installation

It is possible to install only QEMU and KVM for a very minimal setup, but most users will also want libvirt for a convenient configuration and management of the virtual machines (libvirt-daemon-system - libvirt, virt-manager - a GUI for libvirt).
Open your terminal and write the following command: 
```bash
   apt install qemu-kvm libvirt-clients qemu-utils libvirt-daemon-system
```

The daemon libvirt-bin daemon will start automatically at boot time and load the appropriate kvm modules, kvm-amd or kvm-intel, which are shipped with the Linux kernel Debian package. If you intend to create VMs from the command-line, install virtinst.

In order to be able to manage virtual machines as regular user, that user needs to be added to some groups. 
Type the following command:
```bash
    adduser <user> libvirt
    adduser <user> libvirt-qemu
```

You should then be able to list your domains ("domain" is a virtual machine managed by libvirt): 
```bash 
    virsh list --all
```

#### Connecting to libvirt

By default, if virsh is run as a normal user it will connect to libvirt using qemu:///session URI string. This URI allows virsh to manage only the set of VMs belonging to this particular user. To manage the system set of VMs (i.e., VMs belonging to root) virsh should be ran as root or with qemu:///system URI: 
```bash
    virsh --connect qemu:///system list --all
```

Not to specify the --connect option for every command, the URI string can be set in the LIBVIRT_DEFAULT_URI environment variable: 
```bash 
    export LIBVIRT_DEFAULT_URI='qemu:///system'
```

#### Creating a new guest 

The easiest way to create and manage VM guest is using GUI application Virtual Machine Manager virt-manager.
In alternative, you may create VM guest via command line. Below is example to create a ParrotSec guest with name parrotsec:  
```bash 
    virt-install --virt-type kvm --name parrotsec --memory 512 --cdrom ~/Downloads/Parrot/.iso --disk size=4 --os-variant debian
```

Since the guest has no network connection yet, you will need to use the GUI virt-viewer to complete the install.

You can avoid pulling the ISO by using the --location option. To obtain text console for the installation you can also provide --extra-args "console=ttyS0":
```bash 
    virt-install --virt-type kvm --name squeeze-amd64 \
    --location http://httpredir.debian.org/debian/dists/squeeze/main/installer-amd64/ \
    --extra-args "console=ttyS0" -v --os-variant debiansqueeze \
    --disk size=4 --memory 512
```

#### Setting uo bridge networking

**Between VM guests**

By default, QEMU uses macvtap in VEPA mode to provide NAT internet access or bridged access with other guest. This setup will allow guests to access Internet (if there is an internet connection on the host), but will not allow the host or other machines on the host's LAN to see and access the guests. 

**Between VM host and guest**

Libvirt default network

If you use libvirt to manage your VMs, libvirt provides a NATed bridged network named "default" that allows the host to communicate with the guests. This network is available only for the system domains (that is VMs created by root or using the qemu:///system connection URI). VMs using this network end up in 192.168.122.1/24 and DHCP is provided to them via dnsmasq. This network is not automatically started. To start it use: 
```bash 
     virsh --connect=qemu:///system net-start default
```

To make the default network start automatically use:
```bash 
    virsh --connect=qemu:///system net-autostart default
```

In order for things to work this way you need to have the recommended packages dnsmasq-base, bridge-utils and iptables installed. 

**Manual bridging**

To let communications between VM host and VM guests, you may setup a macvlan bridge on top of a dummy interface similar as below. After the configuration, you can set using interface dummy0 (macvtap) in bridged mode as the network configuration in VM guests configuration. 
```bash 
    modprobe dummy
    ip link add dummy0 type dummy
    ip link add link dummy0 macvlan0 type macvlan mode bridge
    ifconfig dummy0 up
    ifconfig macvlan0 192.168.1.2 broadcast 192.168.1.255 netmask 255.255.255.0 up
```
**Between VM host.guests and the world**

In order to let communications between host, guests and outside world, you may [set up a bridge](https://wiki.debian.org/BridgeNetworkConnections)] and as described at [QEMU page](https://wiki.debian.org/QEMU#Host_and_guests_on_same_network). 

For example, you may modify network configuration file /etc/network/interfaces for setup ethernet interface eth0 to a bridge interface br0 similar as below. After the configuration, you can set using Bridge Interface br0 as the network connection in VM guests configuration. 
```bash 
auto lo
iface lo inet loopback

# The primary network interface
auto eth0

#make sure we don't get addresses on our raw device
iface eth0 inet manual
iface eth0 inet6 manual

#set up bridge and give it a static ip
auto br0
iface br0 inet static
        address 192.168.1.2
        netmask 255.255.255.0
        network 192.168.1.0
        broadcast 192.168.1.255
        gateway 192.168.1.1
        bridge_ports eth0
        bridge_stp off
        bridge_fd 0
        bridge_maxwait 0
        dns-nameservers 8.8.8.8

#allow autoconf for ipv6
iface br0 inet6 auto
        accept_ra 1
```

Once that is correctly configured, you should be able to use the bridge on new VM deployments with:
```bash
    virt-install --network bridge=br0 [...]
```

You can then use the virsh command to start and stop virtual machines. VMs can be generated using virtinst. For more details see the libvirt page. Virtual machines can also be controlled using the kvm command in a similar fashion to QEMU. Below are some frequently used commands: 

Start a configured VM guest "VMGUEST":
```bash 
    virsh start VMGUEST
```

Notify the VM guest "VMGUEST" to graceful shutdown:
```bash 
    virsh shutdown VMGUEST
```

Force the VM guest "VMGUEST" to shutdown in case it is hanged, i.e. graceful shutdown not work: 
```bash 
    virsh destroy VMGUEST
```
**Managing VM guests with a GUI**

On the other hand, if you want to use a graphical UI to manage the VMs, you can use the Virtual Machine Manager virt-manager.

**Automatic guest management on host shutdown/startup**

Guest behavior on host shutdown/startup is configured in /etc/default/libvirt-guests.

This file specifies whether guests should be shutdown or suspended, if they should be restarted on host startup, etc.

First parameter defines where to find running guests. For instance: 
```bash 
# URIs to check for running guests
# example: URIS='default xen:/// vbox+tcp://host/system lxc:///'
URIS=qemu:///system
```

### VMware

Under construction

### QEMU

Under construction
