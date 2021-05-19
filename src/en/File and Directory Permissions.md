## File and Directory Permissions ##

Previously we mentioned that, in Linux, all the files of the system belong to a user and a group. The owner of a file is the user who created it and the main group of this file is the group of the user who created it. For example, in previous chapters we worked with the user "parrot", if this user creates a file, the user "parrot" and the default group of the parrot user, will be the owners of this new file, so the file belongs to the parrot user and the default group of the parrot user. For this reason, we often need to use the "sudo" command to be able to read, modify or execute some files and programs of the system or make changes in the permissions of the files in question.

Let's analyze the output of the command "ls -l"

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ # ls -l archivo.txt 
	-rw-rw-r-- 1 parrot hackers    0    oct 16 12:32 archivo.txt
	drwxr-xr-x 3 parrot hackers  4096   oct 15 16:25 scripts

The output of the command "ls -l" indicates whether it is a file (-) or directory (d), the permissions of the file/directory (rw-rw-r--), the following field (indicates the number of files/directories) user and group to which it belongs (parrot hackers), size (0), last modification date (Oct 16 12:32) and name (file.txt and scripts). Let's stop in the fields, permissions, user and group, and let's focus on the first field (file permissions). In Linux, the permissions management that the users and the groups of users have on the files and the folders, is carried out by means of a simple scheme of three types of permissions:

Read permission, represented by the "r" letter.

Write permission, represented by the "w" letter.

Execution permission, repersented by the "x" letter.

The meanin of these premissions s different for files and folders, then we will explain each of the cases.

In the case of a .txt file, it has the following permissions:

	Owner	Group	Other Users
	r  w  -	r  w  -	r  -  -
This means that all the system users have permissions to read this file, but only the owner and the members of the owner group can make modifications to this file.

To calculate the value of a permit, we will base the sum of its decimal values according to the following correspondence:

--------------------------------------------------
|Permission	|r |w| x |
|-----------------------------------|--|---|----|
|Decimal Value	|4| 2 | 1 |
 ------------------------------------------------
That is, the decimal value for the read permission is 4, the value for write permission is 2 and the value for execution permission is 1. Therefore, the possible values for a permission are the following:

-----------------
|Permission | Value |
|-------------------------------|
|  rwx |   7   |
|---------|------|
|  rw-  |   6   |
|---------|------|
|  r-x    |   5   |
|---------|------|
|  r--     |   4   |
|---------|------|
|  -wx  |   3   |
|---------|------|
|  -w-   |   2   |
|---------|------|
|  --r     |   1   |
|---------|------|
|  ---      |  0   |
 -----------------

Therefore, we come to the following conclusion: 

------------------------
| Permission     |   Value  |
|-----------------------|-------------|
| rwx rwx rwx  |   777      |
|-----------------------|-------------|
| rwx r-x r--        |   754      |
|-----------------------|-------------|
| r-x r- - ----------- |   540      |
 -------------------------------------

Having this clear, we can move to the use of "chmod", which help us managing the files and folders permissions.

Use of chmod

Basic syntax of chmod:

	$ chmod [mode] [permissions] [file or directory]

We have this script folder, in which not all scripts hace the execution permissions.

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rw-r--r-- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxr-xr-x 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxr-xr-x 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rw-r--r-- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

As you can see in the execution of `ls -l scripts/`, some scrpits have execution permissions for all the system users (which is not recommended), while others do not have execution permissioneven for the pwner user. To correct this error we apply the following permissions:

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chmod -R 770 scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrwx--- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxrwx--- 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxrwx--- 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrwx--- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

Now the owner user and the members of the owner group have read, write and execute permissions, while other users of the system do not have access to this file.

Another way to add or remove permissions is using these modes:
\
a --> indicates that it will be applied to all
\
u --> indicates that it will be applied to the user
\
g --> indicates that it will be applied to the group
\
o --> indicates that it will apply to others
\
° --> indicates that the permission is added
\
° --> indicates  that the permission is removed
\
r --> indicates  read permission
\
w --> indicates write permission
\
x--> indicates execution permission
\

The basic syntax for using "chmod" with these modes is as follows:

	# chmod [a | u | g | o] [+ | -] [r | w | x]

That is, to whom the permit is applied, add or remove permission and type pf permit that is to be added or removed.

These would be possible combinations:

- a+r Read permissions for all
- +r As before, if nothing is indicated, 'a' is assumed.
- og-x Removes execution permission from all but the user.
- u+rwx Gives all the permissions to the user.
- o-rwx Remove the permissions fron the others.

Example of use:

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chmod -R og-x scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot hackers  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot hackers  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot hackers  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot hackers 1587 oct 18 01:05 wireless-dos.py

If we analyze the result of the previous execution, we can notice how the execution permissions have been eliminated for all system users, including the members of the owner group, except the owner user, which conserves the read, write and execute permissions.

Use of the command chown

Chwon (Change owner) is another system utility that allows us to make changes to the ownership of the files, it looks like "chmod" but the function it performs is different. As the name implies, it is to change the owner of a file or folder.

Its basic syntax is the following:

	$ chown [options] [owner]: [group (optional)] [files or directories]

Chown options:
\
`-R` --> Recursively changes the owner of the directories along with all its contents.
\
`-v or --verbose` --> Used to show a more descriptive output.
\
`--version` --> See the version number of the program.
\
`-dereference` --> Acts on symbolic links instead of on the destination.
\
`-h or --no-deference` --> In the case of symbolic links, change the owner of the destination instead of the link itself.
\
`--reference` --> Changes the owner of a file, taking as reference the owner of the other.
\

Examples of use:

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot parrot  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot parrot  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot parrot  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot parrot 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chown -R root:root scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #

In the previous example, we can see how the user and group owner of all the files that are in the scripts directory have changed. Let's see an example where we are only going to change the owner use.
	
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chown -R parrot scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #


In the previous example, you can see how the user who owns all the files within the scripts directory changed to parrot.

Use of the command chgrp

The chgrp command is used to change the group to which a file or directory belongs. Its basic sntaxis is the following:

	$ chgrp [options] [file (s)] or [directory (s)]

Options

`-R` -> Recursively changes the group to which the directories belong together with all their contents.

`-v (or --verbose)` -> Used to show a more descriptive output.

`--version` -> See the version number of the program.

`--dereference` -> Acts on symbolic links instead of on the destination.

`-h (or --no-dereference)` -> In the case of symbolic links, change the destination group instead of the link itself.

`--reference` -> Change the group of a file taking as reference the owner of another.

They are practically the same **"chown"** options, with the difference that **"chgrp"** only changes the group that owns files and / or directories, keeping the user owner.

Example of use of chgrp:

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot parrot  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot parrot  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot parrot  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot parrot 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chown -R root:root scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #

In the previous example, we can see how the user and group owner of all the files that are in the scripts directory have changed. Let's see an example where we are only going to change the owner user.

	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 root root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 root root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 root root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 root root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #chown -R parrot scripts/
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #ls -l scripts/
	total 16
	-rwxrw---- 1 parrot root  932 oct 18 01:06 ddos-detect.py
	-rwxrw---- 1 parrot root  235 oct 18 01:06 ping.sh
	-rwxrw---- 1 parrot root  780 oct 18 01:17 wireless-dos-ids.py
	-rwxrw---- 1 parrot root 1587 oct 18 01:05 wireless-dos.py
	┌─[root@parrot-armhf]─[/home/parrot]
	└──╼ #

In the above example, you can see how the group that owns the files wireless-dos-ids.py and wireless-dos.py changed from root to parrot user.