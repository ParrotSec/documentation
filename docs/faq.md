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

## What is the default live password?

Live user: user Live pass: toor
ARM user: parrot ARM pass: toor

## How can i upgrade my system?

There are several different ways to upgrade the parrot system

1) First method
Open a terminal window and launch the following command;
sudo dist-upgrade

2) Second method
Open a terminal window and launch the following commands
sudo apt update
sudo apt full-upgrade

3) Third method
Open System > Administration > Package Manager (synaptic)
then click on the button to update the packages list.
click on the other button to select the upgrades and finally apply the changes.

## Why isn't $toolname installed?

We have a set of requisites to check before a tool makes its way into our repositories such as:
- is the tool actively being maintained?
- does it have the necessary documentation?
- is it FLOSS, FOSS or does its license allow redistribution?
- are there other tools that do the same thing?
- is there someone disposed to package and maintain it?
and more[...];
If the answers were “Yes” we're more than glad to take your request via our <a href="mailto:parrot-devel@lists.parrotsec.org">mailing list.</a>

## Where can bugs be submitted?

If the bug involves a specific piece of software maintained by Parrot, then search the project on our <html><a href="https://dev.parrotsec.org/parrot" target="_blank" class="btn btn-primary">Dev Portal</a></html> and open an issue.
If the bug involves a software package that is not listed <html><a href="https://dev.parrotsec.org/parrot" target="_blank" class="btn btn-primary">here</a></html>, then you should contact the maintainer of that particular software.
If you are not sure of what software is involved, or if you don't know how to contact the correct maintainer, then contact us on our <html><a href="https://community.parrotsec.org/" target="_blank" class="btn btn-primary">Community Portal</a></html>

## What should my sources.list look like?

/etc/apt/sources.list should be EMPTY 
/etc/apt/sources.list.d/parrot.list should contain the following content
deb http://deb.parrotsec.org/parrot stable main contrib non-free
#deb-src http://deb.parrotsec.org/parrot stable main contrib non-free

## What is the mysql / mariadb / postgresql default password?

Read this post <html><a href="https://blog.parrotsec.org/reconfigure-mysql-mariadb-or-postgresql-passwords/" target="_blank" class="btn btn-primary">reconfigure the database password</a></html>.

## The installer wants a CD/DVD but i am using a USB drive.

If this happens, then you did something terribly wrong during the creation of the USB bootable device.
This usually happens when you use a software that doesn't respect the isohybrid standards.
To fix this problem, just trash the program you used and download the official USB creation tool available in our <html><a href="https://www.parrotsec.org/download.php" target="_blank" class="btn btn-primary">download page</a></html>.
The official USB creation tool of the Parrot Project is <html><a href="https://www.etcher.io/" target="_blank" class="btn btn-primary">Etcher</a></html> and it can be downloaded from our <html><a href="https://www.parrotsec.org/download.php" target="_blank" class="btn btn-primary">Etcher</a></html>Download Page</a></html> or directly from <html><a href="https://archive.parrotsec.org/parrot/misc/etcher/" target="_blank" class="btn btn-primary">here</a></html>.

## How do i prepare a bootable Parrot USB drive?

1) Download etcher from our <html><a href="https://www.parrotsec.org/download.php" target="_blank" class="btn btn-primary">Download Page</a></html> or directly from <html><a href="https://archive.parrotsec.org/parrot/misc/etcher/" target="_blank" class="btn btn-primary">here</a></html>.
2) Download the ISO file of the Parrot version you need from our our <html><a href="https://www.parrotsec.org/download.php" target="_blank" class="btn btn-primary">download page</a></html>
3) Use Etcher to flash the ISO file into a free pen drive (the pen drive will be erased)

## Is this FAQ under construction?

Yes it is.

## Can i contribute to this FAQ?

Of course you can, join our <html><a href="https://parrotsec.org/docs/community/" target="_blank" class="btn btn-primary">community</a></html> and propose the questions you think should be shown here.