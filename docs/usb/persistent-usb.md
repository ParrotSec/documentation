# How to create persistent partition on USB

This guide will show you how to create a persistent partition inside a USB with ParrotOS. To do this we will use the [**mkusb**](https://github.com/sudodus/tarballs) tool.

## Install mkusb

After downloading the ParrotOS *.iso* file from our website, download mkusb from the [repository](https://github.com/sudodus/tarballs).

    git clone https://github.com/sudodus/tarballs.git

Enter the folder just downloaded and extract the tool with *tar*:

    cd tarballs && tar -xf dus.tar.xz

A *dus-tmp* folder will be created from which the tool can be installed, open the terminal and type:

    sudo ./dus-installer i

In the same terminal session, type dus and the program will start:

![1](./images/persistent-usb/mkusb_1.png)

This tool can also be used to make a USB bootable, recover it, format it and other interesting things.

![2](./images/persistent-usb/mkusb_2.png)

## Create the persistent partition

Now we can continue with the procedure to create the persistent partition.

![3](./images/persistent-usb/mkusb_3.png)

Choose the mode to create persistence and select the *.iso* to install:

![4](./images/persistent-usb/mkusb_4.png)

Now you can select the USB that you can use to create the live.

![5](./images/persistent-usb/mkusb_5.png)

Here select the upefi package and click *Ok*.

![6](./images/persistent-usb/mkusb_6.png)

From this window you can assign the amount of space to dedicate to the persistent partition, as desired:

![7](./images/persistent-usb/mkusb_7.png)

From here on click on Go to confirm the operation and in a few minutes the USB will be ready.

![8](./images/persistent-usb/mkusb_8.png)
