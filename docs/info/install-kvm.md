
&nbsp;

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


[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 