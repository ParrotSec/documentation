# SU - SUDO

In GNU/Linux there is a user called root. This user is special, he is the system administrator. Root can do everything in a GNU /Linux system, for this reason it is very dangerous to work constantly with that user. We could write a command incorrectly and cause an error in our system. By not using the root account to work normally, we also mitigate the possibility of being affected by a virus. So the correct way to work on a GNU/Linux system is to use a user wih limited privileges.

But there will be tasks for which we need to become root or at least have their privileges, or perhaps what we need is to become another user of the system (it is less frequent but it may be the case).

## The command "su" ##

The **"su"** command is used to become another user. It can be root or it can be another user of the system.

The general way to use it is:

	$su name

But let's see some examples to better understand the operation of this command.

Imagine a session with a common user of the system ("whoami" to know which user I am and "pwd" to see where I am located in the system path):

	┌─[test@parrot]─[~]
	└──╼ $whoami
	test
	┌─[test@parrot]─[~]
	└──╼ $pwd
	/home/test

Now imagine that we want to become the root:

	┌─[test@parrot]─[~]
	└──╼ $su root
	Password: 

It will ask us for the password of the user that we want to become, in this case we should know the root password. It might interest us to become another user, for example test2:

	┌─[test@parrot]─[~]
	└──╼ $su test2
	Password: 

We see that we have simply changed the name of the user we want to become to. In any case, it will request the password of such user. Not ours, but the user in which we want to become If it is root, the root password. If it is test2, the test2 password.

Among the options we can use with "su" (man 1 su), there is one to become the user but with all its "enviroment" as if we had logged into the system. This option is "-" or "-l". That is, we will have all the environment variables of that user, but without using the option we will not necessarily have them:

	┌─[✗]─[test@parrot]─[~]
	└──╼ $whoami
	test
	┌─[test@parrot]─[~]
	└──╼ $pwd
	/home/test
	┌─[test@parrot]─[~]
	└──╼ $su root
	Password: 
	┌─[root@parrot]─[/home/test]
	└──╼ #whoami
	root
	┌─[root@parrot]─[/home/test]
	└──╼ #pwd
	/home/test
	┌─[root@parrot]─[/home/test]
	└──╼ #exit
	exit

The "exit" command ends the session.

As you will see, now we execute a "full" root login, positioning ourselveseven in root $HOME.

	┌─[test@parrot]─[~]
	└──╼ $whoami
	test
	┌─[test@parrot]─[~]
	└──╼ $pwd
	/home/test
	┌─[test@parrot]─[~]
	└──╼ $su - root
	Password: 
	┌─[root@parrot]─[~]
	└──╼ #pwd
	/root
	┌─[root@parrot]─[~]
	└──╼ #exit
	logout

NOTE: If we do not indicate the user name, the system will assume that we want to become the root. It will ask us for the root password.

	┌─[test@parrot]─[~]
	└──╼ $su -
	Password: 
	┌─[root@parrot]─[~]
	└──╼ #whoami
	root

NOTE2: If we execute "su" as the root user, we will not be prompted for the password. It is the only user that is not requested and we can become the user we want.

## The command "sudo" ##

The command **"sudo"** allows us to execute tasks like another user, without the need to know the password of such user. It is a way to delegate tasks to other users without the need to give any password (this way you should not share the root password).

## sudoers configuration ##

In order to configure sudo, we mus first have the corresponding package installed:

	┌─[root@parrot]─[~]
	└──╼ #apt install sudo

The configuration file is "/etc/sudoers". We can edit it with our favorite editor or, with the 	"visudo" command. We recommend using this last command since, among other things, it is 	responsible for checking the sysntax of the file once modified by us.
	
	┌─[root@parrot]─[~]
	└──╼ #visudo
	
	#
	# This file MUST be edited with the 'visudo' command as root.
	#
	# Please consider adding local content in /etc/sudoers.d/ instead of
	# directly modifying this file.
	#
	# See the man page for details on how to write a sudoers file.
	#
	Defaults	env_reset
	Defaults	mail_badpass
	Defaults	secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"

	# Host alias specification

	# User alias specification

	# Cmnd alias specification

	# User privilege specification
	root	ALL=(ALL:ALL) ALL

	# Allow members of group sudo to execute any command
	%sudo	ALL=(ALL:ALL) ALL

	# See sudoers(5) for more information on "#include" directives:

	#includedir /etc/sudoers.d

This file exposed above, is the default configuration in ParrotSec.

The line "%sudo ALL = (ALL:ALL) ALL" establishes that any user belonging to the sudo group can execute any command (it is understood that as root).

We will not see more configurations, it has an extensive guide in the manual page sudoers (man 5 sudoers). You can also go to your favorite serach engine and look for sudo examples. But keep in mind that, although in this example we are granting the possibility to a user to execute tasks as root, you could also configure sudo to execute tasks as another user (for example, database user) or that the user could only execute some tasks (and not all) as root. But the example we have is the one described. Users of the sudo group can execute any task as root.

According to what we have seen, we need our user test to be able to execute tasks as root. As we saw, this user must belong to the sudo group. To see the membership of a user we execute the instruction "id" followed by the username.

	┌─[root@parrot]─[~]
	└──╼ #id test
	uid=1001(test) gid=1001(test) groups=1001(test)

We see that the user belongs to the group (groups) test. Let's add the user to the sudo group:

	┌─[root@parrot]─[~]
	└──╼ #usermod -a -G sudo test
	┌─[root@parrot]─[~]
	└──╼ #id test
	uid=1001(test) gid=1001(test) groups=1001(test),27(sudo)

"usermod -a -G user" adds a secondary group to the user.

## Executing commands with sudo ##

To execute commands as root, from our user test, we must put the sudo command before our instructions (man 8 sudo).

Let's see a command previously seen: "whoami". This command returns our username:

	┌─[test@parrot]─[~]
	└──╼ $whoami
	test

What would happen if we executed "sudo whoami" ?. We would be launching "whoami" as the root user, so the answer should be "root".

Let's check it:

	┌─[test@parrot]─[~]
	└──╼ $sudo whoami
	
	We trust you have received the usual lecture from the local System
	Administrator. It usually boils down to these three things:
	
	    #1) Respect the privacy of others.
	    #2) Think before you type.
	    #3) With great power comes great responsibility.
		
	[sudo] password for test: 
	root

When running sudo, it asks for a password. ATTENTION!!! IT IS NOT THE ROOT PASSWORD. It is the password of our user test. Once introduced we see that it returns "root", indicating that we are root. After the return of the prompt, we are again the user test.

Let's see this:

	┌─[test@parrot]─[~]
	└──╼ $sudo whoami
	root
	┌─[test@parrot]─[~]
	└──╼ $whoami
	test

The first time we execute whoami before sudo, that is, we execute it as root. The second time from our user test.

As you can see, this second time I have run sudo, the password of the user test has not been requested. As indicated by the sudoers manual page ("The user may thhen use sudo without a password for a short period of time (15 minutes unless overriden by the timestamp_timeout option)."). We will have 15 minutes in the active session in which we will not be asked for the password.

As we can run any program like any user, if necessary, we could also execute commands like another user (example with test2):

	┌─[test@parrot]─[~]
	└──╼ $sudo -u test2 whoami
	test2

We have seen commands, if I may be a little absurd. But of necessary, our user test could edit some important configuration file for the system, restart a service/system or even change the root password:

	┌─[test@parrot]─[~]
	└──╼ $sudo passwd root
	Enter new UNIX password: 
	Retype new UNIX password: 
	passwd: password updated successfully

In this last example the root password has changed ;-).

## Difference between su and sudo ##

In summary:

`su` --> It makes us another user and we must know the corresponding password.

`sudo` --> It allows us to execute commands like other users and we do not have to know the password of such user.