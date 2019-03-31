---
title: 'What is Parrot?'
taxonomy:
    category:
        - docs
visible: true
---

# The Parrot System

&nbsp;

**ParrotOS** (Parrot Security, ParrotOS) is a free and open source GNU/Linux distribution based on [Debian Testing](https://www.debian.org/releases/testing/) designed for security experts, developers and privacy aware people.

It includes a full portable arsenal for IT security and digital forensics operations, but it also includes everything you need to develop your own programs or protect your privacy while surfing the net.

The operating system ships with the MATE desktop environment preinstalled and is available in several flavors to fit your needs.


![macaw-poly](https://www.parrotsec.org/docs/img/macaw-poly.jpg)

&nbsp;

&nbsp;

&nbsp;
---

### History and Team

The first public release appeared on April 10th, 2013 as the result of the work of **Lorenzo Faletra** who continues to lead development.

Originally developed as part of Frozenbox, the effort has grown to include a community of open source developers, professional security experts, advocates of digital rights, and Linux enthusiasts from all around the globe.

The project is headquartered in Palermo, Italy and it is supported by an international team of experts and enthusiasts.

---

### Who is it designed for

The system is designed to be familiar for the security expert and easy to use for the new entry student, but it does not try to hide its internals as other general purpose distributions try to do.

**Parrot can be used as a daily system**, and it provides all the programs for the day to day tasks, including dedicated system flavors that don't ship security tools.


&nbsp;

&nbsp;

---

### Secure Sandboxed Environment

People familiar with other pentest distributions may notice that Parrot is quite unique, as **it does not allow direct root logins** for safety reasons (root can only be used with sudo), and it provides its own sandbox system by combining [Firejail](https://firejail.wordpress.com) and [AppArmor](https://wiki.ubuntu.com/AppArmor) with custom security profiles.


&nbsp;

&nbsp;

---

### Software Store

The system has its own applications repository including all the packages supported by Debian (more than 56,000 packages available over 4 different architectures), plus many other applications and tools Debian can't provide yet, all of them are accessible directly from the APT package manager.

Additionally, Parrot supports [SNAP](https://snapcraft.io), a new package distribution system that provides easy access to many other programs that GNU/Linux distributions don't always ship in their software archives. [Take a look at the snap programs list](https://snapcraft.io/store).

[Flatpak](https://www.flatpak.org/) is an universal software store similar to snap. It can be installed from the Parrot official repository.

Parrot supports [Wine](https://www.winehq.org/), a compatibility layer to run Windows applications in Linux environments.

&nbsp;
---

# Should I use Parrot?

### Why Parrot is different

Even if we, would like everyone to use the Parrot System or, at least, give it a try, there are some important considerations to make about who we expect to use Parrot and who may have a bad experience from it.

First of all, even if Parrot provides general purpose flavors, its core is still tuned for Security and Forensics operations.
In this section we will explain how different is Parrot compared to other general purpose distributions and how different it is from other Pentest and Forensics distributions. Then we will present some categories of people and what kind of experience they may have by using this system.



<img src="https://www.parrotsec.org/docs/img/parrot.svg" width="200">


### General purpose distributions
Parrot is different from a general purpose distribution (i.e. Ubuntu) because it does not try in any way to hide its internals.

Meaning that many automation tools are included in the system to make it easier to use, yet expose quite well what the system has under the hood.

A good example is the *parrot update reminder*: it is a simple yet powerful program that prompts the user to check for system upgrades once a week. but instead of hiding the upgrade process behind a progress bar, it shows the user the full upgrade process from the **apt** output.

Another important difference is that Parrot disables by default all the network services pre-installed in the system, not only to maintain a very low RAM footprint and offer better performance, but also to avoid services exposure in a target network.
Every network service needs to be manually started when the user needs it.

---

### Pentest distributions

Pentest distributions are famous for integrating only security tools, allowing easy root access and taking down all the security system barriers that may influence the workflow of a pentester.

Parrot was designed to be a very comfortable environment for security experts and researchers. It includes many basic programs for daily use which pentesting distributions usually exclude (at the cost of less than an additional gigabyte of storage). This choice was taken to make Parrot not only a good system to perform security tests, but also a good environment where you can write reports, build your own tools, and communicate seamlessly with teammates, without the need for additional computers, operating systems or configuration.

Our goal is to allow any professional pentester to make a whole security test from the beginning, to the report with just a Parrot ISO and an average laptop.

---

### Secure distributions

Parrot includes its own sandbox system obtained with the combination of [Firejail](https://firejail.wordpress.com) and [AppArmor](https://wiki.ubuntu.com/AppArmor) with custom security profiles.

User applications in Parrot are **protected** and **"jailed"** to limit the damages in case the system is compromised.

All this additional security comes with a cost: it is harder to adopt bad behaviors on Parrot. For instance it is not possible to log in as root with the whole desktop environment, or to start critical applications like browsers, media players or advanced document readers with unnecessary privileged permissions.

The user can still open root consoles, launch security tools with privileged permissions and use the system without limits. The only thing that changes is that all the critical user applications are now protected from very bad behaviors and common exploit techniques, and the damages caused by advanced exploits are very limited.

---

### Forensics distributions

Digital forensics experts need an environment that does not compromise their proof.

Parrot comes with automount functions **disabled by default**, to allow forensics acquisitions to be performed in a safe way.
The global automount policy is configured in a redundant way in all the layers of the system stack, from the noautomount kernel option passed by default at boot, to the specific file manager settings to disable auto mount and plug&play features.

Don't forget that the disks are still recognized by the system, and the system will mount them without protections if the user accidentally open them.

The no-automount behavior is consistent and stable, but no protection is provided in case of accidental mounts. A write blocker is always recommended in any digital forensics scenario.


### Who Parrot is made for

 * Security Experts
 * Digital forensics experts
 * Engineering and IT Students
 * Researchers
 * Journalists & Hacktivists
 * Wannabe Hackers
 * Police officers and special security institutions

&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/) 
