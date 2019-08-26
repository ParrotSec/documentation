---
title: 'Supported Hardware'
taxonomy:
    category:
        - docs
visible: true
---

# What ParrotOS supports (and doesn't)
#### *NOTE: this list is a work in progress and not all inclusive. <br> Please email s1udge AT parrotsec DOT org or leave a comment on the forums [here](https://community.parrotsec.org/t/what-parrot-supports/5674)*

### Hardware
#### Processors
- x86_64 (64bit, not to include IA-64)

Hardware we know it works on:

- Purism systems
- System76 systems
- Dell XPS (most systems)
- MacBook Pro (2013)
- Tongfang GK5CN6Z (Modifications needed see [here](odd-hardware.md))
- Lenovo (Most Systems)
- Lenovo Ideapad 510 (needs modprobe thinkpad-acpi)

---

### Software

Firmware

- Most BIOS/UEFI
- Coreboot

Virtual Machine Emulators and Containers

- Docker
- QEMU
- VirtualBox
- KVM
- QubesOS

Other 

- NVMe
- Netinstall
- Snap
- Flatpak
- Wine
- HiDPi (part of MATE) 
- KDE
- Xfce4
- Dual boot with other systems

Functions enabled by default.

- Firejail
- AppArmor
- uBlock Origin
- Noscript
- Privacy Badger

Functions disabled by default.

- automount

---

### Experimental
Processors

- ARMv7 ([armhf](https://en.wikipedia.org/wiki/ARM_architecture#VFP)) 
- ARMv8 ([arm64](https://en.wikipedia.org/wiki/ARM_architecture#64-bit))

Hardware overall 

- Raspberry Pi 2 & 3
- Orange Pi PC
- Orange Pi Nano
- Pine64 (Rock64, Pinebook, Sopine)

## Not Supported 

- Mobile devices (Android, iPhone, iPad, Tablet, etc)
- Chromebooks (sometimes it will work but huge hit or miss depending on the manufacturer)
- Most IOT devices (e.g. Arduino)
- gnome software (no future plans to provide support, though community members are more than welcome to provide other desktop environments)
- All other Architectures not listed.
- Secure boot
- VMware
- Intel Optane (Only works with Windows)

### NOTE: Want something that's not listed? Help us make it [happen](https://nest.parrotsec.org/)
<b>


&nbsp;

&nbsp;

&nbsp;

&nbsp;


&nbsp;

[Using Parrot](https://docs.parrotlinux.org/info/start/) | [Troubleshooting](https://docs.parrotlinux.org/trbl/start/) | [Linux Beginner Guide](https://docs.parrotlinux.org/library/lbg-basics/) | [Home](https://docs.parrotlinux.org/)