# Systemd #

We are living at a time when systemd has "seized" the vast majority of linux systems. We don't want to enter into a debate about whether systemd is good or bad.

Parrot developers are clear: [Debian and Devuan](https://parrotsec.org/blog/2017-06-13-debian-and-devuan/)

Anyway, if anything changes, it will be in the future. Currently the system has systemd, just like its older sister Debian.

Even so, developers have converted the service scripts to "hook" to systemd, so we can continue to use our beloved "service" and "update-rc.d" scripts.

Anyway, today we will talk about systemd and if there are changes in the distribution, we will update this document.

## Introduction to systemd ##

The system boot and processes are handled by systemd. This program offers us a way to activate resources, demons and other processes, both at the start of the system and duriong execution.

System startup and processes are handled by systemd. This program offers us a way to activate resources, demons and other processes, both at the start of the system and during its execution. Daemons are processes that wait or run in the background performing various tasks. To receive a connection, the daemon uses a socket. This socket can be created by the demon itself or it can be separated from it and created by another process, such as systemd, which applies this socket to the daemon when a connection is established from a client.

A service usually refers to one or more daemons, but by starting or stopping a service you can make a change to the system status (e. g. configuration of network interfaces), which will not necessarily leave a daemon process running.

For many years, the Linux and Unix systems ID 1 process has been the "init" process. This process was responsible for activating other services in our systems.

The frequently used daemons were often booted at system startup with "system V and LSB boot scripts". Less often demons were started on demand as inetd or xinetd.

The **"System V"** system, which as has been said took many (too many?) years with us, had a number of limitations. This is why different starting systems have emerged to try to solve this. Debian (and the vast majority of distributions) have chosen "systemd" as the boot method.

## systemctl and sytemd units ##

The systemctl command is used to manage different types of systemd objects, called units.

We can see a list of the different types of units handled by systemd we can use the instruction "systemctl -t help".

	┌─[root@parrot]─[~]
	└──╼ #systemctl -t help
	Available unit types:
	service
	socket
	busname
	target
	device
	mount
	automount
	swap
	timer
	path
	slice
	scope

Some units are:

\
- "Service" units. They have a ". service" extension and represent the system services. This type of drive is used to boot frequently accessed daemons, such as a web server.
\
- "Socket units". They have the extension ". socket" and represent communication between processes (IPC).
\
- "Path" units. They have the extension ". path" and are used to delay the activation of a service until the Filesystem is active.
\

You can check all units in your system with the "systemctl list-unit-files"instruction. Check how each unit has an extension that tells us what type of object it is.

## Service Statuses ##

The status of a service can be viewed by "systemctl status name. name. type". If the drive type is not specified, systemd will return the service status if there is one with that name.

	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd.service
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-09 15:39:51 CEST; 6 days ago
	 Main PID: 1135 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─1135 /usr/sbin/sshd -D
	
	Oct 16 10:37:10 parrot systemd[1]: Reloading OpenBSD Secure Shell server.
	Oct 16 10:37:10 parrot sshd[1135]: Received SIGHUP; restarting.
	Oct 16 10:37:10 parrot systemd[1]: Reloaded OpenBSD Secure Shell server.
	Oct 16 10:37:10 parrot sshd[1135]: Server listening on 0.0.0.0 port 22.
	Oct 16 10:37:10 parrot sshd[1135]: Server listening on :: port 22.
	Oct 16 10:37:10 parrot systemd[1]: Reloading OpenBSD Secure Shell server.
	Oct 16 10:37:10 parrot sshd[1135]: Received SIGHUP; restarting.
	Oct 16 10:37:10 parrot systemd[1]: Reloaded OpenBSD Secure Shell server.
	Oct 16 10:37:10 parrot sshd[1135]: Server listening on 0.0.0.0 	port 22.
	Oct 16 10:37:10 parrot sshd[1135]: Server listening on :: port 22.


	┌─[root@parrot]─[~]
	└──╼ #systemctl status apache2
	● apache2.service - The Apache HTTP Server
	   Loaded: loaded (/lib/systemd/system/apache2.service; disabled; vendor preset: enabled)
	   Active: inactive (dead)

We can observe the departure of two services. One sshd running and one apache2 stopped.

Several keywords can be observed in the status output of a service:

Word 		Description
-------------------------------------------------------------------------------------------------
loaded			The unit configuration file has been processed.
active (runnig)		Started with one or more processes running
active (exited)		The configuration is successfully completed
active (waiting)	Running but waiting for an event
inactive		Not running
enabled			Will run at system boot
disabled		Will not run at system boot
static			Cannot be activated, but can be initiated by an active unit automatically

## Listing Units with systemctl ##

- View the status of all units

	┌─[root@parrot]─[~]
	└──╼ #systemctl 

- Check the status of the services started

	┌─[root@parrot]─[~]
	└──╼ #systemctl --type=service

- Check the status of a service

	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd 

Although if we look at the output of the "status"option, we can get to know if a service should be started or not at the start and if it is active, we also have several options to see it more easily:

	┌─[root@parrot]─[~]
	└──╼ #systemctl is-active apache2
	inactive
	┌─[✗]─[root@parrot]─[~]
	└──╼ #systemctl is-enabled apache2
	disabled
	┌─[✗]─[root@parrot]─[~]
	└──╼ #systemctl is-enabled sshd
	enabled

- Check failed services

	┌─[✗]─[root@parrot]─[~]
	└──╼ #systemctl --failed --type=service

## Starting and Stopping System Daemons ##

Starting, stopping, reloading and checking the status are common tasks when managing a system.

- To view the status of a service:

	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-09 15:39:51 CEST; 6 days ago
	 Main PID: 1135 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─1135 /usr/sbin/sshd -D

- To check that the process is running:

	┌─[root@parrot]─[~]
	└──╼ #ps -up 1135
	USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
	root      1135  0.0  0.0  71972  5440 ?        Ss   Oct09   0:00 /usr/sbin/sshd -D

- Stop the service and verify its status:

	┌─[root@parrot]─[~]
	└──╼ #systemctl stop sshd
	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: inactive (dead) since Mon 2017-10-16 12:16:30 CEST; 5s ago
	  Process: 1135 ExecStart=/usr/sbin/sshd -D $SSHD_OPTS (code=exited, status=0/SUCCESS)
	 Main PID: 1135 (code=exited, status=0/SUCCESS)

- Start service and view status. The process ID has changed:

	┌─[✗]─[root@parrot]─[~]
	└──╼ #systemctl start sshd
	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-16 12:18:14 CEST; 3s ago
	  Process: 5222 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
	Main PID: 5223 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─5223 /usr/sbin/sshd -D

- Restart the service and check its status:

	┌─[root@parrot]─[~]
	└──╼ #systemctl restart sshd
	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-16 12:19:04 CEST; 2s ago
	  Process: 5230 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
	 Main PID: 5231 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─5231 /usr/sbin/sshd -D

- Reload a service without stopping it, for example to read a change in its configuration. In this case the process ID will not change:

	┌─[root@parrot]─[~]
	└──╼ #systemctl reload sshd
	┌─[root@parrot]─[~]
	└──╼ #systemctl status sshd
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-16 12:19:04 CEST; 2min 8s ago
	  Process: 5241 ExecReload=/bin/kill -HUP $MAINPID (code=exited, status=0/SUCCESS)
	  Process: 5240 ExecReload=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
	  Process: 5230 ExecStartPre=/usr/sbin/sshd -t (code=exited, status=0/SUCCESS)
	 Main PID: 5231 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─5231 /usr/sbin/sshd -D

## Enabling and Disabling System Daemons at Startup ##

Services are booted at system startup when creating links in the correct systemd directories. These links can be created and/or deleted with the following systemctl commands.

- Disable a service at startup and check its status:

	┌─[root@parrot]─[~]
	└──╼ #systemctl disable ssh
	Synchronizing state of ssh.service with SysV service script with /lib/systemd/systemd-sysv-install.
	Executing: /lib/systemd/systemd-sysv-install disable ssh
	insserv: warning: current start runlevel(s) (empty) of script `ssh' overrides LSB defaults (2 3 4 5).
	insserv: warning: current stop runlevel(s) (2 3 4 5) of script `ssh' overrides LSB defaults (empty).
	Removed /etc/systemd/system/sshd.service.
	┌─[root@parrot]─[~]
	└──╼ #systemctl status ssh
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; disabled; vendor preset: enabled)
	   Active: active (running) since Mon 2017-10-16 12:19:04 CEST; 7min ago
	 Main PID: 5231 (sshd)
	    Tasks: 1 (limit: 4915)
	   CGroup: /system.slice/ssh.service
	           └─5231 /usr/sbin/sshd -D

- Enable a startup service and check its status:

	┌─[root@parrot]─[~]
	└──╼ #systemctl enable ssh
	Synchronizing state of ssh.service with SysV service script with /lib/systemd/systemd-sysv-install.
	Executing: /lib/systemd/systemd-sysv-install enable ssh
	insserv: warning: current start runlevel(s) (empty) of script `ssh' overrides LSB defaults (2 3 4 5).
		insserv: warning: current stop runlevel(s) (2 3 4 5) of script `ssh' overrides LSB defaults (empty).
	Created symlink /etc/systemd/system/sshd.service → /lib/systemd/system/ssh.service.
	┌─[root@parrot]─[~]
	└──╼ #systemctl status ssh
	● ssh.service - OpenBSD Secure Shell server
	   Loaded: loaded (/lib/systemd/system/ssh.service; enabled; vendor preset: enabled)
	  Active: active (running) since Mon 2017-10-16 12:19:04 CEST; 8min ago
	Main PID: 5231 (sshd)
	   Tasks: 1 (limit: 4915)
	  CGroup: /system.slice/ssh.service
	          └─5231 /usr/sbin/sshd -D

## Summary of systemctl Commands ##

	Command:						Task:
-----------------------------------------------------------------------
	systemctl status UNIT		View details of a unit
	systemctl stop UNIT			Stop a service
	systemctl start UNIT		Start a service
	systemctl restart UNIT		Restart a service
	systemctl reload UNIT		Reload a service
	systemctl enable UNIT		Enable a startup service
	systemctl disable UNIT		Disables a startup service

## References ##

Pages: man init(1), systemd(1), systemctl(1).

There are many "man" pages in our system. In this case, the output of "apropos" is overwhelming:

	┌─[root@parrot]─[~]
	└──╼ #apropos systemd
	30-systemd-environment-d-generator (8) - Load variables specified by environment.d
	deb-systemd-helper (1p) - subset of systemctl for machines not running systemd
	deb-systemd-invoke (1p) - wrapper around systemctl, respecting policy-rc.d
	init (1)             - systemd system and service manager
	journalctl (1)       - Query the systemd journal
	loginctl (1)         - Control the systemd login manager
	lvm2-activation-generator (8) - generator for systemd units to activate LVM2 volumes on boot
	pam_systemd (8)      - Register user sessions in the systemd login manager
	systemctl (1)        - Control the systemd system and service manager
	systemd (1)          - systemd system and service manager
	...
	...
	...