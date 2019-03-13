

We have been hearing a lot about Wireguard lately and with it being recently added to the Kali repos, we thought we would give it a quick try to see what all the fuss is about. All in all, we found this is a really nice and quick to configure VPN solution, and might be worth checking out.
Getting Started

With Wireguard added to the repos, installation is nice and easy:
apt install wireguard resolvconf

And we are off. Next comes time for configuration. This is where Wireguard really shone for us, as it took next to nothing to get up and running.

On the server, we have to generate a public/private key pair and set up an initial config file.
wg genkey | tee privatekey | wg pubkey > publickey
umask u=rwx,go= && cat > /etc/wireguard/wg0.conf << EOF
[Interface]
Address = 10.222.222.1/24
SaveConfig = true
ListenPort = 51820
PrivateKey = -SERVER PRIVATE KEY-

[Peer]
PublicKey = -CLIENT PUBLIC KEY-
AllowedIPs = 10.222.222.2/32
EOF

And we do the same process on the client to establish its key pair and config.
wg genkey | tee privatekey | wg pubkey > publickey
umask u=rwx,go= && cat /etc/wireguard/wg0.conf  << EOF
[Interface]
Address = 10.222.222.2/32
PrivateKey = -CLIENT PRIVATE KEY-
DNS = 8.8.8.8

[Peer]
PublicKey = -SERVER PUBLIC KEY-
Endpoint = public.ip.of.server:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 21
EOF

These are pretty simple configs but it’s worth pointing a few things out. First off, you obviously have to put the output from the key pairs into the configs as appropriate. Additionally, the DNS line on the client is to help prevent DNS leaks from using your local default DNS server. You may or may not want to change that depending on your needs.

Most important however is the “AllowedIPs” line. This will control what IPs do or don’t go across the VPN. In this case, we setup the client to route everything through the VPN server. We will play with this more in a bit, but let’s look at getting this basic config running.

To start and stop the tunnel, it’s pretty easy.
# The VPN can be enabled using
wg-quick up wg0
# To disable the VPN:
wg-quick down wg0
# Information about the connection can be retrieved with following command:
wg show

And of course, we need to enable IP masquerade and IP forwarding on the server.
/sbin/iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward

So, with this we have a traditional VPN configuration. If you are looking to just get a standard VPN setup, at this point you are done. There are some advantages to this compared to using OpenVPN, for instance this solution seems to be much faster, the config is a lot simpler, and it’s a touch more stealthy in that the server won’t respond to packets that don’t have a proper key pair linked to them. We thought however it might be interesting to change the configuration to reflect our ISO of Doom config, having a client that will auto connect to the server on boot allowing the server to route through and access the client network.
Wireguard of DOOM!

First things first, on our client, let’s quickly set up IP forwarding and masquerading:
/sbin/iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward

Great, with that done, we make a couple minor changes to our configs. First up, on the server we change the “AllowedIPs” line to have the private network on the report site. This would look like so:
[Interface]
Address = 10.222.222.1/24
SaveConfig = true
ListenPort = 51820
PrivateKey = -SERVER PRIVATE KEY-

[Peer]
PublicKey = -CLIENT PUBLIC KEY-
AllowedIPs = 10.200.200.2/32, 192.168.2.0/24

With that one line changed on the server, we then tweak the clients “AllowedIPs” line to remove the option to route everything to the VPN server.
[Interface]
Address = 10.200.200.2/32
PrivateKey = -CLIENT PRIVATE KEY-
DNS = 8.8.8.8

[Peer]
PublicKey = -SERVER PUBLIC KEY-
Endpoint = public.ip.of.server:51820
AllowedIPs = 10.200.200.0/24
PersistentKeepalive = 21

And thats it!
root@kali:~# ping 192.168.2.22
PING 192.168.2.22 (192.168.2.22) 56(84) bytes of data.
64 bytes from 192.168.2.22: icmp_seq=19 ttl=63 time=50.2 ms
64 bytes from 192.168.2.22: icmp_seq=20 ttl=63 time=53.4 ms
64 bytes from 192.168.2.22: icmp_seq=21 ttl=63 time=48.1 ms

Now the VPN server can access the subnets on the other side of the Wireguard VPN.
Wrapping up

Time will tell if Wireguard replaces OpenVPN as the VPN of choice, or if the latest buzz is just excitement of using the newest toys. In any case, it’s nice to have the ability to test it out, and use if it’s a good fit. As we have seen here, it’s definitely easy to setup, and relatively versatile in the user cases.
