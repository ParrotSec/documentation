## Booting a Linux system.

## Phase 1: Hardware and BIOS

The boot process begins when we press the power button on our computer. In this phase the system starts passing control to the BIOS.

The BIOS is a small program that is recorded in the memory of the motherboard, this program saves the configuration of our system, it is in charge of performing the POST, Power on Self Test or Power On Self Test (It is the process verification of the components of a computer system, is in charge of configuring and diagnosing the state of the hardware). This memory, where the BIOS is located, is continuously powered by the motherboard's battery to maintain the configuration.

The BIOS takes care of the following tasks:

  - Verify the integrity of the BIOS code.
  - Determine why POST is running (cold boot, reset, error, standby, hibernation, etc.)
  - Search, size and verify the system memories (RAM and ROM).
  - Provide the user interface to configure system parameters (CPU speed, boot order, tuning and overclocking, among other particular configurations from other manufacturers)
  - Identify, organize and select available boot devices.
  - Start the system boot process, called Bootloader.

Once the BIOS performs all the necessary tests and checks the corresponding configuration of the system, and if everything is fine, it passes control of the system to the Bootloader or Boot Loader.

## Phase 2: Bootloader

The objective of the Bootloader is to load part of the Kernel of the operating system and execute it. In this phase, the Bootloader takes control of the computer system and is responsible for loading the rest of the operating system. There are several types of Bootloaders and these can be loaded from various storage units.

Bootloader locations:

  - On a floppy disk (currently obsolete).
  - On the hard disk: it is often located in the first sector of a hard disk partition, in the global boot sector MBR (Master Boot Record) or in a modern GUID Globally-Unique Identifier (GPT) partition system which is the EFI (Extensible Firmware Interface) standard proposed by Intel to replace the old BIOS (GPT replaces the MBR used with the BIOS in modern computers and laptops).
  - We can also find the Bootloader on a CD-ROM or DVD-ROM.
  - There are some types of Bootloaders that can be loaded from the network such as LinuxBios (an Open Source alternative that aims to replace the normal BIOS with a Bios with a small hardware initialization and a compressed Linux kernel, avoid the use of Bootloaders, among others ...)