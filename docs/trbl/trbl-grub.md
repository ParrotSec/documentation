---
title: 'Troubleshooting GRUB'
taxonomy:
    category:
        - docs
visible: true
---

Occationally grub doesn't seem to work properly because of a Windows update or grub was not properly installed during Parrot's install and so on.

### 1) The first step is to boot live using a bootable USB key of Debian or ParrotOS. Boot on it, and then open a terminal.

### 2) In the terminal type:

```
sudo -i 

fdisk -l
```
The fdisk command will show your partition scheme, you have to identify 2 things (only one for those using legacy instead of uefi)

* The partition that contain the "/" which is the partition where the system is installed.
* The _EFI_ partition  

Let's say my system partition is `/dev/sda2` and my EFI partition is `/dev/sda1`. Your partition "name" might be different (e.g.nvme01 etc), just replace mine with yours in the command shown below. 

### 3) Now you have to mount the partitions 
```
mount /dev/sda1 /mnt
mount --bind /proc /mnt/proc
mount --bind /sys /mnt/sys
mount --bind /dev /mnt/dev
```

Those that have Legacy instead of EFI can go to step 4) 
For EFI there is one extra step: Mount your EFI partition
`mount /dev/sda1 /mnt/boot/efi`

Sometimes errors like this can result: _`mount: /mnt/boot/efi: mount point does not exist.`_ 
To solve it create the efi directory in _`/mnt/boot/`_ using this command:

`mkdir /mnt/boot/efi` 

then try to mount the efi partition again.

4) Now we have to chroot into the system
 
`chroot /mnt`

Now that you are in you can just install the grub by typing the command below (grub-install will ask for the disk, not a partition so don't put any number like this: _sda_ instead of _sda1_

`grub-install /dev/sda`

Then if no errors are found you can just exit by typing:

`exit`

and reboot the system.  Once the system is rebooted, run `update-grub` to be sure that any other OS is detected by the grub.
`sudo update-grub`

Written by KileXt    

If you run into any issues please post in [support](https://community.parrotsec.org/c/support) on the forum.

&nbsp;

[Using Parrot](https://docs.parrotlinux.org/info/start/) | [Troubleshooting](https://docs.parrotlinux.org/trbl/start/) | [Linux Beginner Guide](https://docs.parrotlinux.org/library/lbg-basics/) | [Home](https://docs.parrotlinux.org/)