# All builds are currently experimental and not yet ready for release.

## Last updated Jan 29th 2019.

## Rpi

#### The Flashing Process

It is recommended to use high speed class SD Cards (Class 10) to flash the image otherwise the process may be slow.

Use Etcher for GNU/Linux, Win32 Disk Imager for Windows or ApplePiBaker for Mac to load the Parrot image onto the SD card.

On a Mac, before plugging in the SD card, run the following in Terminal:
```
    df -h
```
This will display a list of all the disks attached to the system. Attach the SD card and run the command again, and note the filesystem name of the SD card (it's the one that wasn't there before). It should look like "/dev/disk2s1", be careful in the next steps, since mixing things up could overwrite the hard drive data.

Now, use the DD command to load the Parrot image onto the card. Use ```man dd``` to see the rest of the operands for dd.

First, let's unmount the partition with the following command, with "x" being the correct disk number:
```
    sudo diskutil unmount /dev/diskX
```
Now Parrot is ready to load. Type, but don't run the command, sudo dd bs=1m if= and enter the location of the Parrot image to load onto the card. Use drag and drop with the disk image into the window to show the file path. After that, type a space, then of=/dev/rdisk and the number of the disk from before.

If there is an "s" after the initial disk number (like rdisk2s1), do not include the "s" or following number. So, "rdisk2s1" should look like "rdisk2." Here's what it should look like altogether:
```
    sudo dd bs=1m if=LocationOfParrotImage of=/dev/rdiskX
```
Press enter to begin the process, and note that DD does not provide any on-screen information unless there is an error or it finishes. To view the progress during the transfer, type Ctrl+T. Wait for the process to complete. You'll know the process is complete when a readout of bytes transferred over the time the process ran appears.

## Pine64
Under construction


[Parrot Info Home](https://www.parrotsec.org/docs/startpage)