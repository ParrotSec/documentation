---
title: 'FAQ'
taxonomy:
    category:
        - docs
visible: true
---

# Parrot Project Frequently Asked Questions

## Why should I use parrot?

Penetration testing is a time intensive job, maintaining your toolkit shouldn't 
be also. We make it easier for professionals to accomplish the important stuff 
by reducing the time and effort wasted making sure their tools work.

Read the dedicated documentation page to know more:
[Should I use parrot?](https://www.parrotsec.org/docs/intro/should-i-use-parrot/)



## What is the default live password?

Live user: **user**
Live pass: **live**

If the password does not work, also try with: **toor**

Parrot does not have a root password since Parrot 4.4, to launch programs as root or to obtain a root terminal, use **sudo**



## How can I upgrade my system?

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

- Is the tool actively maintained?

- Does it have the necessary documentation?

- Is it FLOSS, FOSS or does its license allow redistribution?

- Are there other tools that do the same thing?

- Is there someone available to package and maintain it?


and more[...];


If the answers were “Yes” we're more than glad to take your request via our [Community Portal](https://community.parrotsec.org/c/development).



## Where can bugs be submitted?

If the bug involves a specific piece of software maintained by Parrot, then search the project on our <html><a href="https://nest.parrotsec.org/" target="_blank" class="btn btn-primary">Dev Portal</a></html> and open an issue.

If the bug involves a software package that is not listed, then you should contact the maintainer of that particular software.

If you are not sure what software is involved, or if you don't know how to contact the upstream developer, then contact us on our [Community Portal](https://community.parrotsec.org/)

## What should my sources.list look like?

`/etc/apt/sources.list` should be **EMPTY**

`/etc/apt/sources.list.d/parrot.list` should contain the following content

```
deb http://deb.parrotsec.org/parrot stable main contrib non-free
#deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
```


## The installer wants a CD/DVD but I'm using a USB drive.

If this happens, then you did something terribly wrong during the creation of the USB bootable device.

This usually happens when you use software that doesn't respect the isohybrid standards.

We have a dedicated documentation page which describes this issue, how to fix it and why.

[Create a Boot Device](getting-started/create-boot-device)

## How do I prepare a bootable Parrot USB drive?

1) Download etcher from our [Download page](https://www.parrotsec.org/download.php) or directly from [www.etcher.io](https://www.etcher.io).

2) Download the ISO file of the Parrot version you need from our our [Download Page](https://www.parrotsec.org/download.php)

3) Use Etcher to flash the ISO file into a free pen drive (the pen drive will be erased).

Read more [HERE](https://www.parrotsec.org/docs/getting-started/create-boot-device).

## Is this FAQ under construction?

Yes it is.

## Can I contribute to this FAQ?

Of course! The pages are written in Markdown and can be accessed [here](https://nest.parrotsec.org/parrot-organization/documentation/blob/master/docs/faq.md).