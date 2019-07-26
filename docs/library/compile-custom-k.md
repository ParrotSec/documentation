&nbsp;

&nbsp;

NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)

# Recompile the ParrotOS kernel

##  Why compile the kernel

Why would someone need to recompile the ParrotOS kernel.Maybe someones wants the kernel to handle special hardware,maybe optimize the boot time by removing useless drivers,maybe to create a monolithic kernel instead of a modularized one,maybe to run a newer or in development kernel,maybe to add new patches, drivers or kernel features that are not included in the stock ParrotOS kernel.Or maybe just to learn more about Linux kernels. Whatever is the case the follwing guide will show you how to do it.

## Notes/Warnings

By recompiling the kernel you may decrease the security provided by the stock Parrot OS kernel and may lose some functionality. If this procedure harms your computer in any way we are not responsible.

## Prerequisities

Install the following packages:
```bash
sudo apt install build-essential libncurses5-dev fakeroot unxz
```
Next install the source code of the ParrotOS kernel with the following command:
```bash
sudo apt install linux-source-4.19
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following additional packages will be installed:
  linux-config-4.19
Suggested packages:
  libqt4-dev
The following NEW packages will be installed:
  linux-config-4.19 linux-source-4.19
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 107 MB of archives.
After this operation, 107 MB of additional disk space will be used.
Do you want to continue? [Y/n] Y
```
The above steps focuses on the 4.9 version of the Linux kernel. If the version changes so do the nubmers.

After you finish donwloading the source run the following command:
```bash
ls /usr/src/
linux-config-4.19  linux-patch-4.19-rt.patch.xz  linux-source-4.19.tar.xz
```
Notice that the package contains /usr/src/linux-source-4.9.tar.xz, a compressed archive of the kernel sources. You must extract these files in a new directory (not directly under /usr/src/, since there is no need for special permissions to compile a Linux kernel). Instead, ~/kernel/ is more appropriate.
```text
mkdir ~/kernel; cd ~/kernel/
tar -xaf /usr/src/linux-source-4.19.tar.xz
```

## Configure the kernel

When recompiling a more recent version of the kernel (possibly with an additional patch), the configuration will most likely be kept as close as possible to that proposed by ParrotSec. In this case, and rather than reconfiguring everything from scratch, it is sufficient to copy the /boot/config-version file (the version is that of the kernel currently used, which can be found with the uname -r command) into a .config file in the directory containing the kernel sources.
```text
cp /boot/config-4.19.0(press tab 3 times to autocomplete)
```
If you want toi make changess or cofigure everything from scratych you must use the commanbd:
```bash
make menuconfig
```

## BUilding the kernel

Once the kernel configuration is ready, a simple make deb-pkg will generate up to 5 Debian packages: linux-image-version that contains the kernel image and the associated modules, linux-headers-version, which contains the header files required to build external modules, linux-firmware-image-version, which contains the firmware files needed by some drivers (this package might be missing when you build from the kernel sources provided by Debian or Parrot OS), linux-image-version-dbg, which contains the debugging symbols for the kernel image and its modules, and linux-libc-dev, which contains headers relevant to some user-space libraries like GNU glibc. The Linux kernel image is a big build, expect it to take a while to complete. Run the following commands to start building the kernel:
```text
make clean
make deb-pkg LOCALVERSION=-custom KDEB_PKGVERSION=
(makekernelversion)-1
```

## Installation of the kernel

When the build has successfully completed, you can go ahead and install the new custom kernel and reboot your system. Please note that the specific kernel version numbers will vary — in our example, done on a Parrot OS 4.5.1 system, it was 4.19.20. Depending on the current kernel version you’re building, you will need to adjust your commands accordingly.
```text
dpkg -i ../linux-image-4-19.0(and press tab 3 times to autocomplete)
reboot
```
Once your system has rebooted, your new kernel should be running. If things go wrong and your kernel fails to boot successfully, you can still use the Grub menu to boot from the original ParrotOS kernel and fix your issues.

&nbsp;

[Using Parrot](https://docs.parrot.sh/info/start/) | [Troubleshooting](https://docs.parrot.sh/trbl/start/) | [Linux Beginner Guide](https://docs.parrot.sh/library/lbg-basics/) | [Home](https://docs.parrot.sh/)
