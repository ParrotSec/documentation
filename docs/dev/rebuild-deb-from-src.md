
&nbsp;

&nbsp;

NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)

Rebuild a deb package from source

It’s simple to rebuild a deb package from their source code for your desktop install. The process is very easy.You can use apt to raze the package sources, next you have modify them as needed and after all you need the Debian tools. First we must to download the package source

 
root@parrot:~# apt-get source <pack-name>

and

root@parrot:~# cd <pack-name>

Now we must edit the package source code and make the changes needed to the source code of the package

root@parrot:~# nano examples/classic-format.c

After that the important is check for any build dependencies the package may have, so install any build dependencies if needed

root@parrot:~# apt install dh-autoreconf libnfc-dev libssl-dev

With the dependencies installed the next command is all it takes to build our new version

root@parrot:~# dpkg-buildpackage

When the build completes without errors you’ll be able to install it

root@parrot:~# dpkg -i ../<pack-name>.deb


&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 