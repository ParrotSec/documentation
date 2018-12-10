---
title: 'What is Parrot?'
taxonomy:
    category:
        - docs
visible: true
---

## The Parrot System

**Parrot** (Parrot Security, ParrotOS, Parrot GNU/Linux) is a free and open source GNU/Linux distribution based on [Debian Testing](https://www.debian.org/releases/testing/) designed for security experts, developers and privacy aware people.

It includes a full portable arsenal for IT security and digital forensics operations, but it also includes everything you need to develop your own programs or protect your privacy while surfing the net.

The operating system ships with the MATE desktop environment preinstalled and is available in several flavors to fit your needs.

<img src="/img/parrot.svg" width="200">

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

The system has its own applications repository including all the packages supported by Debian (more than 56000 packages available over 4 different architectures), plus many other applications and tools Debian can't provide yet, all of them are accessible directly from the APT package manager.

Additionally, Parrot supports [SNAP](https://snapcraft.io), a new package distribution system that provides easy access to many other programs that GNU/Linux distributions don't always ship in their software archives. [Take a look at the snap programs list](https://snapcraft.io/store).

[Flatpak](https://www.flatpak.org/) is an universal software store similar to snap. It can be installed from the Parrot official repository.

Parrot supports Wine, a compatibility layer to run Windows applications in Linux environments.
