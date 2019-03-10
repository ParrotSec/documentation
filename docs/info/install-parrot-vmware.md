# VERIFY! 
## NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)


How to Install Parrot Security in VMware Workstation Step-by-Step Guide

This step-by-step article shows you how to install Parrot Security in VMware Workstation step-by-step but you can also use VMware Player which is free. This tutorial also helps if you install Parrot Security on physical hardware. In fact, Parrot Security installation is not very hard. First of all, why Parrot Security as a virtual machine? Because, if you are new on Parrot Security, it is very safe to use it as virtual machine. You can easily explore Parrot Security new features without damaging any live data on your computer.

VMware workstation and VMware Player are virtualization software at the desktop level. They allow to run multiple virtual machines on a physical machine. You can visit VMware product page for more information about the latest release for VMware Workstation and VMware Player.
Parrot Security Installation Steps in VMware Workstation





1. Download Parrot Security ISO 64 bit and save it on your computer here https://www.parrotsec.org/download.fx









2. Open VMware Workstation and click Create a New Virtual Machine









3. I will go with the Custom installation in this tutorial, because it gives more options









4. Click Next at Virtual Machine Hardware Compatibility









5. Browse your Parrot Security ISO file.









6. Choose Linux as a Guest Operating System and choose Ubuntu 64-bit version









7. Write the name of your virtual machine









8. Specify how many processors and cores you wanna give to this virtual machine. Default is okay but I want my virtual machine more powerful. So, I give 1 processor and 4 cores









9. Set how much memory you want to give to this Parrot Security virtual machine. I give 4GB of RAM in this tutorial. You can adjust this value according to your physical resources and/or your needs.









10. Select Use bridged networking. Virtual machine can access to an Ethernet network directly









11. Simply click Next at the Select I/O Controller Types section. LSI Logic is recommended for the most cases









12. Click Next to continue at Select a Disk Type section









13. Click Next to create a new virtual disk for your virtual machine









14. Set disk space you want to use. I set it as 150 GB. I also clicked Store virtual disk as a single file option









15. Click Next at this screen









16. Click Finish









17. Now, click Power on this virtual machine









18. Choose Install









19. Choose standard install









20. Select your Operating System language









21. Select your location









22. Select your keyboard layout









24. Set up root user password here and then Click Continue. You will login into Parrot Security with this password after installation done









25. Choose a User name









26. Enter password for new User









27. Configure clock









28. Arrow down to the disc you created, in my case it is the 150 Gig “Click Enter”









29. Create an empty partition table click “Yes”









30. Arrow down to your “Free Space” and “Click Enter”









31. Choose automatically partition free space and “Click Enter









32. Choose All files in one partition (recommended for new users).









33. Select Finish partitioning and write changes to disk









34. Select Yes to write the changes to disk









35. Wait until the installer finishes its job. It may take 5-10 minutes









36. Install the Grub “Click on Yes”.









37. Choose /dev/sda on which GRUB will be installed.









38. Click Continue at the Finish the installation screen. Your VM will be restarted shortly









Congratulations! you just installed Parrot Security on VMware Workstation





Note: Please Update “All New Installs with sudo-apt-get update && sudo apt-get dist-upgrade”

Written by Jeff Szydel

&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 