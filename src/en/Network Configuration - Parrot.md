# Network Manager #

In Parrot, the network interfaces configuration is handed by means of a system daemon called NetworkManager. To check if we have activated NetworkManager you got to write thenext command, and must show the next output:

	┌─[root@parrot]─[~]
	└──╼ #systemctl status NetworkManager
	● NetworkManager.service - Network Manager
	Loaded: loaded (/lib/systemd/system/NetworkManager.service; enabled; vendor preset: enabled)
	Active: active (running) since Mon 2017-10-09 15:39:51 CEST; 6 days ago
		 Docs: man:NetworkManager(8)
	 Main PID: 1010 (NetworkManager)
	    Tasks: 3 (limit: 4915)
	   CGroup: /system.slice/NetworkManager.service
	           └─1010 /usr/sbin/NetworkManager --no-daemon

For Network Manager:

- A "device" is a network interface.
- A "connection" is a collection of parameters that can be configured for a "device".
- Only one connection can be activated for each "device" at a time.
- Each connection has a name or ID that identifies it.
- The connections and configurations are saved in /etc/NetworkManager/system-connections, in a file with the name of the connection.

We can use the **nmcli** utility to create and edit connections from the command line.

The command "nmcli dev status" will show us the network interfaces status:

	┌─[root@parrot]─[~]
	└──╼ #nmcli dev status
	DEVICE	  TYPE		  STATE		   CONNECTION         
	eth0	ethernet	connected  	Wired connection 1 
	lo		loopback	unmanaged	--

The command "nmcli con show" will show us a list of all the connections. To list only active connections we will add the --active option:

	┌─[root@parrot]─[~]
	└──╼ #nmcli con show
	NAME                UUID                                  TYPE            DEVICE 
	Wired connection 1  c0277ac0-d15c-3835-b31d-24d0518e7359  802-3-ethernet  eth0 

The command "ip addr show" shows the current configuration of our network interfaces. To show just one of the interfaces, we must add the name of our interface as the last argument of the command:

┌─[root@parrot]─[~]
└──╼ #ip addr show eth0
	2: eth0: <BROADCAST,MULTICAST,UP

	(1),LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000

	(2) link/ether 52:54:00:fc:b0:e2 brd ff:ff:ff:ff:ff:ff

	(3) inet 10.0.200.91/24 brd 10.0.200.255 scope global eth0
		valid_lft forever preferred_lft forever

	(4) inet6 fe80::b601:aab4:1422:f537/64 scope link 
		valid_lft forever preferred_lft forever

- (1) UP. An active interface that is raised
- (2) link / ether. This line shows the hardware address (MAC) of the device
- (3) inet. Here we see the IPV4 address
- (4) inet6. Here we see the IPV6 address

## Adding a network connection ##

The command "nmcli con add" is used to add new network connections. In the coming example it is assumed that the name of the connection to be added is not being used.

The following command will add a new connection (con_dhcp) for our eth0 interface, which will obtain the network information using DHCP and will auto-connect at the start of the system. Next we will check its configuration from the nmcli itself as if looking at its configuration file:

┌─[root@parrot]─[~]
└──╼ #nmcli con add con-name con_dhcp type ethernet ifname eth0
Connection 'con_dhcp' (717ca962-bcd7-4371-b1bd-9a8eb6531244) successfully added.    

	┌─[root@parrot]─[~]
	└──╼ #nmcli con show con_dhcp 
	connection.id:                          con_dhcp
	connection.uuid:                        717ca962-bcd7-4371-b1bd-9a8eb6531244
	connection.stable-id:                   --
	connection.interface-name:              eth0
	connection.type:                        802-3-ethernet
	connection.autoconnect:                 yes
	connection.autoconnect-priority:        0
	connection.autoconnect-retries:         -1 (default)
	connection.timestamp:                   0
	connection.read-only:                   no
	connection.permissions:                 --
	connection.zone:                        --
	connection.master:                      --
	connection.slave-type:                  --
	connection.autoconnect-slaves:          -1 (default)
	connection.secondaries:                 --
	connection.gateway-ping-timeout:        0
	connection.metered:                     unknown
	connection.lldp:                        -1 (default)
	802-3-ethernet.port:                    --
	802-3-ethernet.speed:                   0
	802-3-ethernet.duplex:                  --
	802-3-ethernet.auto-negotiate:          no
	802-3-ethernet.mac-address:             --
	802-3-ethernet.cloned-mac-address:      --
	802-3-ethernet.generate-mac-address-mask:--
	802-3-ethernet.mac-address-blacklist:   --
	802-3-ethernet.mtu:                     auto
	802-3-ethernet.s390-subchannels:        --
	802-3-ethernet.s390-nettype:            --
	802-3-ethernet.s390-options:            --
	802-3-ethernet.wake-on-lan:             1 (default)
	802-3-ethernet.wake-on-lan-password:    --
	ipv4.method:                            auto
	ipv4.dns:                               --
	ipv4.dns-search:                        --
	ipv4.dns-options:                       (default)
	ipv4.dns-priority:                      0
	ipv4.addresses:                         --
	ipv4.gateway:                           --
	ipv4.routes:                            --
	ipv4.route-metric:                      -1
	ipv4.ignore-auto-routes:                no
	ipv4.ignore-auto-dns:                   no
	ipv4.dhcp-client-id:                    --
	ipv4.dhcp-timeout:                      0
	ipv4.dhcp-send-hostname:                yes
	ipv4.dhcp-hostname:                     --
	ipv4.dhcp-fqdn:                         --
	ipv4.never-default:                     no
	ipv4.may-fail:                          yes
	ipv4.dad-timeout:                       -1 (default)
	ipv6.method:                            auto
	ipv6.dns:                               --
	ipv6.dns-search:                        --
	ipv6.dns-options:                       (default)
	ipv6.dns-priority:                      0
	ipv6.addresses:                         --
	ipv6.gateway:                           --
	ipv6.routes:                            --
	ipv6.route-metric:                      -1
	ipv6.ignore-auto-routes:                no
	ipv6.ignore-auto-dns:                   no
	ipv6.never-default:                     no
	ipv6.may-fail:                          yes
	ipv6.ip6-privacy:                       -1 (unknown)
	ipv6.addr-gen-mode:                     stable-privacy
	ipv6.dhcp-send-hostname:                yes
	ipv6.dhcp-hostname:                     --
	ipv6.token:                             --
	proxy.method:                           none
	proxy.browser-only:                     no
	proxy.pac-url:                          --
	proxy.pac-script:                       --  
	
	
	┌─[root@parrot]─[~]
	└──╼ #cat /etc/NetworkManager/system-connections/con_dhcp 
	[connection]
	id=con_dhcp
	uuid=717ca962-bcd7-4371-b1bd-9a8eb6531244
	type=ethernet
	interface-name=eth0
	permissions=
	
	[ethernet]
	mac-address-blacklist=
	
	[ipv4]
	dns-search=
	method=auto
	
	[ipv6]
	addr-gen-mode=stable-privacy
	dns-search=
	method=auto

Let's see now an example with a configuration for the same interface eth0, but with an ip address 192.168.0.3/24 and the default gateway 192.168.0.254. We will call the name of the connection con_static.

	+-[root@parrot]-[~]
	+--? #nmcli con add con-name con_static type ethernet ifname eth0 ip4 192.168.0.3/24 gw4 	192.168.0.254
	Connection 'con_static' (12dc18a5-ef1c-4926-8cc7-82cbf0acaa25) successfully added.

## Controlling Network Connections ##

The command "nmcli con uo <connection_name>" will activate the connection "connection_name" in the interface to which this configuration is associated. Remember that the command takes as its argument the name of the connection and not the name of the interface.

	┌─[root@parrot]─[~]
	└──╼ #nmcli con up con_static

The command "nmcli dev disconnect" will disconnect the network interface. This command can be abbreviated in the following way "nmcli dev dis".

	┌─[root@parrot]─[~]
	└──╼ #nmcli dev dis eth0

Use this command to deactivate a network interface.

## Modifying the Network Configuration ##

To check the current configuration of a connection we run "nmcli con show <connection_name>".

	┌─[root@parrot]─[~]
	└──╼ #nmcli con show con_static
	connection.id:                          con_static
	connection.uuid:                        12dc18a5-ef1c-4926-8cc7-82cbf0acaa25
	connection.stable-id:                   --
	connection.interface-name:              eth0
	connection.type:                        802-3-ethernet
	connection.autoconnect:                 yes
	connection.autoconnect-priority:        0
	connection.autoconnect-retries:         -1 (default)
	connection.timestamp:                   0
	connection.read-only:                   no
	connection.permissions:                 --
	connection.zone:                        --
	connection.master:                      --
	connection.slave-type:                  --
	connection.autoconnect-slaves:          -1 (default)
	connection.secondaries:                 --
	connection.gateway-ping-timeout:        0
	connection.metered:                     unknown
	connection.lldp:                        -1 (default)
	802-3-ethernet.port:                    --
	802-3-ethernet.speed:                   0
	802-3-ethernet.duplex:                  --
	802-3-ethernet.auto-negotiate:          no
	802-3-ethernet.mac-address:             --
	802-3-ethernet.cloned-mac-address:      --
	802-3-ethernet.generate-mac-address-mask:--
	802-3-ethernet.mac-address-blacklist:   --
	802-3-ethernet.mtu:                     auto
	802-3-ethernet.s390-subchannels:        --
	802-3-ethernet.s390-nettype:            --
	802-3-ethernet.s390-options:            --
	802-3-ethernet.wake-on-lan:             1 (default)
	802-3-ethernet.wake-on-lan-password:    --
	ipv4.method:                            manual
	ipv4.dns:                               --
	ipv4.dns-search:                        --
	ipv4.dns-options:                       (default)
	ipv4.dns-priority:                      0
	ipv4.addresses:                         192.168.0.3/24
	ipv4.gateway:                           192.168.0.254
	ipv4.routes:                            --
	ipv4.route-metric:                      -1
	ipv4.ignore-auto-routes:                no
	ipv4.ignore-auto-dns:                   no
	ipv4.dhcp-client-id:                    --
	ipv4.dhcp-timeout:                      0
	ipv4.dhcp-send-hostname:                yes
	ipv4.dhcp-hostname:                     --
	ipv4.dhcp-fqdn:                         --
	ipv4.never-default:                     no
	ipv4.may-fail:                          yes
	ipv4.dad-timeout:                       -1 (default)
	ipv6.method:                            auto
	ipv6.dns:                               --
	ipv6.dns-search:                        --
	ipv6.dns-options:                       (default)
	ipv6.dns-priority:                      0
	ipv6.addresses:                         --
	ipv6.gateway:                           --
	ipv6.routes:                            --
	ipv6.route-metric:                      -1
	ipv6.ignore-auto-routes:                no
	ipv6.ignore-auto-dns:                   no
	ipv6.never-default:                     no
	ipv6.may-fail:                          yes
	ipv6.ip6-privacy:                       -1 (unknown)
	ipv6.addr-gen-mode:                     stable-privacy
	ipv6.dhcp-send-hostname:                yes
	ipv6.dhcp-hostname:                     --
	ipv6.token:                             --
	proxy.method:                           none
	proxy.browser-only:                     no
	proxy.pac-url:                          --
	proxy.pac-script:                       --

We can use the command "nmcli con mod <connection_name>" to modify its configuration. The different configurations that we can use can be seen in the nm-settings (5) manual page. For example, imagine that we want ti change the "con-static" connection so that the address 192.168.1.3/24 and the gateway are used in 192.168.1.1, instead of the one we configured previously.

	┌─[root@parrot]─[~]
	└──╼ #nmcli con mod con_static ipv4.addresses "192.168.1.3/24" ipv4.gateway 192.168.1.1

It is important that if we change a DHCP type connection to static, we also modify the ipv4.method parameter from auto to manual.

After the changes we will have to execute "nmcli con reload <connection_name>" so that these take effect.

## Modifying resolv.conf ##

To change the name resolvers, that is those servers that translate name to IP, we can modify the /etc/resolv.conf file. We open this file with our favorite editor and we must check that we have at least one line that starts with nameserver followed by an IP. This IP will indicate the DNS server that we will use.

	┌─[root@parrot]─[~]
	└──╼ #cat /etc/resolv.conf
	# ParrotDNS
	nameserver 92.222.97.145
	nameserver 192.99.85.244
	
	# OpenNIC
	nameserver 185.121.177.177
	
	# Round Robin
	options rotate

Deleting a Network Connection

The command "nmcli con del <connection_name>" will delete the connection that we indicate.

## Modifying our System Name ##

The command "hostname" shows or temporarily changes the name of our system.

	 ┌─[root@parrot]─[~]
	└──╼ #hostname
	parrot

We can modify the file /etc/hostname to change the name of our system.

We can also use the hostnamectl command, with the option set-hostname. "hostnamectl" also help us to check the name of our system currently.

	┌─[root@parrot]─[~]
	└──╼ #hostnamectl set-hostname demo.test.com
	┌─[root@parrot]─[~]
	└──╼ #hostnamectl status
	Static hostname: demo.test.com
	          Icon name: computer-vm
	      	Chassis: vm
	   	     Machine ID: 7c6d78cba9084717ba7d7316bf775376
	       	Boot ID: 8540f57c7203421d86a26995dc2c9293
		 Virtualization: kvm
	   Operating System: Parrot GNU/Linux 3.8 JollyRoger
	             Kernel: Linux 4.12.0-parrot6-amd64
	       Architecture: x86-64

## Video ##

Please do not miss the video of our partner Xc0d3, in which he shows us methods to configure the network. You can see it here:

[https://youtu.be/1HcGUP90eMU](https://youtu.be/1HcGUP90eMU)