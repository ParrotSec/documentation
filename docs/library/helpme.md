---
title: 'Helpme'
taxonomy:
    category:
        - docs
visible: true
---
To download onto your system, please visit [here](https://nest.parrotsec.org/s1udge/helpme)
			
```text
			Welcome to Parrot

This system has its own quirks and maybe you want to change something and 
haven't figured it out or did something on accident and need to undo it.
______________________________________________________________________________
				Helpme! 
	"For when you've lost your shit and can't get it up!"
______________________________________________________________________________

/**/ denotes regular text after a command typically explaining what the 
command does. -is used for regular text without a command in front of it.

-Important commands to remember-

sudo parrot-upgrade
OR
sudo apt update
sudo apt full-upgrade

/*DO NOT USE*/

apt upgrade

/*It causes all sorts of problems, because Parrot is a rolling distro. For a 
detailed explanation see Debian's apt documentation on apt commands upgrade and 
full-upgrade / dist-upgrade. tl;dr it will only upgrade parts of your system 
and cause systemwide problems which can be a huge pain to fix. (if you do this
don't bother asking for support, just reinstall)*/

		     General things to remember
______________________________________________________________________________
Written by s1udge (with lots of stuff from people smarter than him).
Contributors: meu, Palinuro, KidKlown and KileXt
Rendered in less if on Linux. v0.0.5
______________________________________________________________________________

For help with less type h or H (less is the program rendering this file). 
q to quit and come back here or exit.
pageup pagedown /*Moves up or down in less.*/

-To search within this doc use / then type a word or string and hit enter, 
hit n to go to the next use of that word or string. 

To search manpages open terminal (default ALT+T) and type:
man NAME-OF-STUFF-YOU-WANT-TO-KNOW /* Manpages are great for learning things
you don't know if said item is installed. For all others there's google/
duckduckgo/startpage.*/
If you see something like glob(7) in a manpage the way to pull it up is: 
man 7 glob /* this pulls up glob(7) in man which is not the same as man glob*/
-All Linux versions work like an upside down tree. / is the very begining, 
hence it is the root directory, also why root is the godmode for users. 
/etc/ is your friend as it contains a lot of configuration files.
-Global environment variables are stored in 
/etc/environment
-Git commit errors generally take another commit to fix.
-After setting up your repo ensure you remote add origin YOURSITE.git or 
life will suck.
-APT packages 
- To search for packages in parrot's repositories use:
sudo apt-cache search "PACKAGE-NAME" /* You can also just search for a word
like "info" and then go thru the list until you find the package you want.
-Parrot offers several meta packages.
parrot-devel (preinstalled on Parrot 4.5)
parrot-devel-tools 
parrot-devel-extra
parrot-tools
parrot-tools-full
-to install 
sudo apt install NAME-OF-METAPACKAGE
-To install pip
sudo apt install python-pip
sudo apt install python3-venv python3-pip

Parrot doesn't have a swap file because we use Btrfs as the file system (fs)
normally you want a swap file to act as a buffer when you have little ram 
or when you want to put your system to sleep/hibernate. If you encrypted your
system (and we highly recommend full-disk encryption) then you will see the 
partitions are first written in ext4 encrypted with LUKS and 
LVM as your volume manager
------------------------------------------------------------------------------
			     Troubleshooting
------------------------------------------------------------------------------
Can't install, wanna be like Linux guy Paul. Maybe you're racing for the 
lighter fluid to burn it all. 

-Don't touch that dial . . er . fluid. Read me instead.

uname -a /*print system information*/
cat /etc/*-release /*print to screen all distribution-specific information*/
cat /etc/resolv.conf /*displays the DNS information*/
cat /etc/network/interfaces /*displays the network interface configuration*/
cat /etc/hosts /*static values for hostname lookups*/
lspci /*list all PCI devices*/
lsusb /*list USB devices*/
dmesg /*print or control the kernel ring buffer*/
lsmod /*show the status of modules in the Linux kernel*/
ls -lisart /var/log /*the location of the actual logfiles*/
sudo netstat -pentu /* old but a goody, check network connections*/
sudo journalctl | grep "Jan 31" > FILENAME /* Change date as needed. This
will paste everything from the journal for the day to a file which you can
go thru at your leisure. */
df -T /* to check which filesystems are in use with which partitions.*/
sudo fdisk -l /*  list everything on you partition table (linux uses GPT 
by default but if you see MBR it could be part of the issue) also fdisk by
itself is great to change partitions, just back up all your data first, 
accidents happen :P*/
-Screen frozen? Try this:
CTRL+ALT+F1 /* or any of the F-numbers up to 7 which go to a tty.*/
-If it works login and open htop
htop will open a colorful process manager where you can hopefully identify 
the souless problem program and burn his ey- I mean kill the program with 
either 15 or 7 for immediate termination.
--Systemd stuff
systemctl status SERVICENAME.service /* checks the status of a service*/
systemctl is-active SERVICENAME /*is a service active or not, useful for 
scripts*/


******************************************************************************
			   \/Random Linux Commands\/
-****************************************************************************-

-finding/searching
whereis FILENAME /*tells you where the executible file is and all paths (it 
only searches $PATH and $MANPATH) You can use it to search for binaries, 
manpages or sources with the -b -m and -s options*/
find /DIR/TO/SEARCH/ -name FILENAME /* use this to search for filenames, to
conduct other types of searches change -name to whatever option you need.*/
dpkg -s PACKAGE-LOOKING-4 /*shows whether a package is installed*/
apropos /* used to search manpages globally.*/
locate FILENAME /* only works if you ensure it's database is updated. use:*/
updatedb /*to update the locate database*/

-extracting/compressing
tar -cf $HOME/backup.tar -C $HOME YOURFILES /*a technique to back up stuff 
in your home dir to a tar file.*/
tar xvf FILENAME.tar.gz -C /DIR/YOU/WANT /* x=extract v=verbose (will list 
all the files) z=uncompress (if you compressed it) f=means you will provide
the file name -C=means you want to specify what directory they go. */
see below for more info or search manpages.
https://www.interserver.net/tips/kb/extract-tar-gz-files-using-linux-command-line/

-terminal
ps -o 'cmd=' -p $(ps -o 'ppid=' -p $$) /*use to find the actual 
terminal as they often just say xterm256*/
$SHELL /*to find what shell you run*/
who -u /* who is on system e.g. 
  user  tty#           PID
's1udge tty7 DATE/TIME 1126' to login to different tty CTRL+ALT+F1 thru F7
by default Linux typically puts you on tty7 but if your session freezes 
switching tty's is a great way to fix your issue.*/
htop /*view all processes on system, great if your screen freezes or 
program freezes the screen and you need to find the process id (PID).*/
startx /* Use when you want a graphical display*/ 
ps -a /* report a snapshot of current processes except session leader use
-A for all processes*/
reboot /*reboot your system*/
sudo kill -9 PID-NUMBER /*kill/stop a process can be used to logout of a 
tty if you used it's id. see pkill and pgrep in manpages*/
-use cron jobs to simplify your life.
clamAV, rtkit, and others should be cron jobs which automatically execute.

-common commands (copied from meu)
ls (list directory contents)
cat (concatenate files and print on the standard output)
id (print real and effective user and group IDs)
ifconfig (configure a network interface)
route -n (show/manipulate the IP routing table)
ss -ut (show open UDP/TCP sockets)

-bluetooth (thank you eli from superuser.com and Archlinux)
bluetoothctl /*bluetooth cli utility*/
  power on
  agent on
  default-agent
  scan on
/*Then you should see something like [NEW] Device 00:dd:44:2f:11:93 Sony*/
  scan off
  pair 00:dd:44:2f:11:93 
/* It should verify it is paired*/
  connect 00:dd:44:2f:11:93
/* device should connect if not use or kill pulseaudio*/ 
  disconnect 00:dd:44:2f:11:93
  exit
/* To further troubleshoot*/
systemctl status bluetooth
journalctl -n 20
/* Also ensure pulseaudio is installed*/

******************************************************************************
		Random env stuff (to make you feel at home)
******************************************************************************
printenv /*to print environment variable of the system*/
env /* environment variables*/
mate-session-save /*save your session*/
mate-tweak /*tweak mate-panels/windows etc*/
select-editor /*to change editors globally.*/

change about:config to disable peerconnection for WebRTC (which can leak 
ip's via STUN Requests).
use the following sites to test browser and connection
https://www.perfect-privacy.com/webrtc-leaktest/
https://www.expressvpn.com/webrtc-leak-test
https://test-ipv6.com/
https://dnsleaktest.com/
https://browserleaks.com/webrtc#webrtc-device-id
https://ipleak.org/
https://ipx.ac/run
https://ipleak.net/
https://github.com/expressvpn/expressvpn_leak_testing

******************************************************************************
				Firefox
******************************************************************************
You can modify a lot with your browser. There is such a thing as too much
though and as French girl once told me, too much . . is just too much.
-Basic move around stuff
CTRL+Q /*exit browser*/
CTRL+W /*exit current tab*/
CTRL+D /*bookmark current tab*/
CTRL+B /*open bookmarks*/
CTRL+H /*open history*/
CTRL+T /*new tab*/
CTRL+R /*refresh*/
CTRL+SHIFT+R /*override local cache and refresh*/
CTRL+N /*open new window*/
CTRL+[ CTRL+] /*move back one page, move forward one page*/
ALT+UpArrow ALT+DownArrow /*same as above just different strokes for different
folk*/
ESC /*stop page loading*/
CTRL+L /*puts cursor in search bar*/
CTRL+F /*find within the page*/

******************************************************************************
			------Git shortcuts------
******************************************************************************
- NOTE: A git tutorial is in the works

git init -to build your repo
git push --set-upstream git@WEBSITEYOURPUSHINGTO:YOURUSERNAME/$(git 
rev-parse --show-toplevel | xargs basename).git $(git rev-parse 
--abbrev-ref HEAD)
/*for setting up a remote repo at gitlab*/

git push REMOTENAME BRANCHNAME /*eg origin master or something*/ 
git config --global user.signingkey /* Assign your key to git globally so 
you can sign every repo with the same key. Do NOT do this if you have 
different keys for different repositories!*/

git tag -a NAMEOFTAG -m "commit number" /*making a new tag*/
git tag NAMEOFTAG COMMIT## /*First 10 of commit which tags the commit*/
git tag -s NAMEOFTAG /*sign tag*/
git tag -v NAMEOFTAG /* verify tag*/
git push origin --tags /*if you ever want to send your tags with the 
commits.*/

git pull --all /*super useful if you need to fetch multiple branchs and 
merge them with your local branches.

git remote set-url origin URL-ADDED-HERE /*use if you screw up and upload 
to the wrong place or your website has changed, handy*/ 

git fetch origin /*If you need to drop all your changes and get the 
latest from remote server*/

git add . /*Stages everything*/
git commit -a -S -m 'commit comment with GPG-sig'
git clean -f /* delete all untracked changes in the git repo */
git reset /* used to reset the head or just stage if you added an extra.*/
git revert /* used to unfuck yourself*/
git commit --amend /*fix your comment mistakes*/
git commit -m "leave comments for the commit"
git status /*tells you if any commits need to happen or staged and waiting*/
git log /*gives you the full log of commits w/o much detail*/
git log -p -2 /*gives you the full difference for the last two log 
entries in less*/

git log --stat /*gives you abbreviated changes*/
git log --show-signature -1 /*shows your last commit w/ signature*/
-Also branches can be changed with some work (ensure you are on the branch)

git branch -m NEW-NAME /*changes the name but only locally*/
git push origin :OLD-NAME NEW-NAME /* now the name is changed but you need
one more change.*/

git push origin -u NEW-NAME /* now you've reset the upstream to this name*/
git remote rm REMOTE-NAME /*removes the remote from your list of remotes*/

-webs-
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
https://www.atlassian.com/git/tutorials/undoing-changes
https://sethrobertson.github.io/GitBestPractices/
https://codeinthehole.com/tips/pull-requests-and-other-good-practices-for-teams-using-github/

-****************************************************************************-
				GPG stuff
******************************************************************************

gpg --full-generate-key /* until something better comes along you can 
pick RSA and RSA, then 4096 bit, then never expires, then contact info.
NOTE: gpg should make you a revocation file in ~/.gnupg/openpgp-revocs.d 
or something. when you need to revoke open file with text editor edit out
the colon then save and follow the import, clean and delete cmds*/

gpg --list-keys /* gets your current list of keys*/
gpg --list-secret-keys --keyid-format LONG /* so you can copy your key 
and generate your public key block (the copy will be after 'sec rsa4096/'.

gpg --armor --export KEYNUMBER /*gives you that nice big 
block to verify that this is your key and you signed it! once done copy
and paste into whatever you need to sign and save*/

gpg --import YOURKEYNUMBER.rev /* this will REVOKE your key!! making it 
useless, which is good  . . and bad.*/
gpg --delete-secret-key YOURKEYNUMBER /*deletes you secret key.*/
gpg --delete-key YOURKEYNUMBER /* deletes your public key, always
delete secret first*/
-when you need to access your keys, mount and decrypt usb then export.

export GNUPGHOME=/media/something 
gpg -K
--OR--
gpg --homedir=media/something -K

------------------------------------------------------------------------------
				SSH stuff
------------------------------------------------------------------------------

ssh-keygen -t ed25519 -C "your@email.com" /* Generating your SSH key to SSH
into places. -t is type ed25519 is currently the best encryption you can 
have. -C is comment so you can add your email.
If using git just copy and paste the inside of your .pub where it tells you
on github/gitlab, etc. Then verify it all works.

ssh -T git@git.YOUR-GIT-INSTANCE
- For parrot-home to set up SSH
sudo apt install openssh-server
sudo systemctl enable ssh
sudo service ssh start
- For parrot-security
sudo systemctl enable ssh
sudo service ssh start

******************************************************************************
				   Editors
******************************************************************************
-Pluma
-Pluma is your standard mate-desktop GUI text editor. to call from terminal:
pluma /*If you have issues check your firejail profile*/

-Nano
- NOTE: You can configure nano in /etc/nanorc (with nano!)
sudo nano /etc/nanorc /*because it is outside your home dir.*/
CTRL+G /*Show help/shotcuts*/
CTRL+C /*Shows current line*/
CTRL+X /*exit, it will ask to save if you made changes*/
CTRL+S /*Save*/
CTRL+K /*Cut*/
CTRL+u /*Paste/uncut*/

-Vi/Vim/Neovim/nvim
-Note Vim (and variants) are modal editors meaning they have two modes the 
following commands are for if you accidently open vim and need to exit:  
ESC 
:
q! 
/* If this is your first time. Now if you want to use vim type in: 
vimtutor 
/*on a terminal and complete it.Or use other text editors because 
you can, like emacs or nano. Neovim works off of vim with some "enhancements"
(it crashed on me within 45 seconds last time I used it but when it's stable 
I'm sure it will be awesome.)*/

-Emacs
-Emacs uses modifier keys (shift, ctrl, alt/option, super/meta/cmd) to get 
things done.
http://www.rgrjr.com/emacs/emacs_cheat.html

******************************************************************************
			Shells and Terminal Emulators
******************************************************************************
-mate-terminal is the default for Parrot Linux and is shown in color through

ALT+T /*is the standard keyboard shortcut for opening a terminal.*/
alias /*lists all aliases*/
-Parrot's default terminal is bash. 
.bashrc is where the settings for most things bash are kept. Parrot doesn't
use profiles. if you make changes to bashrc and you want them to show in the
same terminal use:
source ~/.bashrc /*which will basically refresh your changes to your current 
terminal instance*/
.bash_aliases is where aliases are kept

******************************************************************************
			*--All things Hardware--*
******************************************************************************
journalctl is the systemd journal
-journalctl is your friend to check the issues of the day
journalctl | grep "CURRENT-DAY" > NEW-FILE /*this will send the days
journal to a file you named so you can sift through it. Or you can sent it
to less instead of greping it.*/
Normal drives (SATA) can be checked with smartctl:

sudo apt install smartmontools
sudo smartctl -h /*then use as needed.*/

-NVMe drives can be checked with nvme-cli. It can be installed with:

sudo apt install nvme-cli

-Then list the NVMes installed:
sudo nvme list

-Under ‘Node’ you will see a mount path for each drive something like 
‘/dev/nvme0n1’, to access the smart-log you would type in the following:

sudo nvme smart-log /dev/nvme0n1

-Machine Check Exceptions are hardware failure events and can be logged with 
rasdaemon.service to journalctl. To install:

sudo apt install rasdaemon
/*verify rasdaemon is active*/

systemctl status rasdaemon
/*Then, after the system has crashed or been used for a period of time, 
take a look at the log:*/

journalctl -f -u rasdaemon
/*If there is no log or the log is empty, then the crash isn’t related to 
a hardware failure. The log will stay empty until a MCE happens. Take a 
look for “uncorrected” errors, as most “corrected” errors can be ignored. 
If there are a consistent number of “uncorrected” errors, the hardware 
should be examined.*/

To check mem run the memtest86+ which can be done in BIOS/UEFI

******************************************************************************
			VSCodium settings and shortcuts
******************************************************************************
 
    Ctrl+Shift+P /* brings up the command palette*/
           ? /* to get a list of commands*/
    Ctrl+P /* will let you navigate to any file or symbol by typing its name*/
    Ctrl+Shift+Tab /* will cycle you through the last set of files opened*/
    Ctrl+Shift+P /* will bring you directly to the editor commands*/
    Ctrl+Shift+O /* will let you navigate to a specific symbol in a file*/
    Ctrl+G /* will let you navigate to a specific line in a file*/
    Ctrl+B /* toggles the sidebar open/closed*/
    Ctrl+Shift+E /* toggles cursor focus from sidebar/file explorer to 
    window/editor*/
    Ctrl+W /* close window/editor/vscodium (depending on how many times you 
    press it :) */
    Ctrl+PageUp/PageDown /* cycle through all open windows/editor tabs */
    Ctrl+P /* Quick open files (shows recently opened but checks whole 
    workspace)*/
    Ctrl+O /* open file GUI, lets you select the file (useful if file is not 
    in workspace) */
    Ctrl+S /* Save! (you can configure autosave in settings) */
    Ctrl+C/V /* Copy and paste */
    Ctrl+Z/Ctrl+Shift+Z /* undo and redo */
    Ctrl+A /* select all */
    Ctrl+1-9 /* opens blank viewpane/group, if the group is already open it
    simply switches to the last active editor in that group*/
    

-Vscodium is pretty awesome but here are some minor changes you might prefer

-disable preview opening mode (instead of closing the file you just had
when you open a new one, it opens a new editor tab in your window) To disable
File > Preferences > Settings (OR Ctrl+,) > User Settings > Editor 
Management > Enable Preview (uncheck) Enable Preview from QuickOpen (uncheck)
-enable autosave Settings > search 'Auto Save' under User Settings.

Webs
- https://github.com/Microsoft/vscode-tips-and-tricks
- https://github.com/viatsko/awesome-vscode
- https://code.visualstudio.com/docs
______________________________________________________________________________

That's all for now folks! 

v0.0.5 Feb 26 2019
```

&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)