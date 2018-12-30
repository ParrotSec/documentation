---
title: 'Should I use Parrot?'
taxonomy:
    category:
        - docs
visible: true
---

## Why parrot is different

__Even if we, the Parrot Developers, would like everyone to use the Parrot System or, at least, give it a try, there are some important considerations to make about who we expect to use Parrot and who may have a bad experience from it.__

__First of all, even if Parrot provides general purpose flavors, its core is still tuned for Security and Forensics operations.__
__In this section we will explain how different is Parrot compared to other general purpose distributions and how different it is from other Pentest and Forensics distributions. Then we will present some categories of people and what kind of experience they may have by using this system.__

![macaw-poly](/img/macaw-poly.jpg)




### General purpose distributions
Parrot is different from a general purpose distribution (i.e. Ubuntu) because it does not try in any way to hide its internals.

Meaning that many automation tools included in the system to make it easier to use, still expose what the system has under the hood.

A good example is the *parrot update reminder*: it is a simple yet powerful program that prompts the user to check for system upgrades once a week. but instead of hiding the upgrade process behind a progress bar, it shows the user the full upgrade process from the **apt** output.

Another important difference is that Parrot disables by default all the network services pre-installed in the system, not only to maintain a very low RAM footprint and offer better performance, but also to avoid services exposure in a target network.
Every network service needs to be manually started when the user needs it.

---

### Pentest distributions

Pentest distributions are famous to integrate only security tools, allow easy root access and take down all the system security barriers that may influence the workflow of a pentester.

Parrot was designed to be a very comfortable environment for security experts and researchers, and it also includes all the basic programs for daily use that pentest distribution usually exclude (at the cost of less than an additional gigabyte of storage). This choice was taken to make Parrot not only a good system where to perform security tests, but also a good environment where to write reports and communicate with teammates without any need of additional computers, operating systems or installation/configuration steps.

Our goal is to allow any professional pentester to make a whole security test from the beginning to the report with just a Parrot ISO and an average laptop.

---

### Secure distributions

Parrot includes its own sandbox system obtained with the combination of [Firejail](https://firejail.wordpress.com) and [AppArmor](https://wiki.ubuntu.com/AppArmor) with custom security profiles.

User applications in Parrot are **protected** and **"jailed"** to limit the damages in case the system is compromised.

All this additional security comes with a cost: it is harder to adopt bad behaviors on Parrot. For instance it is not possible to log in as root with the whole desktop environment, or to start critical applications like browsers, media players or advanced document readers with unnecessary privileged permissions.

The user can still open root consoles, launch security tools with privileged permissions and use the system without limits. The only thing that changes is that all the critical user applications are now protected from very bad behaviors and common exploit techniques, and the damages caused by advanced exploits are very limited.

---

### Forensics distributions

Digital forensics experts need and environment that does not compromise their proof.

Parrot comes with automount functions **disabled by default**, to allow forensics acquisitions to be performed in a safe way.
The global automount policy is configured in a redundant way in all the layers of the system stack, from the noautomount kernel option passed by default at boot, to the specific file manager settings to disable auto mount and plug&play features.

Don't forget that the disks are still recognized by the system, and the system will mount them without protections if the user accidentally open them.

The no-automount behavior is consistent and stable, but no protection is provided in case of accidental mounts. a write blocker is always recommended in any digital forensics scenario.


### Who Parrot is made for

 * Security Experts
 * Digital forensics experts
 * Engineering and IT Students
 * Researchers
 * Journalists & Hacktivists
 * Wannabe Hackers
 * Police officers and special security institutions