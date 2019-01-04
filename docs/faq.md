---
title: 'FAQ'
taxonomy:
    category:
        - docs
visible: true
---

# Parrot Project Frequently Asked Questions

## Why should i use parrot?

Penetration testing is a time consuming job, so is maintaining your tools up to date.
We make it easier for professionals to accomplish tasks that should be automatized by reducing the time and efforts they have to put into them.

Read the dedicated documentation page to know more
[should i use parrot](https://www.parrotsec.org/docs/intro/should-i-use-parrot/)



## What is the default live password?

Live user: **user**
Live pass: **live**

If the password does not work, also try with: **toor**

Parrot does not have a root password since Parrot 4.4, to launch programs as root or to obtain a root terminal, use **sudo**



## How can i upgrade my system?

There are several different ways to upgrade the parrot system

1) First method

Open a terminal window and launch the following command;

`sudo parrot-upgrade`

2) Second method

Open a terminal window and launch the following commands

`sudo apt update
sudo apt full-upgrade
`

3) Third method

Open System > Administration > Package Manager (synaptic)

then click on the button to update the packages list.

click on the other button to select the upgrades and finally apply the changes.



## Why isn't $toolname installed?

We have a set of requisites to check before a tool makes its way into our repositories such as:

- is the tool actively maintained?

- does it have the necessary documentation?

- is it FLOSS, FOSS or does its license allow redistribution?

- are there other tools that do the same thing?

- is there someone disposed to package and maintain it?


and more[...];


If the answers were “Yes” we're more than glad to take your request via our [Community Portal](https://community.parrotsec.org/c/development).



## Where can bugs be submitted?

If the bug involves a specific piece of software maintained by Parrot, then search the project on our <html><a href="https://dev.parrotsec.org/parrot" target="_blank" class="btn btn-primary">Dev Portal</a></html> and open an issue.

If the bug involves a software package that is not listed <html><a href="https://dev.parrotsec.org/parrot" target="_blank" class="btn btn-primary">here</a></html>, then you should contact the maintainer of that particular software.

If you are not sure of what software is involved, or if you don't know how to contact the upstream developer, then contact us on our [Community Portal](https://community.parrotsec.org/)

## What should my sources.list look like?

`/etc/apt/sources.list` should be **EMPTY**

`/etc/apt/sources.list.d/parrot.list` should contain the following content

`deb http://deb.parrotsec.org/parrot stable main contrib non-free
#deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
`


## The installer wants a CD/DVD but i am using a USB drive.

If this happens, then you did something terribly wrong during the creation of the USB bootable device.

This usually happens when you use a software that doesn't respect the isohybrid standards.

We have a dedicated documentation page that describes this issue, how to fox it and why

[Create a Boot Device](getting-started/create-boot-device)

## How do i prepare a bootable Parrot USB drive?

1) Download etcher from our [Download page](https://www.parrotsec.org/download.php) or directly from [www.etcher.io](https://www.etcher.io).

2) Download the ISO file of the Parrot version you need from our our [Download Page](https://www.parrotsec.org/download.php)

3) Use Etcher to flash the ISO file into a free pen drive (the pen drive will be erased)

Read more [HERE](https://www.parrotsec.org/docs/getting-started/create-boot-device).


## Is this FAQ under construction?

Yes it is.

## Can i contribute to this FAQ?

Of course you can, [source code of this page](https://dev.parrotsec.org/parrot/documentation/blob/master/docs/faq.md) - [source code of this documentation portal](https://dev.parrotsec.org/parrot/documentation)