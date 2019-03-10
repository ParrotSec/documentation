---
title: 'Parrot Home Installation'
taxonomy:
    category:
        - docs
visible: true
---

# The Installation Process through the installer

Once the installer starts the initial screen will appear. Press Enter to boot or read the instructions for other boot methods and parameters.

1. After a while the language selection will show up. Use the arrow keys to pick a language and press Enter to continue. Next the country selection will appear, with the choices including countries of the spoken language. If it's not on the short list, a list of all the countries in the world is available.

2. A keyboard layout will be asked. Choosing the default one is suggested.

3. Now sit back while the installer detects some of the existing hardware, and loads the rest of itself from the media.

4. The installer will try to detect the network hardware and set up networking by DHCP. If the system is not on a network or does not have DHCP then the network can be configured manually.

5. Set up the clock and time zone. The installer will try to contact a time server on the Internet to ensure the clock is set correctly. The time zone is based on the country selected earlier and the installer will only ask to select one if a country has multiple zones.

6. Setting up the clock and time zone is followed by the creation of user accounts. By default a password has to be provided for the “root” (administrator) account and information necessary to create one regular user account. If a password is not specified for the “root” user this account will be disabled but the sudo package will be installed later to enable administrative tasks to be carried out on the new system.

7. Now it is time to partition disks. Automatic partitioning can be done either on an entire drive, or available free space on a drive. This is recommended for new users or anyone in a hurry. If autopartition is not wanted, choose "Manual" from the menu.

8. If there is an existing DOS or Windows partition that has to be preserved, be very careful with automatic partitioning. If manual partitioning is selected, the installer can be used to resize existing FAT or NTFS partitions to create room for the Parrot install: simply select the partition and specify its new size.

9. On the next screen the partition table will be seen, how the partitions will be formatted, and where they will be mounted. Select a partition to modify or delete it. If automatic partitioning was selected, the "Finish" option can be selected and the changes can be written to disk to use what it set up. Remember to assign at least one partition for swap space and to mount a partition on __/__.

10. The installer will format partitions and start to install the base system, which can take a while.

11. The last step is to install a boot loader. If the installer detects other operating systems on the computer, it will add them to the boot menu and let GRUB know. By default GRUB will be installed to the master boot record of the first harddrive, which is generally a good choice. That choice can be overridden and install it elsewhere. 

12. The installer will now tell that the installation has finished. Remove the media and hit Enter to reboot the machine. It should boot up into the newly installed Parrot system and allow to log in.

### BOOM Done!

&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 