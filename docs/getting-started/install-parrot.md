---
title: 'Install Parrot'
taxonomy:
    category:
        - docs
visible: true
---

# Parrot Images

## Security/Home/Workstation

These images can be installed from removable DVD, USB or SD storage media. For example, they can be used to make a handy Parrot install medium that can be taken anywhere.

The easiest way to prepare the installation media is to download any of the 32-bit or 64-bit Parrot images that will fit on the device and burn it. Of course this will destroy anything already there.

To know how to burn the images, please go to [this link](https://dev.parrotsec.org/parrot/documentation/blob/master/docs/02.getting-started/02.create-boot-device.md).

Some BIOSes can boot USB or SD storage directly or allow to boot temporarily from them, and some cannot. You may need to configure your BIOS to boot from a “Removable Drive” or even a “USB-ZIP” to get it done.

## Netinstall

This image is intended to boot from small storage media (like an old USB drive or CD) and install additional packages over a network; hence the name 'netinst'.

The image has the software components needed to run the installer and the base packages to provide a minimal Parrot system. There are several architectures to select: i386, amd64, arm64 and armhf.

Download whichever type you prefer and burn it. The procedure is the same as described on the above link.

# The Installation Process

## Computer

Once the installer starts the initial screen will appear. Press Enter to boot or read the instructions for other boot methods and parameters.

1. After a while the language selection will show up. Use the arrow keys to pick a language and press Enter to continue. Next the country selection will appear, with the choices including countries of the spoken language. If it's not on the short list, a list of all the countries in the world is available.

2. A keyboard layout will be asked. Choosing the default one is suggested.

3. Now sit back while the installer detects some of the existing hardware, and loads the rest of itself from the media.

4. The installer will try to detect the network hardware and set up networking by DHCP. If the system is not on a network or does not have DHCP then the network can be configured manually.

5. Set up the clock and time zone. The installer will try to contact a time server on the Internet to ensure the clock is set correctly. The time zone is based on the country selected earlier and the installer will only ask to select one if a country has multiple zones.

6. Setting up the clock and time zone is followed by the creation of user accounts. By default a password has to be provided for the “root” (administrator) account and information necessary to create one regular user account. If a password is not specified for the “root” user this account will be disabled but the sudo package will be installed later to enable administrative tasks to be carried out on the new system.

7. Now it is time to partition disks. Automatic partitioning can be done either on an entire drive, or available free space on a drive. This is recommended for new users or anyone in a hurry. If autopartition is not wanted, choose "Manual" from the menu.

8. If there is an existing DOS or Windows partition that has to be preserved, be very careful with automatic partitioning. If manual partitioning is selected, the installer can be used to resize existing FAT or NTFS partitions to create room for the Parrot install: simply select the partition and specify its new size.

9. On the next screen the partition table will be seen, how the partitions will be formatted, and where they will be mounted. Select a partition to modify or delete it. If automatic partitioning was selected, the "Finish" option can be selected and the changes can be written to disk to use what it set up. Remember to assign at least one partition for swap space and to mount a partition on /.

10. Now the installer will format partitions and start to install the base system, which can take a while.

11. The last step is to install a boot loader. If the installer detects other operating systems on the computer, it will add them to the boot menu and let know. By default GRUB will be installed to the master boot record of the first harddrive, which is generally a good choice. That choice can be overridden and install it elsewhere.

12. The installer will now tell that the installation has finished. Remove the media and hit Enter to reboot the machine. It should boot up into the newly installed Parrot system and allow to log in.

## Docker

#### parrotsec/parrot-core

Official Parrot Security Base system without tools.

Start a new instance

Public image from Docker Cloud

    docker run -ti --rm --network host parrotsec/parrot-core

Local image from Dockerfile

    docker run -ti --rm -network host parrot-core

Install/Update from Docker Cloud

    docker pull parrotsec/parrot-core

Install/Update from local Dockerfile

    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t parrot-core[:version] parrot-core

#### parrotsec/parrot

Official Parrot Security image with basic security tools.

Start a new instance

Public image from Docker Cloud

    docker run -ti --rm --network host parrotsec/parrot

Local image from Dockerfile

    docker run -ti --rm -network host parrot

Install/Update from Docker Cloud

    docker pull parrotsec/parrot

Install/Update from local Dockerfile

    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t parrot[:version] parrot

#### parrotsec/metasploit

Parrot Security Metasploit bundle.

Install/Update from Docker Cloud

    docker pull parrotsec/metasploit

Install/Update from local Dockerfile

    git clone https://dev.parrotsec.org/parrot/docker-images && cd docker-images

    docker build -t metasploit[:version] metasploit

Start a new instance

Public image from Docker Cloud

    docker run -ti --network host parrotsec/metasploit

Local image from Dockerfile

    docker run -ti -network host metasploit

## Rpi

#### The Flashing Process

It is recommended to use high speed class SD Cards (Class 10) to flash the image otherwise the process may be slow.

Use Etcher for GNU/Linux, Win32 Disk Imager for Windows or ApplePiBaker for Mac to load the Parrot image onto the SD card.

On a Mac, before plugging in the SD card, run the following in Terminal:

    df -h

This will display a list of all the disks attached to the system. Attach the SD card and run the command again, and note the filesystem name of the SD card (it's the one that wasn't there before). It should look like "/dev/disk2s1", be careful in the next steps, since mixing things up could overwrite the hard drive data.

Now, use the DD command to load the Parrot image onto the card. Use "man dd" to see the rest of the operands for dd.

First, let's unmount the partition with the following command, with "x" being the correct disk number:

    sudo diskutil unmount /dev/diskX

Now Parrot is ready to load. Type, but don't run the command, sudo dd bs=1m if= and enter the location of the Parrot image to load onto the card. Use drag and drop with the disk image into the window to show the file path. After that, type a space, then of=/dev/rdisk and the number of the disk from before.

If there is an "s" after the initial disk number (like rdisk2s1), do not include the "s" or following number. So, "rdisk2s1" should look like "rdisk2." Here's what it should look like altogether:

    sudo dd bs=1m if=LocationOfParrotImage of=/dev/rdiskX

Press enter to begin the process, and note that DD does not provide any on-screen information unless there is an error or it finishes. To view the progress during the transfer, type Ctrl T. Wait for the process to complete. You'll know the process is complete when a readout of bytes transferred over the time the process ran appears.