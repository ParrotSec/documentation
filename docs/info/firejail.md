&nbsp;

&nbsp;

&nbsp;

NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)

# Firejail

## What is Firejail

Firejail is a SUID program that reduces the risk of security breaches by restricting the running environment of untrusted applications using Linux namespaces and seccomp-bpf. It allows a process and all its descendants to have their own private view of the globally shared kernel resources, such as the network stack, process table, mount table.

Written in C with virtually no dependencies, the software runs on any Linux computer with a 3.x kernel version or newer. The sandbox is lightweight, the overhead is low. There are no complicated configuration files to edit, no socket connections open, no daemons running in the background. All security features are implemented directly in Linux kernel and available on any Linux computer. The program is released under GPL v2 license.

Firejail can sandbox any type of processes: servers, graphical applications, and even user login sessions. The software includes security profiles for a large number of Linux programs: Mozilla Firefox, Chromium, VLC, Transmission etc. To start the sandbox, prefix your command with “firejail”:
```bash
firejail firefox
```
Firejail uses profiles to set the security protections for each of the applications executed inside of it - you can find the default profiles in /etc/firejail/application.profile. Should you require custom profiles for applications not included, or wish to modify the defaults, you may place new rules or copies of the defaults in the ~/.config/firejail/ directory. You may have multiple custom profile files for a single application, and you may share the same profile file among several applications.

If firejail does not have a profile for a particular application, it uses its restrictive system-wide default profile. This can result in the application not functioning as desired, without first creating a custom, and less restrictive profile. 

## Using Firejail

To execute any application with the default protections of firejail just do the following:
```bash
firejail <application>
```
One time additions can be added as command-line options.For example to activate the seccomp protection you do the following:
```bash
firejail --seccomp <application>
```
You can also use a custom profile for an application.Once you create your profile do the following:
```bash
firejail --profile=/path/to/profile <application>
```

#### Using Firejail by default

To use Firejail by default for all applications for which it has profiles, run the firecfg tool as root:
```bash 
sudo firecfg
```
This creates symbolic links in /usr/local/bin pointing to /usr/bin/firejail, for all programs for which firejail has default profiles. 
To manually map individual applications execute:
```bash
ln -s /usr/bin/firejail /usr/local/bin/<application>
```

#### Enable AppArmor support

There are a number of ways to enable AppArmor confinement on top of a Firejail security profile:

Pass the --apparmor flag to Firejail in the command line, e.g. $ firejail --apparmor firefox
Use a custom profile.
Enable Apparmor globally in /etc/firejail/globals.local and disable as needed through the use of ignore apparmor in /etc/firejail/<ProgramName>.local.

#### Verifying Firejail is being used
```bash
firejail --list or firejail --tree
```
The above commanbds will output some profiles if Firejail is active.

## Creating custom profiles

#### Whitelists and Blacklists

Blacklists are permissive:
Permit everything not explicitly forbidden: blacklist <location/file>
Permit file or location in any later blacklist: noblacklist <location/file>

Whitelists are restrictive:
Forbid everything not explicitly permitted: whitelist <location/file>
Forbid file or location in any later whitelist: nowhitelist <location/file>

#### Profile writing

The basic process is:
1. Copy the default profile (which uses blacklists) to your work folder and give it a unique name:
2. Change the line include /etc/firejail/default.local to include /etc/firejail/ProfileName.local
3. Gradually comment/uncomment the various options while checking at each stage that the application runs inside the new sandbox
4. Desirable options not available in the copied default profile can be found by consulting the manual
5. [Build a whitelist](https://firejail.wordpress.com/documentation-2/building-whitelisted-profiles/) of permitted locations. For portability, it may be advisable to place at least some of this list it in a .local file
6. Test the profile for security holes, see below on a small how to
7. Once satisfied, copy your new profile to either /etc/firejail/ or ~/.config/firejail/

You may find the following to be useful:
```bash
firejail --debug $OtherOptions $PathToProfile $Program > $PathToOutputFile 
```
Gives a detailed breakdown of the sandbox
```bash
firejail --debug-caps 
```
gives a list of caps supported by the current Firejail software build. This is useful when building a [caps whitelist](https://l3net.wordpress.com/2015/03/16/firejail-linux-capabilities-guide/).
```bash
firejail --help 
```
for a full list of --debug options
firemon PID monitors the running process. See firemon --help for details
[checksec](https://packages.debian.org/buster/checksec) may also be useful in testing which standard security features are being used

Note:
The idea is to be as restrictive as possible, while still maintaining usability. This may involve sacrificing potentially dangerous functionality and a change in cavalier work habits.
By default, seccomp filters work on a blacklist (which can be found in the manual). It is possible to use seccomp.keep to build a custom whitelist of filters for an application. [[1]](https://firejail.wordpress.com/documentation-2/seccomp-guide/).
The list of possible options for a firejail profile is extensive, and users should consult the firejail-profile(5) man page.

#### Persistent local customisation

The standard profile layout now includes the capability to make persistent local customisations through the inclusion of .local files. Basically, each officially supported profile contains the lines include /etc/firejail/ProgramName.local and include /etc/firejail/globals.local. Since the order of precedence is determined by which is read first, this makes for a very powerful way of making local customisations. For example, with reference this [firejail question](https://github.com/netblue30/firejail/issues/1510#issuecomment-326443650), to globally enable Apparmor and disable Internet connectivity, one could simply create/edit /etc/firejail/globals.local to include the lines
```bash
# enable Apparmor and disable Internet globally
net none
apparmor
```

Then, to allow, for example, "curl" to connect to the internet, yet still maintain its apparmor confinement, one would create/edit /etc/firejail/curl.local to include the lines.
```bash
# enable internet for curl
ignore net
```

Since curl.local is read before globals.local, ignore net overrides net none, and, as a bonus, the above changes would be persistent across future updates.
#### Testing profiles

Firejail's built in audit feature allows the user to find gaps in a security profile by replacing the program to be sandboxed with a test program. By default, firejail uses the faudit program distributed with Firejail. (Note: A custom test program supplied by the user can also be used.) Examples:
Run the default audit program: 
```bash
firejail --audit firefox
```
Run a custom audit program: 
```bash
firejail --audit=~/sandbox-test firefox
```

In the examples above, the sandbox configures the firefox profile and starts the test program. The real program, firefox, will not be started.
Note: The audit feature is not implemented for --x11 commands.

#### Firejail with Xephyr

Xephyr will allow you to sandbox Xorg. If you want to be able to resize windows, install a window manager such as Openbox.

xephyr-screen WidthxHeight can be set in /etc/firejail/firejail.config where Width and Height are in pixels and based on your screen resolution.

To open the sandbox:
```bash
firejail --x11 --net=device openbox
```

*device* is your active network interface. Then right click and select your applications to run.
Note: If you use Unbound, dnsmasq, Pdnsd or any other local cache as your resolver on 127.0.0.1 for example, you would leave --net=device out of the command as your network should work automatically.

A great guide can be found on the [Firejail Wordpress.](https://firejail.wordpress.com/documentation-2/x11-guide/#configurexephyr)

According to the guide:

    The sandbox replaces the regular X11 server with Xpra or Xephyr server. This prevents X11 keyboard loggers and screenshot utilities from accessing the main X11 server.

Note that the statement:

    The only way to disable the abstract socket @/tmp/.X11-unix/X0 is by using a network namespace. If for any reasons you cannot use a network namespace, the abstract socket will still be visible inside the sandbox. Hackers can attach keylogger and screenshot programs to this socket.

is incorrect, xserverrc can be edited to -nolisten local which disables the abstract sockets of X11 and helps isolate it.

#### Sandboxing a browser

Openbox can be configured to start a certain browser at startup. program.profile is the respective profile contained in /etc/firejail, and --startup "command" is the command line used to start the program. For example, to start Chromium in the sandbox:
```bash
firejail --x11 --profile=/etc/firejail/firefox.profile openbox --startup "firefox"
```
## Tips and tricks

#### Private mode

Firejail also includes a one time private mode, in which no mounts are made in the chroots to your home directory. In doing this, you can execute applications without performing any changes to disk. For example, to execute okular in private mode, do the following:
```bash
firejail --seccomp --private okular
```

#### Troubleshooting

Some applications do not work properly with Firejail, and others simply require special configuration. In the instance any directories are disallowed or blacklisted for any given application, you may have to further edit the profile to enable nonstandard directories that said application needs to access. One example is wine; wine will not work with seccomp in most cases.

Other configurations exist; it is suggested you check out the man page for firejail to see them all, as firejail is in rapid development.
Remove Firejail symbolic links

To remove Firejail created symbolic links (e.g. reset to default):
```bash
firecfg --clean
```

Verify if any leftovers of Desktop entries are still overruled by Firejail.

#### Desktop files

Some GUI application launchers (.desktop files) are coded using absolute paths to an executable, which circumvents firejail's symlink method of ensuring that it is being used. The firecfg tool includes an option to over-ride this on a per-user basis by copying the .desktop files from /usr/share/applications/*.desktop to ~/.local/share/applications/ and replacing the absolute paths with simple file names.
```bash
firecfg --fix
```

There may be cases for which you need to manually modify the EXEC line of the .desktop file in ~/.local/share/applications/ to explicitly call Firejail.

#### PulseAudio

Note: Using PulseAudio version 9.0 or later should fix this issue.

If Firejail causes PulseAudio issues with sandboxed applications [[2]](https://firejail.wordpress.com/support/known-problems/#pulseaudio), the following command may be used:
```bash
firecfg --fix-sound
```

This commands creates a custom ~/.config/pulse/client.conf file for the current user with enable-shm = no and possible other workarounds.

#### Hidepid

If you have hidepid installed, Firemon can only be run as root. This, among other things, will cause problems with the Firetools GUI incorrectly reporting "Capabilities", "Protocols" and the status of "Seccomp". See [[3]](https://github.com/netblue30/firejail/issues/1564)

#### Proprietary Nvidia drivers

Some users report problems when using Firejail and proprietary graphic drivers from NVIDIA (e.g. [[4]](https://github.com/netblue30/firejail/issues/1753), [[5]](https://github.com/netblue30/firejail/issues/879) or [[6]](https://github.com/netblue30/firejail/issues/841). This can often be solved by disabling the noroot Firejail option in the application's profile file.

See also
[Firejail GitHub project page[(https://github.com/netblue30/firejail)]
&nbsp;

[Using Parrot](https://docs.parrot.sh/info/start/) | [Troubleshooting](https://docs.parrot.sh/trbl/start/) | [Linux Beginner Guide](https://docs.parrot.sh/library/lbg-basics/) | [Home](https://docs.parrot.sh/)