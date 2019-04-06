---
title: 'Installing GPU Drivers'
taxonomy:
    category:
        - docs
visible: true
---

### _**Part 1: AMD Drivers**_
To install the AMD graphics driver open a terminal and type out the following:

```bash
sudo apt install xserver-xorg-video-amdgpu
```

To install AMD firmware type out: 

```bash
sudo apt install firmware-amd-graphics
```

For further reference see [AMD GPU drivers](https://linuxconfig.org/how-to-install-amdgpu-drivers-on-debian-9-stretch-linux)

## Nvidia and/or Nouveau
This tutorial is for those that have two GPUs (laptops primarily), which are an Intel integrated GPU (low-power consumption) and Nvidia GPU (high-power consumption). 

The first thing you want to do is to know whether you prefer to use the _Nouveau_ **open sourced** driver or the _Nvidia_ **proprietary** driver. Conduct your own research to figure out which will best suit your needs.  

For those that choose the _Nouveau driver_ follow the steps in **part 2**. For Nvidia start at **part 3**. 

### _**Part 2:  Nouveau**_

Since the Nouveau driver is already integrated to the kernel, there is only one thing to do: Install _bumblebee_ and _primus_:

```bash
sudo apt update && sudo apt install bumblebee primus
```

To start a program using the nvidia gpu do this:

```bash
optirun _yourprogram_
```

And you are done with the install!   
To test if the install is successful run this:

```bash
optirun glxgears
```
 
You might need to reboot to make it work. 

### **_Part 3: Nvidia-driver_**

For those that choose the proprietary Nvidia driver, two extra steps are needed. 

The first thing to do is blacklist the Nouveau driver, in order to do that, you have to create this file:

```bash
sudo nano /etc/modprobe.d/blacklist-nouveau.conf
```

And write this in the file:
```bash
blacklist nouveau
blacklist lbm-nouveau
options nouveau modeset=0
alias nouveau off 
alias lbm-nouveau off
```
When you are done hit `Ctrl+X` and save the file.

Reboot.

Now you can install the Nvidia driver:

```bash
sudo apt update && sudo apt install nvidia-driver
```

You can install Bumblebee and Primus:

```bash
sudo apt install bumblebee-nvidia primus
```

To run a program using the Nvidia gpu, use optirun:

```bash
optirun _yourprogram_
```

To test your config, you can run this:

```bash
optirun glxgears
```

Also in order to have no screen tearing when using Intel card, you may have to add custom configuration file by running next command:

```bash
sudo nano /usr/share/X11/xorg.conf.d/20-intel.conf
```
And insert next content by copying it with `Ctrl+C` and inserting to nano with `Ctrl+Shift+V`:

```bash
Section "Device"
    Identifier "Intel Graphics"
    Driver "intel"
    Option "TearFree" "true"
EndSection
```

Also append next nvidia configuration file:

```bash
sudo nano /etc/bumblebee/xorg.conf.nvidia
```

And at the end of the file insert next content:

```bash
Section "Screen"
    Identifier "Default Screen"
    Device "DiscreteNvidia"
EndSection
```

And the last step is installing OpenCL driver to make your hashcat and any other GUI programm work:

```bash
sudo apt install -y ocl-icd-libopencl1 nvidia-cuda-toolkit
```

A reboot is needed to make Bumblebee work as well as firejail adjustments.

Written by KileXt, h0tw4t3r

For further information see [here](https://github.com/Bumblebee-Project/Bumblebee/wiki)
and [here](https://community.parrotsec.org/t/bumblebee-fails-to-run-optirun-xorg/5732/3)
If you run into any issues please post in [support](https://community.parrotsec.org/c/support) on the forum.

&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)
