# Troubleshooting Tor

## About Tor Browser

Tor Browser uses the Tor network to protect your privacy and anonymity. Using the Tor network has two main properties:

    Your internet service provider, and anyone watching your connection locally, will not be able to track your internet activity, including the names and addresses of the websites you visit.

    The operators of the websites and services that you use, and anyone watching them, will see a connection coming from the Tor network instead of your real Internet (IP) address, and will not know who you are unless you explicitly identify yourself.

In addition, Tor Browser is designed to prevent websites from “fingerprinting” or identifying you based on your browser configuration.

By default, Tor Browser does not keep any browsing history. Cookies are only valid for a single session (until Tor Browser is exited or a New Identity is requested).

### How Tor works

Tor is a network of virtual tunnels that allows you to improve your privacy and security on the Internet. Tor works by sending your traffic through three random servers (also known as relays) in the Tor network. The last relay in the circuit (the “exit relay”) then sends the traffic out onto the public Internet.

![How Tor works](https://tb-manual.torproject.org/static/images/how-tor-works.png)

The image above illustrates a user browsing to different websites over Tor. The green middle computers represent relays in the Tor network, while the three keys represent the layers of encryption between the user and each relay.

## Troubleshooting

### 'SIGNATURE VERIFICATION FAILED' error

When starting Tor Browser you may see the following error:

![SVF](https://i.ibb.co/6PWxpK7/photo-2019-01-05-23-28-53-3.jpg)

This is due to an outdated key for verifying the torbrowser-launcher download. Try:
```bash
gpg --homedir "$HOME/.local/share/torbrowser/gnupg_homedir/" --refresh-keys --keyserver pgp.mit.edu
```
Now relaunch Tor Browser.

### Use bridges

#### About bridges

 Bridge relays (or "bridges" for short) are Tor relays that aren't listed in the main Tor directory. Since there is no complete public list of them, even if your ISP is filtering connections to all the known Tor relays, they probably won't be able to block all the bridges. If you suspect your access to the Tor network is being blocked, you may want to use bridges.

The addition of bridges to Tor is a step forward in the blocking resistance race. It is perfectly possible that even if your ISP filters the Internet, you do not require a bridge to use Tor. So you should try to use Tor without bridges first, since it might work. 
To use a bridge, you have two options. Tor Browser now provides some bridges by default. You can enable these easily. Unfortunately, because these bridges are publically distributed, it is easy for censors to block some of them, so some of them may not work. In this case, you'll need to locate different bridges. Furthermore, you'll need to configure Tor Browser with whichever bridge address you intend to use. If your Internet connection requires the use of a proxy, you'll probably need to configure Tor Browser to use it first. If you don't think you need to configure a proxy for your Internet connection, you probably don't. Give it a try and if you have issues, ask us for help. 

#### Understanding a bridge line configuration

 As an example, when you obtain a bridge from https://bridges.torproject.org, you'll get a bridge entry that looks like the following:


    141.201.27.48:443 4352e58420e68f5e40bf7c74faddccd9d1349413
    
    

Understanding the components of a bridge line isn't strictly required but may prove useful. You can skip this section if you'd like.
The first element is the IP address of the bridge: '141.201.27.48'
The second element is the port number: '443'
The third element, the fingerprint (unique identifier of the bridge), is optional: '4352e58420e68f5e40bf7c74faddccd9d1349413'

 If your bridge line looks like this:


    obfs4 141.201.27.48:420 4352e58420e68f5e40bf7c74faddccd9d1349413
    
    

The first element is the name of the pluggable transport technology used by the bridge. For example, in the case above, the bridge is using the obfs4 pluggable transport.

#### Pluggable transports

Over the last few years, censors have found ways to block Tor even when clients are using bridges. They usually do this by installing special boxes at ISPs that peek into network traffic and detect Tor; when Tor is detected they block the traffic flow.

To circumvent such sophisticated censorship Tor introduced pluggable transports. These transports manipulate all Tor traffic between the client and its first hop such that it is not identifiable as a Tor connection. If the censor can't decide if the connection is a Tor connection, then they are less likely to block it.

Sadly, pluggable transports are not immune to detection, if a censor is given enough time. In the past, we promoted obfs and obfs2 as safe transports. These are now deprecated and were replaced by obfs3, scramblesuit, fte, and obfs4.

Bridges which support pluggable transports can be used with Tor Browser easily. Tor Browser includes some pre-configured bridges and you can get more from BridgeDB, if those don't work.

#### Usng PTs to bypass censorship

![PT](https://www.torproject.org/images/PT/2016-07-how-to-use-PT.png)

### Using bridges with Tor 

#### Adding bridges in Tor Browser when Tor does not work 

Sometimes Tor does not work due to a silly mistake rather than your ISP interfering with your Internet connection.

1) To add a bridge, follow the instructions on screen. Click the "Configure" button. 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-startup.png)

2) Proxy and Censorship prevention settings are now on one page. If your Internet Service Provider (ISP) blocks or otherwise censors connections to the Tor Network, tick this checkbox. 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-network-settings.png)

3) If you must configure a proxy then, activate the second checkbox and enter the details. 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-proxy.png)

4) Now you have three configuration options. You can use bridges which are preconfigured and provided with Tor Browser, you can specify your own bridge(s), or request bridges.
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bridges.png)

5a) If you want to use one of the provided bridges, then choose one of the offered transport types. obfs4 is currently recommend, but depending on where you are located another one may work better for you. If you have any questions, please contact us.
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bridges-provided.png)

5b) If none of the provided bridges works for you, try to request one: 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-connect.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-captcha.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-success.png)

5c) To use a custom bridge select "Provide a bridge I know". 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-provide-bridge.png)

6) After you decide which bridges you want to use, click "Connect". Tor should now be able to load successfully and the browser window should appear.
![bridge](https://www.torproject.org/images/tb-frontpage.png)

#### Troubleshooting bridges 

Sometimes the bootstrapping gets stuck at some point, for example when a bridge went offline, the connection is blocked, or when the Pluggable Transport is hit by a bug. 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bootstrap.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bootstrap-failed.png)
 Ideally it works after some tries, using a different bridge, or restarting the browser. If not, remove the Tor Browser folder and extract the archive again. It should work now. If it still fails, we want to hear from you!

#### Adding bridges in Tor Browser when Tor does work

The following instructions assume Tor Browser successfully loads and you are able to surf the web. If you do not see the web browser when you run Tor Browser (like in step (1) below), you may need to follow the instructions above.

1) Start Tor Browser:
![bridge](https://www.torproject.org/images/tb-frontpage.png)

2) To begin using bridges, open Tor Browser's Network Settings:
![bridge](https://www.torproject.org/images/tb-tor-button-menu.png)

3) Select "My Internet Service Provider (ISP) blocks connections to the Tor network":
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bridges.png)

4) Now you have three configuration options. You can use bridges which are preconfigured and provided with Tor Browser, you can request new bridges, or specify your own bridge(s).
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bridges.png)

5a) If you want to use one of the provided bridges, then choose one of the offered transport types. obfs4 is currently recommend, but depending on where you are located another one may work better for you. If you have any questions, please contact us.
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-bridges-provided.png)

5b) If none of the provided bridges works for you, try "Request a bridge from torproject.org" 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-connect.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-captcha.png)
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-request-bridges-success.png)

5c) To use a custom bridge select "Provide a bridge I know". 
![bridge](https://www.torproject.org/images/bridges/tb-tor-launcher-provide-bridge.png)

 Tor will only use one bridge at a time, but it is good to add more than one bridge so you can continue using Tor even if your first bridge becomes unavailable. 

#### Finding more bridges for Tor

 If you need to get bridges, you can get a bridge by visiting https://bridges.torproject.org/ with your web browser.

You can also get bridges by sending mail to bridges@bridges.torproject.org with the line "get bridges" by itself in the body of the mail. You'll need to send this request from a Gmail, Riseup!, or Yahoo! account, though — we only accept these providers because otherwise we make it too easy for an attacker to make a lot of email addresses and learn about all the bridges. Almost instantly, you'll receive a reply that includes:

    Here are your bridges:

     60.16.182.53:9001
     87.237.118.139:444
     60.63.97.221:443

    

Similarly, if you need bridges with a specific pluggable transport, the process is just as easy. First, decide which type you want. Currently we provide obfs2, obfs3, obfs4, scramblesuit, and fte. If you don't know which one you should choose, then obfs4 is usually a good choice. Send an email to bridges@bridges.torproject.org with "get transport obfs4" by itself in the body of the email (replace "obfs4" with whichever pluggable transport you want to use). You should receive an email like this:

    Here are your bridges:

      obfs4 60.16.182.53:9001 cc8ca10a63aae8176a52ca5129ce816d011523f5
      obfs4 87.237.118.139:444 0ed110497858f784dfd32d448dc8c0b93fee20ca
      obfs4 60.63.97.221:443 daa5e435819275f88d695cb7fce73ed986878cf3
    

Once you've received the email with bridge information, you can continue the configuration steps outlined above. 

#### Verifying you are using a bridge

Open a terminal and open nyx:
```bash
nyx
```

If you are connected to a bridge the following will indicate:
```bash 
"192.168.0.1 UNKNOWN 1 / Guard" in circuit information
```
If you are directly connecting to the public Tor network (without using a Tor Bridge), you should see the real IP and Nickname of the Guard instead.

#### How do I set up logging, or see Tor's logs?

You'll have to go find the log files by hand. Here are some likely places for your logs to be:

The logs are in /var/log/tor/
If you compiled Tor from source, by default your Tor logs to "stdout" at log-level notice. If you enable logs in your torrc file, they default to /usr/local/var/log/tor/.

To change your logging setup by hand, edit your torrc and find the section (near the top of the file) which contains the following line:

    ## Logs go to stdout at level "notice" unless redirected by something
    ## else, like one of the below lines.
    

For example, if you want Tor to send complete debug, info, notice, warn, and err level messages to a file, append the following line to the end of the section:

    Log debug file /home/<youruser>/Documents/tor/debug.log
    

Replace /home/<youruser>/Documents/tor/debug.log with a directory and filename for your Tor log.

#### What log level should I use?

There are five log levels (also called "log severities") you might see in Tor's logs:

"err": something bad just happened, and we can't recover. Tor will exit.
"warn": something bad happened, but we're still running. The bad thing might be a bug in the code, some other Tor process doing something unexpected, etc. The operator should examine the message and try to correct the problem.
"notice": something the operator will want to know about.
"info": something happened (maybe bad, maybe ok), but there's nothing you need to (or can) do about it.
"debug": for everything louder than info. It is quite loud indeed.

Alas, some of the warn messages are hard for ordinary users to correct -- the developers are slowly making progress at making Tor automatically react correctly for each situation.

We recommend running at the default, which is "notice". You will hear about important things, and you won't hear about unimportant things.

Tor relays in particular should avoid logging at info or debug in normal operation, since they might end up recording sensitive information in their logs. 

#### I installed Tor but it's not working

 Once you've got Tor Browser up and running, the first question to ask is whether your Tor client is able to establish a circuit.

If Tor can establish a circuit, Tor Browser will automatically launch the browser for you. You can also check in the Tor logs for a line saying that Tor "has successfully opened a circuit. Looks like client functionality is working."

If Tor can't establish a circuit, here are some hints:

Check your system clock. If it's more than a few hours off, Tor will refuse to build circuits. 
```bash 
date -u
Sat Mar  9 16:59:51 UTC 2019
sudo date --set "Sat Mar  9 16:59:51 UTC 2019"
sudo service tor restart
```
Also make sure your time zone is correct.
Is your Internet connection firewalled by port, or do you normally need to use a proxy?
Are you running programs like Norton Internet Security or SELinux that block certain connections, even though you don't realize they do? They could be preventing Tor from making network connections.
Are you in China, or behind a restrictive corporate network firewall that blocks the public Tor relays? If so, you should learn about Tor bridges.
Check your Tor logs. Do they give you any hints about what's going wrong?

#### My Tor keeps crashing.

We want to hear from you! There are supposed to be zero crash bugs in Tor. This FAQ entry describes the best way for you to be helpful to us. But even if you can't work out all the details, we still want to hear about it, so we can help you track it down.

First, make sure you're using the latest version of Tor (either the latest stable or the latest development version).

Second, make sure your version of libevent is new enough. We recommend at least libevent 1.3a.

Third, see if there's already an entry for your bug in the Tor bugtracker. If so, check if there are any new details that you can add.

Fourth, is the crash repeatable? Can you cause the crash? Can you isolate some of the circumstances or config options that make it happen? How quickly or often does the bug show up? Can you check if it happens with other versions of Tor, for example the latest stable release?

Fifth, what sort of crash do you get?

Does your Tor log include an "assert failure"? If so, please tell us that line, since it helps us figure out what's going on. Tell us the previous couple of log messages as well, especially if they seem important.
If it says "Segmentation fault - core dumped" then you need to do a bit more to track it down. Look for a file like "core" or "tor.core" or "core.12345" in your current directory, or in your Data Directory. If it's there, run "gdb tor core" and then "bt", and include the output. If you can't find a core, run "ulimit -c unlimited", restart Tor, and try to make it crash again.
If Tor simply vanishes mysteriously, it probably is a segmentation fault but you're running Tor in the background (as a daemon) so you won't notice. Go look at the end of your log file, and look for a core file as above. If you don't find any good hints, you should consider running Tor in the foreground (from a shell) so you can see how it dies. Warning: if you switch to running Tor in the foreground, you might start using a different torrc file, with a different default Data Directory; see the relay-upgrade FAQ entry for details. If it's still vanishing mysteriously, perhaps something else is killing it? Do you have resource limits (ulimits) configured that kill off processes sometimes? On Linux, try running "dmesg" to see if the out-of-memory killer removed your process. (Tor will exit cleanly if it notices that it's run out of memory, but in some cases it might not have time to notice.) In very rare circumstances, hardware problems could also be the culprit.

Sixth, if the above ideas don't point out the bug, consider increasing your log level to "loglevel debug". You can look at the log-configuration FAQ entry for instructions on what to put in your torrc file. If it usually takes a long time for the crash to show up, you will want to reserve a whole lot of disk space for the debug log. Alternatively, you could just send debug-level logs to the screen (it's called "stdout" in the torrc), and then when it crashes you'll see the last couple of log lines it had printed. (Note that running with verbose logging like this will slow Tor down considerably, and note also that it's generally not a good idea security-wise to keep logs like this sitting around.) 

More info on Tor: https://www.torproject.org/docs/faq.html.en
&nbsp;

[Using Parrot Linux](https://www.parrotsec.org/docs/info/startpage/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/trbl-start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-start/) | [Home](https://www.parrotsec.org/docs/) 