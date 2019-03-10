# VERIFY!
# Missing photos

Introduction To Virtualbox Guest Additions

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

Guest Additions Installation(s)
Method 1 (Easiest)

1. Open a terminal and update your packages list from the repository with sudo apt-get update



2. Install the Guest Additions from ParrotOS repository with sudo apt-get install virtualbox-guest-utils
If requested to continue write Y then hit Enter on your keyboard.



3. And install the last package with sudo apt-get install virtualbox-guest-x11



4. When installation is completed, you can reboot your machine with sudo reboot



5. Check if Guest Additions are correctly installed by running sudo /usr/sbin/VBoxService -V


Method 2 (From ISO)

1. On Virtual Machine menu bar, select Devices > Insert Guest Additions CD image…



2. Login as root by using sudo su, and insert your current user password



3. Enter the CDROM directory by using cd /media/cdrom0/



4. Copy the Guest Additions file to “/root” directory with cp VBoxLinuxAdditions.run ~



5. Enter the “/root” directory with cd ~



6. Give the permission for execute “+x” to “VBoxLinuxAdditions.run” by using chmod +x VBoxLinuxAdditions.run



7. Execute “VBoxLinuxAdditions.run” with ./VBoxLinuxAdditions.run



8. At installation completed, reboot the virtual machine with reboot

&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 