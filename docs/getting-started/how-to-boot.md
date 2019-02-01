---
title: 'How To Boot'
taxonomy:
    category:
        - docs
visible: true
---

# System boot

So you've downloaded the ISO, you've burned it onto some media, and you're ready to boot Parrot on your computer.

In order to do so, simply insert your boot media in the computer and reboot it. Now ensure your BIOS/UEFI is set to boot your removable media first or you'll pass Parrot and go straight to your harddrive.

 If everything goes well you will be greeted by the Parrot boot screen and soon on to endless fun.

# USB Drive

#### Obsolete computers

If you're using a very old computer you might not be able to boot your system from a USB drive: in this case you will have to use a DVD or another device your computer will recognize as a boot device.

#### New computers

Most laptops allow you to access the booting menu pressing f2 or f12; for most desktop computers press f8; for other kind of devices try pressing esc, f12, f11 or f10. Google your manufacturer to find out what makes your system barf up its BIOS.

#### Option disabled

For some computers, the booting menu may be disabled by default: you will have to access the BIOS settings and enable such option, reboot the computer and press the right key to access the booting menu.

#### Option is not available

Some computers allow you to boot the system from USB drives but don't display a menu to select the booting device. If this is your case you need to access the BIOS settings, go to the booting panel and change the order of which booting devices, placing the USB drive on top of the list. Then simply reboot the computer and the BIOS will choose the USB drive as a booting device.

#### Secure boot

In case you have a computer with Secure Boot enabled, you will have to open the BIOS settings, disable secure boot and set it to legacy boot. If your computer doesn't provide a booting menu, follow the instructions displayed on this page in the section above (“option is not available”). If all else fails, google your make and model. It is likely someone has attempted to install Linux also and might have a solution. 


# DVD

Booting a system from a DVD is much easier and compatible with most machines.


### Regular PC

You can boot a DVD by using the standard procedure for the USB drive as described above.


### MAC

#### DVD method on old MACs

Turn on your computer, insert the DVD straightaway and press the C key as soon as you hear the beep signaling the computer has been turned on. Release the button after a few seconds, as soon as you hear the DVD has started working.

#### Standard method

 Insert the Parrot boot device during the booting step and press the ALT key: keep it pressed until the booting device menu has been displayed.



## What is live mode

The live mode is a special boot mode offered by many linux distributions, including Parrot OS, which allows the users to load a fully working linux environment without the need to install it.

This is possible because the system is not loaded onto the system's hard drive, instead it is loaded into memory (Random Access Memory).

Parrot OS offers the ability to install the OS while in a live environment, use all the tools and even create a persistent live environment.

To create a live boot device please read this [page](create-boot-device.md).
To learn how to boot from the live media read this [page](how-to-boot.md) instead.

## Default username and password
In Parrot OS live environment the default username is "user" and the default password is "toor".