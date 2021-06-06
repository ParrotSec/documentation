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