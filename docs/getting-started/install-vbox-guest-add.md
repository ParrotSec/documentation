---
title: 'Installing Virtualbox Guest Additions'
taxonomy:
    category:
        - docs
visible: true
---

# Introduction To Virtualbox Guest Additions

The Guest Additions are designed to be installed inside a virtual machine after the guest operating system has been installed.
They consist of device drivers and system applications that optimize the guest operating system for better performance and usability.
Features Of Virtualbox Guest Additions

    Mouse pointer integration
        Pressing the Host key is no longer required to “free” the mouse from being captured by the guest OS.
    Shared folders
        Shared folders between Host and Parrot.
    Better video support
        While the virtual graphics card which VirtualBox emulates for any guest operating system provides all the basic features, the custom video drivers that are installed with the Guest Additions provide you with extra high and non-standard video modes as well as accelerated video performance.
        (Generally used for changing monitor resolution)
    Seamless windows
        With this feature, the individual windows that are displayed on the desktop of the virtual machine can be mapped on the host's desktop, as if the underlying application was actually running on the host.
    Generic host/guest communication channels
        The Guest Additions enable you to control and monitor guest execution in ways other than those mentioned above. The so-called “guest properties” provide a generic string-based mechanism to exchange data bits between a guest and a host, some of which have special meanings for controlling and monitoring the guest.
    Time synchronization
        Synchronize date and time from host to Parrot.
    Shared clipboard
        Shared clipboard from host to Parrot.


# Method 1 (Easiest)

1. Open a terminal and update your packages list from the repository to retrieve the latest list of available packages

`sudo apt update`



2. Install the Guest Additions from ParrotOS repository with the following command

`sudo apt install -y virtualbox-guest-dkms`




1. When installation is completed, you can reboot your machine with sudo reboot



2. Check if Guest Additions are correctly installed by running sudo /usr/sbin/VBoxService -V


# Method 2 (From ISO)

1. On Virtual Machine menu bar, select Devices > Insert Guest Additions CD image…

2. Login as root by using sudo su, and insert your current user password

3. Enter the CDROM directory by using cd /media/cdrom0/

4. Copy the Guest Additions file to “/root” directory with cp VBoxLinuxAdditions.run ~

5. Enter the “/root” directory with cd ~

6. Give the permission for execute “+x” to “VBoxLinuxAdditions.run” by using chmod +x VBoxLinuxAdditions.run

7. Execute “VBoxLinuxAdditions.run” with ./VBoxLinuxAdditions.run

8. At installation completed, reboot the virtual machine with reboot

&nbsp;

[Using Parrot](https://docs.parrot.sh/info/start/) | [Troubleshooting](https://docs.parrot.sh/trbl/start/) | [Linux Beginner Guide](https://docs.parrot.sh/library/lbg-basics/) | [Home](https://docs.parrot.sh/)