---
title: 'Helpme'
taxonomy:
    category:
        - docs
visible: true
---
To download onto your system, please visit [here](https://nest.parrotsec.org/s1udge/helpme)
<p>			
                        Welcome to Parrot <br>
<br>
This system has its own quirks and maybe you want to change something and <br>
haven't figured it out or did something on accident and need to undo it.<br>
______________________________________________________________________________<br>
				                     Helpme! <br>
	"For when you've lost your shit and can't get it up!" <br>
______________________________________________________________________________<br>
<br>
/**/ denotes regular text after a command typically explaining what the <br>
command does. -is used for regular text without a command in front of it.<br>
<br>
-Important commands to remember-<br>
<br>
sudo parrot-upgrade<br>
OR<br>
sudo apt update<br>
sudo apt full-upgrade<br>
<br>
/*DO NOT USE*/<br>
<br>
apt upgrade<br> 

/*It causes all sorts of problems.*/<br>

		     General things to remember<br>
______________________________________________________________________________<br>
Written by s1udge (with lots of stuff from people smarter than him).<br>
Contributors: meu, Palinuro, and KidKlown<br>
Rendered in less if on Parrot. v0.0.3<br>
______________________________________________________________________________<br>
<br>
For help with less type h or H (less is the program rendering this file). <br>
q to quit and come back here or exit.<br>
pageup pagedown /*Moves up or down in less.*/<br>
<br>
-To search within this doc use / then type a word or string and hit enter, <br>
hit n to go to the next use of that word or string. <br>
<br>
To search manpages open terminal (default ALT+T) and type:<br>
man NAME-OF-STUFF-YOU-WANT-TO-KNOW /* Manpages are great for learning things<br>
you don't know if said item is installed. For all others there's google/<br>
duckduckgo/startpage.*/<br>
If you see something like glob(7) in a manpage the way to pull it up is:<br> 
man 7 glob /* this pulls up glob(7) in man which is not the same as man glob*/<br>
-All Linux versions work like an upside down tree. / is the very begining, <br>
hence it is the root directory, also why root is the godmode for users. <br>
/etc/ is your friend as it contains a lot of configuration files.<br>
-Global environment variables are stored in <br>
/etc/environment<br>
-Git commit errors generally take another commit to fix.<br>
-After setting up your repo ensure you remote add origin YOURSITE.git or <br>
life will suck.<br>
-APT packages <br>
Parrot offers several meta packages.<br>
parrot-devel (preinstalled on Parrot 4.5)<br>
parrot-devel-tools <br>
parrot-devel-extra<br>
parrot-tools<br>
parrot-tools-full<br>
to install <br>
sudo apt install NAME-OF-METAPACKAGE<br>
-To install pip<br>
sudo apt install python-pip<br>
sudo apt install python3-venv python3-pip<br>
<br>
------------------------------------------------------------------------------<br>
			     Troubleshooting<br>
------------------------------------------------------------------------------<br>
Can't install, wanna be like Linux guy Paul. Maybe you're racing for the <br>
lighter fluid to burn it all. <br>
<br>
-Don't touch that dial . . er . fluid. Read me instead.<br>
<br>
uname -a /*print system information*/<br>
cat /etc/*-release /*print to screen all distribution-specific information*/<br>
cat /etc/resolv.conf /*displays the DNS information*/<br>
cat /etc/network/interfaces /*displays the network interface configuration*/<br>
cat /etc/hosts /*static values for hostname lookups*/<br>
lspci /*list all PCI devices*/<br>
lsusb /*list USB devices*/<br>
dmesg /*print or control the kernel ring buffer*/<br>
lsmod /*show the status of modules in the Linux kernel*/<br>
ls -lisart /var/log /*the location of the actual logfiles*/<br>
sudo netstat -pentu /* old but a goody, check network connections*/<br>
sudo journalctl | grep "Jan 31" > FILENAME /* Change date as needed. This<br>
will paste everything from the journal for the day to a file which you can<br>
go thru at your leisure. */<br>
<br>
If your screen is frozen clap your hands. . .clap . clap<br>
If your screen is frozen clap your hands. . .clap . clap<br>
If your screen is really frozen and your feelin pretty fucked clap your <br>
hands <br>
Ok try:<br>
CTRL+ALT+F1 /* or any of the F-numbers up to 7 which go to a tty.*/<br>
If it works login and open htop<br>
htop will open a colorful process manager where you can hopefully identify <br>
the souless problem program and burn his ey- I mean kill the program with <br>
either 15 or 7 for immediate termination.<br>
<br>
******************************************************************************<br>
			------Git shortcuts------<br>
******************************************************************************<br>
<br>
git init -to build your repo<br>
git push --set-upstream git@WEBSITEYOURPUSHINGTO:YOURUSERNAME/$(git<br> 
rev-parse --show-toplevel | xargs basename).git $(git rev-parse <br>
--abbrev-ref HEAD)<br>
/*for setting up a remote repo at gitlab*/<br>
<br>
git push REMOTENAME BRANCHNAME /*eg origin master or something*/ <br>
git config --global user.signingkey /* Assign your key to git globally so <br>
you can sign every repo with the same key. Do NOT do this if you have <br>
different keys for different repositories!*/<br>
<br>
git tag -a NAMEOFTAG -m "commit number" /*making a new tag*/<br>
git tag NAMEOFTAG COMMIT## /*First 10 of commit which tags the commit*/<br>
git tag -s NAMEOFTAG /*sign tag*/<br>
git tag -v NAMEOFTAG /* verify tag*/<br>
git push origin --tags /*if you ever want to send your tags with the <br>
commits.*/<br>
<br>
git pull --all /*super useful if you need to fetch multiple branchs and <br>
merge them with your local branches.<br>
<br>
git remote set-url origin URL-ADDED-HERE /*use if you screw up and upload <br>
to the wrong place or your website has changed, handy*/ <br>
<br>
git fetch origin /*If you need to drop all your changes and get the <br>
latest from remote server*/<br>
<br>
git add . /*Stages everything*/<br>
git commit -a -S -m 'commit comment with GPG-sig'<br>
git clean -f /* delete all untracked changes in the git repo */<br>
git reset /* used to reset the head or just stage if you added an extra.*/<br>
git revert /* used to unfuck yourself*/<br>
git commit --amend /*fix your comment mistakes*/<br>
git commit -m "leave comments for the commit"<br>
git status /*tells you if any commits need to happen or staged and waiting*/<br>
git log /*gives you the full log of commits w/o much detail*/<br>
git log -p -2 /*gives you the full difference for the last two log<br> 
entries in less*/<br>
<br>
git log --stat /*gives you abbreviated changes*/<br>
git log --show-signature -1 /*shows your last commit w/ signature*/<br>
-Also branches can be changed with some work (ensure you are on the branch)<br>
<br>
git branch -m NEW-NAME /*changes the name but only locally*/<br>
git push origin :OLD-NAME NEW-NAME /* now the name is changed but you need<br>
one more change.*/<br>
<br>
git push origin -u NEW-NAME /* now you've reset the upstream to this name*/<br>
git remote rm REMOTE-NAME /*removes the remote from your list of remotes*/<br>
<br>
-webs-<br>
https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History<br>
https://www.atlassian.com/git/tutorials/undoing-changes<br>
https://sethrobertson.github.io/GitBestPractices/<br>
https://codeinthehole.com/tips/pull-requests-and-other-good-practices-for-teams-using-github/<br>
<br>
******************************************************************************<br>
			   \/Random Linux Commands\/<br>
-****************************************************************************-<br>
-finding/searching<br>
whereis FILENAME /*tells you where the executible file is and all paths (it <br>
only searches $PATH and $MANPATH) You can use it to search for binaries, <br>
manpages or sources with the -b -m and -s options*/<br>
find /DIR/TO/SEARCH/ -name FILENAME /* use this to search for filenames, to<br>
conduct other types of searches change -name to whatever option you need.*/<br>
dpkg -s PACKAGE-LOOKING-4 /*shows whether a package is installed*/<br>
apropos /* used to search manpages globally.*/<br>
locate FILENAME /* only works if you ensure it's database is updated. use:*/<br>
updatedb /*to update the locate database*/<br>
-extracting/compressing<br>
tar -cf $HOME/backup.tar -C $HOME YOURFILES /*a technique to back up stuff <br>
in your home dir to a tar file.*/<br>
tar xvf FILENAME.tar.gz -C /DIR/YOU/WANT /* x=extract v=verbose (will list <br>
all the files) z=uncompress (if you compressed it) f=means you will provide<br>
the file name -C=means you want to specify what directory they go. */<br>
see below for more info or search manpages.<br>
https://www.interserver.net/tips/kb/extract-tar-gz-files-using-linux-command-line/<br>
-terminal<br>
ps -o 'cmd=' -p $(ps -o 'ppid=' -p $$) /*use to find the actual <br>
terminal as they often just say xterm256*/<br>
$SHELL /*to find what shell you run*/<br>
who -u /* who is on system e.g. <br>
  user  tty#           PID<br>
's1udge tty7 DATE/TIME 1126' to login to different tty CTRL+ALT+F1 thru F7<br>
by default Linux typically puts you on tty7 but if your session freezes <br>
switching tty's is a great way to fix your issue.*/<br>
htop /*view all processes on system, great if your screen freezes or <br>
program freezes the screen and you need to find the process id (PID).*/<br>
startx /* Use when you want a graphical display*/ <br>
ps -a /* report a snapshot of current processes except session leader use<br>
-A for all processes*/<br>
reboot /*reboot your system*/<br>
sudo kill -9 PID-NUMBER /*kill/stop a process can be used to logout of a <br>
tty if you used it's id. see pkill and pgrep in manpages*/<br>
-use cron jobs to simplify your life.<br>
clamAV, rtkit, and others should be cron jobs which automatically execute.<br>
-common commands (copied from meu)<br>
ls (list directory contents)<br>
cat (concatenate files and print on the standard output)<br>
id (print real and effective user and group IDs)<br>
ifconfig (configure a network interface)<br>
route -n (show/manipulate the IP routing table)<br>
ss -ut (show open UDP/TCP sockets)<br>
-bluetooth (thank you eli from superuser.com and Archlinux)<br>
bluetoothctl /*bluetooth cli utility*/<br>
  power on<br>
  agent on<br>
  default-agent<br>
  scan on<br>
/*Then you should see something like [NEW] Device 00:dd:44:2f:11:93 Sony*/<br>
  scan off<br>
  pair 00:dd:44:2f:11:93 <br>
/* It should verify it is paired*/<br>
  connect 00:dd:44:2f:11:93<br>
/* device should connect if not use or kill pulseaudio*/ <br>
  disconnect 00:dd:44:2f:11:93<br>
  exit<br>
/* To further troubleshoot*/<br>
systemctl status bluetooth<br>
journal -n 20<br>
/* Also ensure pulseaudio is installed*/<br>
<br>
-****************************************************************************-<br>
				GPG stuff<br>
******************************************************************************<br>
<br>
gpg --full-generate-key /* until something better comes along you can <br>
pick RSA and RSA, then 4096 bit, then never expires, then contact info.<br>
NOTE: gpg should make you a revocation file in ~/.gnupg/openpgp-revocs.d <br>
or something. when you need to revoke open file with text editor edit out<br>
the colon then save and follow the import, clean and delete cmds*/<br>
<br>
gpg --list-keys /* gets your current list of keys*/<br>
gpg --list-secret-keys --keyid-format LONG /* so you can copy your key <br>
and generate your public key block (the copy will be after 'sec rsa4096/'.<br>
<br>
gpg --armor --export KEYNUMBER /*gives you that nice big <br>
block to verify that this is your key and you signed it! once done copy<br>
and paste into whatever you need to sign and save*/<br>
<br>
gpg --import YOURKEYNUMBER.rev /* this will REVOKE your key!! making it <br>
useless, which is good  . . and bad.*/<br>
gpg --delete-secret-key YOURKEYNUMBER /*deletes you secret key.*/<br>
gpg --delete-key YOURKEYNUMBER /* deletes your public key, always<br>
delete secret first*/<br>
-when you need to access your keys, mount and decrypt usb then export.<br>
<br>
export GNUPGHOME=/media/something <br>
gpg -K<br>
--OR--<br>
gpg --homedir=media/something -K<br>
<br>
------------------------------------------------------------------------------<br>
				SSH stuff<br>
------------------------------------------------------------------------------<br>
<br>
ssh-keygen -t ed25519 -C "your@email.com" /* Generating your SSH key to SSH<br>
into places. -t is type ed25519 is currently the best encryption you can <br>
have. -C is comment so you can add your email.<br>
If using git just copy and paste the inside of your .pub where it tells you<br>
on github/gitlab, etc. Then verify it all works.<br>
<br>
ssh -T git@git.YOUR-GIT-INSTANCE<br>
- For parrot-home to set up SSH<br>
sudo apt install openssh-server<br>
sudo systemctl enable ssh<br>
sudo service ssh start<br>
- For parrot-security<br>
sudo systemctl enable ssh<br>
sudo service ssh start<br>
<br>
******************************************************************************<br>
		Random env stuff (to make you feel at home)<br>
******************************************************************************<br>
printenv /*to print environment variable of the system*/<br>
env /* environment variables*/<br>
mate-session-save /*save your session*/<br>
mate-tweak /*tweak mate-panels/windows etc*/<br>
select-editor /*to change editors globally.*/<br>
change about:config to disable peerconnection for WebRTC (which can leak <br>
ip's via STUN Requests).<br>
use the following sites to test browser and connection<br>
https://www.perfect-privacy.com/webrtc-leaktest/<br>
https://www.expressvpn.com/webrtc-leak-test<br>
https://test-ipv6.com/<br>
https://dnsleaktest.com/<br>
https://browserleaks.com/webrtc#webrtc-device-id<br>
https://ipleak.org/<br>
https://ipx.ac/run<br>
https://ipleak.net/<br>
https://github.com/expressvpn/expressvpn_leak_testing<br>
<br>
******************************************************************************<br>
			VSCodium settings and shortcuts<br>
******************************************************************************<br>
<br>
    Ctrl+Shift+P /*brings up the command palette*/<br>
           ? /*to get a list of commands*/<br>
    Ctrl+P /*will let you navigate to any file or symbol by typing its name*/<br>
    Ctrl+Shift+Tab /*will cycle you through the last set of files opened*/<br>
    Ctrl+Shift+P /*will bring you directly to the editor commands*/<br>
    Ctrl+Shift+O /*will let you navigate to a specific symbol in a file*/<br>
    Ctrl+G /*will let you navigate to a specific line in a file*/<br>
<br>
******************************************************************************<br>
				   Editors<br>
******************************************************************************<br>
-Vim/Neovim/nvim<br>
<br>
ESC<br>
:<br>
q! <br>
/* If this is your first time. Now if you want to use vim type in:*/ <br>
vimtutor /*on a terminal and complete it.Or use other text editors because <br>
you can, like emacs or nano. Neovim works off of vim with some "enhancements"<br>
(it crashed on me within 45 seconds last time I used it but when it's stable <br>
I'm sure it will be awesome.)*/<br>
<br>
-Nano<br>
CTRL+C /*Shows current line*/<br>
CTRL+X /*exit, it will ask to save if you made changes*/<br>
CTRL+S /*Save*/<br>
CTRL+K /*Cut*/<br>
CTRL+u /*Paste/uncut*/<br>
<br>
-Emacs<br>
<br>
******************************************************************************<br>
			Shells and Terminal Emulators<br>
******************************************************************************<br>
<br>
ALT+T /*is the standard keyboard shortcut for opening a terminal.*/<br>
alias /*lists all aliases*/<br>
-Parrot's default terminal is bash. <br>
.bashrc is where the settings for most things bash are kept. Parrot doesn't<br>
use profiles. if you make changes to bashrc and you want them to show in the<br>
same terminal use:<br>
source ~/.bashrc /*which will basically refresh your changes to your current <br>
terminal instance*/<br>
.bash_aliases is where aliases are kept<br>
<br>
******************************************************************************<br>
			*--All things Hardware--*<br>
******************************************************************************<br>
<br>
-journalctl is your friend to check the issues of the day<br>
journalctl | grep "CURRENT-DAY" > NEW-FILE /*this will send the days<br>
journal to a file you named so you can sift through it. Or you can sent it<br>
to less instead of greping it.*/<br>
Normal drives (SATA) can be checked with smartctl:<br>
<br>
sudo apt install smartmontools<br>
sudo smartctl -h /*then use as needed.*/<br>
<br>
-NVMe drives can be checked with nvme-cli. It can be installed with:<br>
<br>
sudo apt install nvme-cli<br>
<br>
-Then list the NVMes installed:<br>
sudo nvme list<br>
<br>
-Under ‘Node’ you will see a mount path for each drive something like <br>
`/dev/nvme0n1’, to access the smart-log you would type in the following:<br>
<br>
sudo nvme smart-log /dev/nvme0n1<br>
<br>
-Machine Check Exceptions are hardware failure events and can be logged with <br>
rasdaemon.service to journalctl. To install:<br>
<br>
sudo apt install rasdaemon<br>
/*verify rasdaemon is active*/<br>
<br>
systemctl status rasdaemon<br>
/*Then, after the system has crashed or been used for a period of time, <br>
take a look at the log:*/<br>
<br>
journalctl -f -u rasdaemon<br>
/*If there is no log or the log is empty, then the crash isn’t related to <br>
a hardware failure. The log will stay empty until a MCE happens. Take a <br>
look for “uncorrected” errors, as most “corrected” errors can be ignored. <br>
If there are a consistent number of “uncorrected” errors, the hardware <br>
should be examined.*/<br>
<br>
To check mem run the memtest86+ which can be done in BIOS/UEFI<br>
______________________________________________________________________________<br>
<br>
That's all for now folks! <br>
<br>
v0.0.3 Jan 31 2019<br>
</p>
[Parrot Info Home](https://www.parrotsec.org/docs/startpage)