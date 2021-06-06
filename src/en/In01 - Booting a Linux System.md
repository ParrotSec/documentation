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

Types of Bootloaders in Linux

  - LILO: The LInux LOader
  - GRUB: GRand Unifying Bootloader

Both are capable of loading both Linux systems and other operating systems and are usually located in the hard drive's MBR.

### LILO
LILO: it is a rudimentary single-stage Bootloader, it does not understand operating systems or file systems. Lilo reads data from disk using native BIOS calls that directly indicate the files that are needed, these files are stored through a map file that is stored in the boot sector.

How LILO works: The firmware loads LILO's boot sector and executes it, then LILO loads its map file through BIOS calls, which shows the loading options prompt. The user selects the kernel to boot and LILO loads the selected kernel through BIOS calls and using the location parameters in the map file. Lastly, LILO executes the kernel indicating where the root fs is (the root filesystem) and if necessary the ramdisk.

LILO files:

- Example of /etc/lilo.conf

    boot=/dev/hda2
    root=/dev/hda2
    install=/boot/boot.b
    map=/boot/map
    vga=normal
    delay=20
    image=/vmlinuz
    label=Linux
    read-only
    other=/dev/hda1
    table=/dev/hda
    label=win

- To load the configuration, execute the lilo command:

        $ lilo /etc/lilo.conf

### GRUB

GRUB: it is a more advanced and modern Bootloader than LILO. It works in two or three stages (Stages) and has the capacity to load a kernel via the network. GRUB at each stage is loading more elements to boot, it understands files and allows you to specify parameters dynamically at startup, it does not use static values.

How GRUB works: As mentioned above, GRUB has two or three stages, it is said to have two or three because the second stage is optional. Next, we are going to see each of these stages.

- Stage 1: The firmware loads the GRUB boot sector into memory.
- Stage 1.5: Its objective is to load the code that recognizes file systems and from there load stage 2 as a file.
- Stage 2: GRUB shows the menu with the boot options that we have defined and a prompt where we can specify ramdisk, kernels, etc. to load.

After these stages, GRUB executes the entered commands, those defined by us in the configuration file (grub.conf, menu.lst, grub.cfg, depending on the distribution) and begins loading the kernel.

These stages and characteristics of GRUB demonstrate its power and superiority to LILO, it is capable of loading files and performing dynamic tasks in the system boot phase, hence it is the Bootloader par excellence in the vast majority of distributions.

GRUB files in Parrot:

	$ ls -la
	total 1359
	drwxr-xr-x 5 root root    1024 oct  3 21:36 .
	drwxr-xr-x 4 root root    1024 oct 12 22:34 ..
	drwxr-xr-x 2 root root    1024 oct  3 21:36 fonts
	-r--r--r-- 1 root root    6574 oct  3 21:36 grub.cfg
	-rw-r--r-- 1 root root    1024 oct  3 21:36 grubenv
	drwxr-xr-x 2 root root    9216 oct  3 21:36 i386-pc
	drwxr-xr-x 2 root root    1024 oct  3 21:36 locale
	-rw-r--r-- 1 root root 1362622 oct  3 21:24 unicode.pf2

These files vary depending on the distribution, in Debian-based distributions, it usually looks like this.

## Phase 3: Kernel

Brief description of the Linux kernel:

  - Monolithic Architecture.
  - It is a complex program composed of a large number of logical subsystems.
  - Managed directly by Linus Torvalds.
  - With module load capacity.
  - It is formed by a logical layer but internally it works with more.


In this phase the execution of the kernel begins, decompressing itself. Then begins the kernel initialization and the checking and commissioning of some of the devices for which it has been supported.

  - Detects the CPU and its speed.
  - Initializes the display to show information on the screen.
  - Checks the PCI bus and identifies and creates a table with the connected peripherals.
  - Initializes the virtual memory management system, including the swapper (exchanger or exchange memory, swap).
  - Initializes all the peripherals compiled within the kernel, normally only the peripherals necessary for this phase of the boot are configured in this way, the rest are configured as modules.
  - Mount the root (/) filesystem.
  - From here it calls the init process that runs with a uid 0 and will be the parent of all other processes.

## Phase 4: Init.

At the moment the kernel is loaded, we have memory management, a part of the hardware is initialized and we have a root filesystem. From now on, the rest of the operations will be carried out directly or indirectly by the init process. The init process reads the configuration to be used from the / etc / inittab file and executes the /etc/rc.sysinit command, which performs a basic initialization of the system. Depending on the runlevel, it executes the established commands.

So far we have seen the four Phases of the boot process of a Linux system on a computer. We can conclude this chapter with the following summary:

The boot process of a Linux system on a computer starts from when we press the power button, it gives life to our hardware by making it work. After power-on, the hardware is tested by the BIOS POST, this makes a mapping of the hardware that we have in our computer and tests it, if everything is working correctly, the boot process continues.

The BIOS uses the default configuration by the manufacturer of the board of our computer or a configuration modified by the user, then it gives way to the Bootloader or Boot Manager that we have installed in the initial partition of our hard disk.

The Bootloader is in charge of showing us the boot options that we previously configured in the system installation, the default options in a recent installation or those of an installation DVD or Live. Once the user chooses a boot option, the kernel is unzipped and subsequently started.

The Kernel performs a small check of the necessary devices and which have been supported, such as CPU, Display, RAM and virtual memory (swap) and other necessary devices, the Kernel ends up mounting the root file system and finally starts the init process. Init is responsible for starting the rest of the system processes, thus initiating the login in text mode or the graphical interface in systems with GUI (Graphical User Interface) and allowing us to use the operating system.