---
title: 'Building deb packages with sbuild'
taxonomy:
    category:
        - docs
visible: true
---

### Building deb packages with sbuild

Sbuild is the official debian tool to compile and cross-compile deb packages
for all the supported architectures.

![screenshot](../img/developer-background.jpg)

&nbsp;


&nbsp;


&nbsp;


# Setup

Install the needed tools

```bash
sudo apt install sbuild debhelper ubuntu-dev-tools piuparts
sudo adduser $USER sbuild
```

Optionally install and enable apt-cacher-ng

(keep in mind that network packages are not started by default)

```bash
sudo apt install apt-cacher-ng
sudo service apt-cacher-ng start
sudo systemctl enable apt-cacher-ng
echo 'Acquire::http::Proxy "http://127.0.0.1:3142";' | sudo tee /etc/apt/apt.conf.d/01acng
```


Create the sbuild config files:

Create ~/.sbuildrc:

```bash
# Name to use as override in .changes files for the Maintainer: field
# (mandatory, no default!).
$maintainer_name='Your Name <user@ubuntu.com>';

# Default distribution to build.
$distribution = "parrot";
# Build arch-all by default.
$build_arch_all = 1;

# When to purge the build directory afterwards; possible values are "never",
# "successful", and "always".  "always" is the default. It can be helpful
# to preserve failing builds for debugging purposes.  Switch these comments
# if you want to preserve even successful builds, and then use
# "schroot -e --all-sessions" to clean them up manually.
$purge_build_directory = 'successful';
$purge_session = 'successful';
$purge_build_deps = 'successful';
# $purge_build_directory = 'never';
# $purge_session = 'never';
# $purge_build_deps = 'never';

# Directory for writing build logs to
#$log_dir=$ENV{HOME}."/build/logs";

# don't remove this, Perl needs it:
1;
```


Create ~/.mk-sbuild.rc:

```bash
SCHROOT_CONF_SUFFIX="source-root-users=root,sbuild,admin
source-root-groups=root,sbuild,admin
preserve-environment=true"
# you will want to undo the below for stable releases, read `man mk-sbuild` for details
# during the development cycle, these pockets are not used, but will contain important
# updates after each release of Ubuntu
SKIP_UPDATES="1"
SKIP_PROPOSED="1"
# if you have e.g. apt-cacher-ng around
# DEBOOTSTRAP_PROXY=http://127.0.0.1:3142/
```


Log out and log in again in order for your group change to take effect.

otherwise use the following command to enter the sbuild group without reloading your session:

```bash
sg sbuild
```


Optionally generate a GPG keypair for sbuild to use:

```bash
sbuild-update --keygen
```

# Create the schroot environments

Create the amd64 chroot using the btrfs backend (remove the btrfs option if /var uses a different filesystem):

```bash
mk-sbuild --arch=amd64 --name=parrot  --skip-proposed --skip-updates --skip-security --debootstrap-include=ca-certificates,parrot-archive-keyring,gnupg2 --debootstrap-mirror=http://127.0.0.1:3142/deb.parrotsec.org/parrot --type="btrfs-snapshot" --distro="debian" parrot
```


Do the same for i386:

```bash
mk-sbuild --arch=i386 --name=parrot  --skip-proposed --skip-updates --skip-security --debootstrap-include=ca-certificates,parrot-archive-keyring,gnupg2 --debootstrap-mirror=http://127.0.0.1:3142/deb.parrotsec.org/parrot --type="btrfs-snapshot" --distro="debian" parrot
```

Do the same for arm64:

```bash
mk-sbuild --arch=arm64 --name=parrot  --skip-proposed --skip-updates --skip-security --debootstrap-include=ca-certificates,parrot-archive-keyring,gnupg2 --debootstrap-mirror=http://127.0.0.1:3142/deb.parrotsec.org/parrot --type="btrfs-snapshot" --distro="debian" parrot
```


Do the same for armhf:

```bash
mk-sbuild --arch=armhf --name=parrot  --skip-proposed --skip-updates --skip-security --debootstrap-include=ca-certificates,parrot-archive-keyring,gnupg2 --debootstrap-mirror=http://127.0.0.1:3142/deb.parrotsec.org/parrot --type="btrfs-snapshot" --distro="debian" parrot
```


# Additional setup (optional)

You may find convenient to have some additional utilities pre-installed in your schroot environments to speed the build process up or to be able to quickly enter the environment of a failed build and spot eventual bugs.

Install useful packages:

```bash
sudo schroot --all-source-chroots -d / -u root -- apt-get update
sudo schroot --all-source-chroots -d / -u root -- apt-get -y install nano curl wget devscripts build-essential ubuntu-dev-tools
```


## Notes:

&nbsp;

#### BTRFS

If you use btrfs, the *--type="btrfs-snapshot"* option will handle the chroots as btrfs subvolumes for easier management,
and every build will be performed on a dedicated snapshot of that subvolume that is automatically created and destroyed for each build,
keeping your original chroots clean, making every build isolated and speeding up the initial bootstrap of the build process.

Remove *--type="btrfs-snapshot"* if you don't use btrfs.

#### Boostrap failures

If something went wrong during the creation of the chroot, then you have to delete its folder or snapshot before you retry.

If your backend is btrfs then you can't just delete the folder in /var/lib/schroot/chroots/ because it is a btrfs subvolume.

The following command is an example of how you can delete the subvolume called parrot-amd64:

```bash
btrfs subvolume delete /var/lib/schroot/chroots/parrot-amd64
```

&nbsp;

&nbsp;

[Using Parrot](https://docs.parrotlinux.org/info/start/) | [Troubleshooting](https://docs.parrotlinux.org/trbl/start/) | [Linux Beginner Guide](https://docs.parrotlinux.org/library/lbg-basics/) | [Home](https://docs.parrotlinux.org/)