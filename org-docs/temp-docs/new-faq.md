---
title: 'FAQ'
taxonomy:
    category:
        - docs
visible: true
---

## Parrot Linux Frequently Asked Questions

### Why should I use Parrot Linux?

Penetration testing is a time intensive job, maintaining your toolkit shouldn't 
be also. We make it easier for professionals to accomplish the important stuff 
by reducing the time and effort wasted making sure their tools work.

Not sure if Parrot is for you? Check out "[Should I use Parrot?](https://www.parrotsec.org/docs/info/should-i-use-parrot)" to be sure.

### What is the difference between Kali Linux and Parrot Linux? 

Our focus for one (Their focus i), Our design approach to the system as a whole is different.

### What is the default live password?

Live user: **user**
Live pass: **live**

If the password does not work, also try with: **toor**

Parrot does not have a root password since Parrot 4.4, to launch programs as root or to obtain a root terminal, use **sudo**

### How do I upgrade my system?

First please, do __NOT__ use `apt-get upgrade`. Because Parrot Linux is a rolling distribution and how APT works, the command will cause considerable problems to your system. We don't recommend `apt-get` in general as the command is not really meant for end-users. The following are the recommended ways to update your system:

1) First method

Open a terminal window (default is Alt+T) and launch the following command:

```text
sudo parrot-upgrade
```

2) Second method

Open a terminal window and launch the following commands:

```text
sudo apt update
sudo apt full-upgrade
```

3) Third method

Open System > Administration > Package Manager (synaptic)

Then click on the button to update the packages list.

Click on the other button to select the upgrades and finally apply the changes.

### Why isn't $toolname installed?

We have a set of prerequisites to check before a tool makes its way into our repositories such as:

- Is the tool actively maintained?

- Does it have the necessary documentation?

- Is it FLOSS, FOSS or does it's license allow redistribution?

- Are there other tools that do the same thing?

- Is there someone available to package and maintain it?


and more[...];


If the answers were “Yes” we're more than glad to take your request via our [Community Portal](https://community.parrotsec.org/c/development).


### Where can bugs be submitted?

If the bug involves a specific piece of software maintained by Parrot, then search the project on our [Dev Portal](https://nest.parrotsec.org/) and open an issue.

If the bug involves a software package that is not listed, then you should contact the maintainer of that particular software.

If you are not sure what software is involved, or if you don't know how to contact the upstream developer, then contact us on our [Community Portal](https://community.parrotsec.org/)

### What should my sources.list look like?

`/etc/apt/sources.list` should be **EMPTY**

`/etc/apt/sources.list.d/parrot.list` should contain the following content

```bash
deb http://deb.parrotsec.org/parrot stable main contrib non-free
#deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
```


### The installer wants a CD/DVD but I'm using a USB drive.

If this happens, then you did something terribly wrong during the creation of the USB bootable device.

This usually happens when you use software that doesn't respect the isohybrid standards.

We have a dedicated documentation page which describes this issue, how to fix it and why.

[Create a Boot Device](https://www.parrotsec.org/docs/getting-started/create-boot-device)

### How do I prepare a bootable Parrot USB drive?

1) Download Etcher from our [Download page](https://www.parrotsec.org/download.php) or directly from [www.etcher.io](https://www.etcher.io).

2) Download the ISO file of the Parrot version you need from our our [Download Page](https://www.parrotsec.org/download.php)

3) Use Etcher to flash the ISO file into a free pen drive (the pen drive will be erased).

Read more [HERE](https://www.parrotsec.org/docs/getting-started/create-boot-device).

### I'm new to Linux, please help me!

Of Course! Please check out [helpme](https://www.parrotsec.org/docs/info/helpme), the [Using Parrot Linux](https://www.parrotsec.org/docs/startpage) pages and the [further reading](https://www.parrotsec.org/docs/library/further-reading/). We also strongly recommend taking the [EdX course](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x+3T2018/course/) by the [Linux Foundation](https://www.linuxfoundation.org/).

### Should I encrypt my harddrive

Yes, always. Do it during your initial install or you will need to reinstall. 

### My hardware is *xyz-super-cool gizmo . . .* will it run Parrot Linux?

Maybe, check our [supported hardware](https://www.parrotsec.org/docs/trbl/supported-hardware/) page.

### Can you teach me how to hack, become a Linux uber-duber user, or live a holy life like Cucumber Bob.

Uh no. Nooope. . . You do not know deh way. <br>Seriously, [reading](https://www.parrotsec.org/docs/library/further-reading/) will lead you down the path of autodidactic salvation.

### Why doesn't Parrot Linux use HTTPS with APT?

Please see [here](https://whydoesaptnotusehttps.com/).

### How do I setup auto-login?

Our OVA images are already configured for auto-login. We don't recommend or support auto-login for our other builds.

### I added a third-party repository (PPA,Spotify, ) and I keep getting a bunch of errors, how do I fix this?

You might need to reinstall but first try the following:
- 


### I'm having problems with DNS how can I change it to use Parrot's OpenNICs?

Please see our [Troubleshooting DNS](https://www.parrotsec.org/docs/trbl/dns-trbl-shting.md) page.

### Can I contribute to this FAQ?

Of course! The pages are written in Markdown and can be accessed [here](https://nest.parrotsec.org/parrot-organization/documentation/blob/master/docs/faq.md).

