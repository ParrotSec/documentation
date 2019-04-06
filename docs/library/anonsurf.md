&nbsp;

&nbsp;

NOTE: Currently a WIP (work in progress, some links might not work and some documentation is likely missing.)


# Verify!
# Add photos


What is AnonSurf?

    Anonsurf [1] is Parrot's anonymous mode to force connections through tor and/or the i2p network. Anonsurf's usage has a graphical interface, and a CommandLine Interface (CLI).

What is Tor?

    Tor [2] is a SOCKS4 [3] & SOCKS5 encryption protocol.
    Tor tunnels all traffic running across the users network anonymously.
    Tor conceals a user's location and network data from anyone monitoring the user locally, and remotely.

Tor Has Several Use Cases

    Used with on the browser (torbrowser & iceweasel)
    IRC [4] clients (hexchat)
    Instant messanging (torchat [5], tormessanger
    Hidden servers (Creating .onion sites)

Tor Technical Details

    The Tor protocol works by: Multiplexing [6] multiple “circuits” over a single node-to-node TLS connection.
    Tor traffic is routed through 3 nodes by default: Guard, relay, and exit.

To be able to route multiple relays, Tor has something called stream multiplexing capability: [+] multiple TCP connections can be carried over a single Tor circuit. [+] Each node knows only the source and destination pairing for a circuit. It does not know the whole path.

Taken from Mike Perry's talk at blackhat in 2007 found here [7]

&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)
