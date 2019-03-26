# AppArmor 

## What is AppArmor

AppArmor is an effective and easy-to-use Linux application security
system. AppArmor proactively protects the operating system and
applications from external or internal threats, even zero-day attacks,
by enforcing good behavior and preventing even unknown application
flaws from being exploited. AppArmor security policies completely
define what system resources individual applications can access,
and with what privileges. A number of default policies are included
with AppArmor, and using a combination of advanced static analysis
and learning-based tools, AppArmor policies for even very complex
applications can be deployed successfully in a matter of hours.

## How to install AppArmor

#### Check if AppArmor is already installed

AppArmor and it's profiles shoiuld be already enabled and exist in ParrotSec.To check if AppArmor is active do:
```bash
sudo aa-status --enabled ; echo $?
```
The output should return 0.
Alternatively run the following command to see the loaded AppArmor profiles:
```bash
sudo aa-status
```
If for any reason they are not pre-installed continue readng.

#### Installation of AppArmor

First run the following command to install AppArmor tools:
```bash 
sudo apt install apparmor apparmor-utils auditd
```
To enable AppArmor run the followng commands.
sudo mkdir -p /etc/default/grub.d
echo 'GRUB_CMDLINE_LINUX_DEFAULT="$GRUB_CMDLINE_LINUX_DEFAULT apparmor=1 security=apparmor"' \
  | sudo tee /etc/default/grub.d/apparmor.cfg
sudo update-grub
sudo reboot
```
Then run the following command to inspect the current state:
```bash 
sudo aa-status
```
will list all loaded AppArmor profiles for applications and processes and detail their status (enforced, complain, unconfined). 
Also run the following command:
```bash 
ps auxZ | grep -v '^unconfined'
```
To install profile run the following commands:
```bash
sudo apt install apparmor-profiles-extra apparmor-profiles
```
Or click the following link https://udd.debian.org/cgi-bin/bts-usertags.cgi?user=pkg-apparmor-team@lists.alioth.debian.org

AppArmor profiles live in /etc/apparmor.d/. One can use apparmor_parser(8) to insert them into the kernel. This is done automatically when installing packages that drop policy in /etc/apparmor.d/.

For example, to set all "extra" profiles (provided in the apparmor-profiles package) to complain mode (except deny rules that are silently enforced, security policy is not enforced and access violations are logged), do the following:
```bash
cd /usr/share/doc/apparmor-profiles/extras
cp -i *.* /etc/apparmor.d/

for f in *.* ; do aa-complain /etc/apparmor.d/$f; done
```
To set these profiles to enforce mode, use aa-enforce instead of aa-complain. Beware though: many of these profiles are not up-to-date and will break functionality in enforce mode (and possibly even in complain mode); only enforce them if you're ready to improve them upstream. 

#### Disable AppArmor

Disable AppArmor

First, you can disable individual profiles with aa-disable.

But if you want to entirely disable AppArmor on your system, run:
```bash
sudo mkdir -p /etc/default/grub.d
echo 'GRUB_CMDLINE_LINUX_DEFAULT="$GRUB_CMDLINE_LINUX_DEFAULT apparmor=0"' \
  | sudo tee /etc/default/grub.d/apparmor.cfg
sudo update-grub
sudo reboot
```

#### Debug AppArmor

The aa-notify command, from the apparmor-notify package, is able to provide a desktop notification whenever a program causes a DENIED message in /var/log/kern.log. Grant yourself read permissions for /var/log/kern.log by joining the adm group:
```bash
sudo adduser "$USER" adm 
```
Then aa-notify should automatically start the next time you login (using /etc/xdg/autostart/apparmor-notify.desktop). If it doesn't, start it manually:
```bash
aa-notify -p 
```
If you use auditd, you should start aa-notify like this:
```bash
sudo aa-notify -p -f /var/log/audit/audit.log
```

Diagnose if a bug might have been caused by AppArmor

The apparmor-utils package provides many useful commands to debug AppArmor.

Find out if AppArmor is enabled. This will return Y if true.
```bash
cat /sys/module/apparmor/parameters/enabled 
```
Find out which profiles are enabled
```bash
sudo aa-status
```
This will list all loaded AppArmor profiles for applications and processes and detail their status (enforced, complain, unconfined). 
```bash
ps auxZ | grep -v '^unconfined'
```
will list running executables which are currently confined by an AppArmor profile. 
Sometimes, it's useful to disable a profile and to test again if the bug persists:
```bash
sudo aa-disable /etc/apparmor.d/$profile  
```
e.g. sudo aa-disable /etc/apparmor.d/usr.bin.pidgin One can re-enable the profile like this:  sudo aa-enforce /etc/apparmor.d/$profile  
Verify the logs
```bash
sudo tail -f /var/log/syslog | grep 'DENIED'  
```
or (if auditd is installed):  sudo tail -f /var/log/auditd/auditd.log | grep 'DENIED' The "DENIED" lines should provide more information on what concrete process or access to the file system has been denied.

Output a list of processes with tcp or udp ports that do not have AppArmor profiles loaded
```bash
sudo aa-unconfined 
```
also possible with the --paranoid parameter 

Profiles in complain mode will send ALLOWED lines in the logs for entries that would normally be DENIED in enforce mode. You can use this to tweak configs before turning them on in enforce mode. 
&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 

