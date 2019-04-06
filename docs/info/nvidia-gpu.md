&nbsp;

&nbsp;

NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)


Nvidia Driver Installation Parrot Security
-Installation Steps


1. Open a Terminal, Alt + t or simply use the menu.


2. sudo apt-get update && sudo apt-get dist-upgrade


3. sudo apt-get install nvidia-driver bumblebee-nvidia


-Edit Conference File


4. sudo nano /etc/bumblebee/bumblebee.conf



5. Driver= has to be Driver=nvidia



6. KernelDriver=nvidia-current



7. Reboot


-Check And Verify Nvidia Install Version


8. optirun glxinfo | grep OpenGL

9. Done 

&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)