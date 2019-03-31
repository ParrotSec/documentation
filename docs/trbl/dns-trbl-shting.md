Parrot 3.7 introduces many significant changes to the core of the system, first of all it is based on debian 10 (the new testing branch) and we have noticed that the update breaks the DNS configuration.

Even if we are still working to find the updated packages that caused the problem, we have already spotted a working solution.

 

First of all, let’s spot the cause:

The bug is caused by the fact that something is removing /etc/resolv.conf by replacing it with an empty file.

/etc/resolv.conf is the file that contains the dns configuration and it is used for the domains resolution.

By default it should be configured or by resolvconf or by NetworkManager, and in both the cases /etc/resolv.conf is supposed to be a symlink to another file created by the previously mentioned services.

 

We have discovered that even if the file is removed and replaced by the correct symlink, the problem may persist and the file can still be randomly replaced with that empty file.

 

In our build platform we are building the new ISO files for parrot 3.7 by adding some commands in /etc/rc.local to remove the file and create the symlink, and because it was added to rc.local, this fix is applied every time the system starts.

 

As a cleaner fix, we have reconfigured our settings for dnsmasq and resolvconf and resolvconf is now forced to be auto started at every boot.

 

 

What can you do if you have an offline system and you need internet connection now?

First method:

    open a terminal window
    run the command sudo su to open a root shell
    run the following commands

**rm /etc/resolv.conf**
  
**ln -s /etc/resolvconf/run/resolv.conf  /etc/resolv.conf
  
service resolvconf start**
  
**systemctl enable resolvconf**

 

Second method:

    open a terminal window
    run the command sudo su to open a root shell
    run the commands

**rm /etc/resolv.conf**
  
**echo -e &#8220;nameserver 92.222.97.145\nnameserver 8.8.8.8&#8221; > /etc/resolv.conf**
&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)
