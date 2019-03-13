This will go in either space cadets or dev handbook



One of the many useful things we can do with APT is create metapackages, which are effectively empty packages that declare a list of other packages as dependencies. Kali Linux includes metapackages for password cracking, software-defined radio, wireless, web applications, and more but if you have specific needs (like most people), it’s quick and easy to define your own metapackages, which we will show in this post.

Before we begin, we need to install the devscripts package, which includes a number of tools and utilities for package management.
root@kali:~# apt install devscripts

In Kali, all metapackages are defined in the appropriately named kali-meta package so we can clone and modify it to suit our needs.
root@kali:~# git clone git://git.kali.org/packages/kali-meta
Cloning into 'kali-meta'...
remote: Counting objects: 998, done.
remote: Compressing objects: 100% (809/809), done.
remote: Total 998 (delta 365), reused 0 (delta 0)
Receiving objects: 100% (998/998), 179.90 KiB | 570.00 KiB/s, done.
Resolving deltas: 100% (365/365), done.
warning: remote HEAD refers to nonexistent ref, unable to checkout.

The “unable to checkout” message above looks worrisome but it only means that the default branch (kali/master) needs to be checked out first, which can be done as follows.
root@kali:~# cd kali-meta/
root@kali:~/kali-meta# git checkout kali/master
Branch 'kali/master' set up to track remote branch 'kali/master' from 'origin'.
Switched to a new branch 'kali/master'
root@kali:~/kali-meta#

To create a new metapackage (or update an existing one), we need to edit the debian/control file with the package information. Each metapackage is merely a comma-separated list of package dependencies, like the one for the kali-linux-gpu shown below.
Package: kali-linux-gpu
Architecture: any
Depends: ${misc:Depends},
 kali-linux,
 oclhashcat [amd64 i386],
 pyrit,
 oclgausscrack [amd64 i386],
 truecrack,

Our new metapackage will be called “kali-linux-mytools” and will install Vagrant, VirtualBox, LibreOffice, and Chromium. Our entry for this metapackage in debian/control looks like this:
 root@kali:~/kali-meta# tail -n 14 debian/control
 Package: kali-linux-mytools
 Architecture: any
 Depends: ${misc:Depends},
  kali-linux,
  virtualbox,
  vagrant,
  libreoffice,
  chromium,
 Description: My required Kali tools
  This is Kali Linux, the most advanced penetration testing and security
  auditing distribution.
  .
  This metapackage depends on the tools I install most often.

With the new metapackage defined, we need to bump the version number with ‘dch’ prior to building the package. This will launch an editor for you to enter the details of your changes in debian/changelog.
root@kali:~/kali-meta# dch --local dookie

root@kali:~/kali-meta# head -n 5 debian/changelog
kali-meta (2018.3.2dookie1) UNRELEASED; urgency=medium

  * Added kali-linux-mytools

 -- dookie <dookie@kali.local>  Tue, 11 Sep 2018 09:40:10 -0600

Finally, we can proceed to build the new package with the ‘dpkg-buildpackage’ command. Since metapackages are just lists of dependencies, the build process is very quick.
root@kali:~/kali-meta# dpkg-buildpackage -us -uc -b
dpkg-buildpackage: info: source package kali-meta
dpkg-buildpackage: info: source version 2018.3.2dookie1
dpkg-buildpackage: info: source distribution UNRELEASED
dpkg-buildpackage: info: source changed by dookie <dookie@kali.local>
dpkg-buildpackage: info: host architecture amd64
...
dpkg-deb: building package 'kali-linux-pwtools' in '../kali-linux-pwtools_2018.3.2dookie1_amd64.deb'.
dpkg-deb: building package 'kali-linux-top10' in '../kali-linux-top10_2018.3.2dookie1_amd64.deb'.
dpkg-deb: building package 'kali-linux-mytools' in '../kali-linux-mytools_2018.3.2dookie1_amd64.deb'.
 dpkg-genbuildinfo --build=binary
 dpkg-genchanges --build=binary >../kali-meta_2018.3.2dookie1_amd64.changes
dpkg-genchanges: info: binary-only upload (no source code included)
 dpkg-source --after-build kali-meta
dpkg-buildpackage: info: binary-only upload (no source included)

When the build is complete, our new metapackage can be installed with ‘apt’ like any other package.
root@kali:~/kali-meta# apt install ../kali-linux-mytools_2018.3.2dookie1_amd64.deb

...

root@kali:~/kali-meta# apt-cache policy vagrant virtualbox libreoffice chromium
vagrant:
  Installed: 2.1.2+dfsg-1
  Candidate: 2.1.2+dfsg-1
  Version table:
 *** 2.1.2+dfsg-1 500
        500 http://192.168.86.4/kali kali-rolling/main amd64 Packages
        100 /var/lib/dpkg/status
virtualbox:
  Installed: 5.2.18-dfsg-2
  Candidate: 5.2.18-dfsg-2
  Version table:
 *** 5.2.18-dfsg-2 500
        500 http://192.168.86.4/kali kali-rolling/contrib amd64 Packages
        100 /var/lib/dpkg/status
libreoffice:
  Installed: 1:6.1.1~rc1-2
  Candidate: 1:6.1.1~rc1-2
  Version table:
 *** 1:6.1.1~rc1-2 500
        500 http://192.168.86.4/kali kali-rolling/main amd64 Packages
        100 /var/lib/dpkg/status
chromium:
  Installed: 68.0.3440.75-2
  Candidate: 68.0.3440.75-2
  Version table:
 *** 68.0.3440.75-2 500
        500 http://192.168.86.4/kali kali-rolling/main amd64 Packages
        100 /var/lib/dpkg/status

Just like that, we have our own metapackage that we can store on network share or some other location to quickly get our fresh Kali Linux installations set up and configured quickly.
