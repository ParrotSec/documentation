			
			Welcome to Parrot

This system has its own quirks and maybe you want to change something and 
haven't figured it out or did something on accident and need to undo it.
_________________________________________________________________________
				Helpme! 
	"For when you've lost your shit and can't get it up!"
_________________________________________________________________________

-Important commands to remember-

sudo parrot-upgrade
OR
sudo apt update
sudo apt full-upgrade

DO NOT USE apt upgrade It causes all sorts of problems.

		     General things to remember
_________________________________________________________________________
Written by s1udge (with lots of stuff from people smarter than him).
Contributors: meu, Palinuro, and KidKlown
Rendered in less if on Parrot. v0.0.2
_________________________________________________________________________

For help with less type h or H. 
q to quit and come back here or exit.

man NAME-OF-STUFF-YOU-WANT-TO-KNOW /* is great for learning things you
don't know if said item is installed. For all others there's google.*/

-All Linux versions work like an upside down tree. / is the very begining, 
hence it is the root directory, also why root is also the godmode for users. 
/etc/ is your friend as it contains a lot of configuration files.
-Global environment variables are stored in 
/etc/environment
-Git commit errors generally take another commit to fix.
select-editor to change editors globally.
-After setting up your repo ensure you remote add origin YOURSITE.git or 
life will suck.

---------------------------------------------------------------------------
			     Troubleshooting
---------------------------------------------------------------------------
Can't install, wanna be like linux guy Paul, maybe raching for the lighter 
fluid to burn it all. 

-Don't touch that dial . . er . fluid. Read me instead.

uname -a (print system information)
cat /etc/*-release (print to screen all distribution-specific information)
cat /etc/resolv.conf (displays the DNS information)
cat /etc/network/interfaces (displays the network interface configuration)
cat /etc/hosts (static values for hostname lookups)
lspci (list all PCI devices)
lsusb (list USB devices)
dmesg (print or control the kernel ring buffer)
lsmod (show the status of modules in the Linux kernel)
ls -lisart /var/log (the location of the actual logfiles)
sudo netstat -pentu (check network connections)

If your screen is frozen clap your hands. . .clap . clap
If your screen is frozen clap your hands. . .clap . clap
If your screen is really frozen and your feelin pretty fucked clap your 
hands 
Ok try:
CTRL+ALT+F1(or any of the F-number which go to a tty.)
If it works login and open
htop
htop will open a colorful task manager where you can hopefully identify the 
souless problem program and burn his ey- I mean kill the program with either
15 or 7 for immediate termination.
***************************************************************************
			------Git shortcuts------
***************************************************************************

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

***************************************************************************
			\/Random Linux Commands\/
-*************************************************************************-

whereis FILENAME /*tells you where the file is and all paths*/
ps -o 'cmd=' -p $(ps -o 'ppid=' -p $$) /*use to find the actual 
terminal as they often just say xterm256*/
$SHELL /*to find what shell you run*/
printenv /*to print environment variable of the system*/
env /* environment variables*/
dpkg -s PACKAGE-LOOKING-4 /*shows whether a package is installed*/
tar -cf $HOME/backup.tar -C $HOME YOURFILES /*a technique to back up stuff 
in your home dir to a tar file.*/
tar xvf FILENAME.tar.gz -C /DIR/YOU/WANT /* x=extract v=verbose (will list 
all the files) z=uncompress (if you compressed it) f=means you will provide
the file name -C=means you want to specify what directory they go. */
see below for more info or search manpages.
https://www.interserver.net/tips/kb/extract-tar-gz-files-using-linux-command-line/
apropos /* used to search manpages globally.*/
locate FILENAME /* only works if you ensure it's database is updated. use:*/
updatedb /*to update the locate database*/
-use cron jobs to simplify your life.
clamAV, rtkit, and others should be cron jobs which automatically execute.
-Common Commands (copied from meu)
ls (list directory contents)
cat (concatenate files and print on the standard output)
id (print real and effective user and group IDs)
ifconfig (configure a network interface)
route -n (show/manipulate the IP routing table)
ss -ut (show open UDP/TCP sockets)

-*************************************************************************-
				GPG stuff
***************************************************************************

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

---------------------------------------------------------------------------
				SSH stuff
---------------------------------------------------------------------------

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

***************************************************************************
		Random env stuff (to make you feel at home)
***************************************************************************
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

***************************************************************************
			VSCodium settings and shortcuts
***************************************************************************

    Ctrl+Shift+P brings up the command palette
           try ? to get a list of commands
    Ctrl+P will let you navigate to any file or symbol by typing its name
    Ctrl+Shift+Tab will cycle you through the last set of files opened
    Ctrl+Shift+P will bring you directly to the editor commands
    Ctrl+Shift+O will let you navigate to a specific symbol in a file
    Ctrl+G will let you navigate to a specific line in a file

***************************************************************************
				Vim/Neovim/Nvim
***************************************************************************

ESC then : then q! /* if this is your first time. Now if you want to use 
vim type in vimtutor to terminal and complete it, you virgin!
Or use other text editors because you can like Emacs or nano*/
Neovim works off of vim with some "enhancements" (it crashed on me within 
45 seconds last time I used it but when it's stable I'm sure it will be 
awesome.)

***************************************************************************
			*--All things Hardware--*
***************************************************************************
journalctl is your friend to check the issues of the day
journalctl | grep "CURRENT-DAY" > NEW-FILE /*this will send the days
journal to a file you named so you can sift through it. Or you can sent it
to less instead of greping it.*/
Normal drives can be checked with smartctl:

sudo apt install smartmontools
sudo smartctl -h /*then use as needed.*/

NVMe drives can be checked with nvme-cli. It can be installed with:
sudo apt install nvme-cli

Then list the NVMes installed:
sudo nvme list

Under ‘Node’ you will see a mount path for each drive something like 
‘/dev/nvme0n1’, to access the smart-log you would type in the following:
sudo nvme smart-log /dev/nvme0n1

Machine Check Exceptions are hardware failure events and can be logged with 
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