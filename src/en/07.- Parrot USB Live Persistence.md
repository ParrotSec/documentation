# Parrot USB Live Persistence #

## Base knowledge ##

Create a common Parrot USB Live Device.

For any doubts, you can follow these guidelines [How to create a boot device](<./06.- How to create a Live boot device.md>)

Remember you have to create **two partitions**, the first containing only the system, so it has to be as great as the ISO image.

The best way to create this first partition is to use the **dd** method.

The second step is to create a second partition formatted in ext4 with persistence as label, this second partition has to contain a `persistence.conf` file containing the following text: `/ union`


*but let's go further*


## First Step ##

Once you’ve downloaded your Parrot iso file, you can use **dd** to copy it over to your USB stick as follows:

**WARNING**. Although the process of imaging Parrot on a USB stick is quite easy, 
we recommend you go through it only once you’ve mastered each and every step of the process:
a simple mistake in the “dd” procedure can result in the destruction of arbitrary partitions. You’ve been warned.

1. Plug your USB device into your Linux computer’s USB port.

2. Check the device path of your USB storage with `lsblk` or with `fdisk -l`.

3. Carefully proceed with the imaging of the Parrot ISO file on the USB device: 
    \

        dd if=parrot-(version).iso of=/dev/sdb

4. Wait until the process ends.


## Second Step ##
### With Gparted ###


5. Open Gparted and select the pendrive device. You will find a first unrecognized partition followed by an empty space.

6. Create a new ext4 partition in the following empty space, it has to be as great as the persistence space you want to give to your Parrot USB drive.

7. Give this new partition the label "persistence"

8. Confirm and wait everything is done

9. Then mount the persistence partiton and create the `persistence.conf` file in it

10. Open the file with a simple text editor, type `/` union and save the file.



It's **done**, now your Parrot USB drive can boot with persistence if you boot it using the persistence label in the boot menu.



----
### From Terminal ###


Create and format an additional partition on the USB stick. In our example, we create a 2 GB persistent partition and create a persistence.conf file on it.

    size=2gb
    iso=parrot-(version).iso

\

    read bytes _ < <(du -bcm $iso |tail -1); echo $bytes

\

    parted /dev/sdb mkpart primary $bytes $size

\

    mkfs.ext4 -L persistence /dev/sdb2 

or 

    e2label /dev/sdb2 persistence

\

    mkdir -p /mnt/parrot_usb

\

    mount /dev/sdb2 /mnt/parrot_usb

\

    echo "/ union" > /mnt/parrot_usb/persistence.conf

\

    umount /dev/sdb2
