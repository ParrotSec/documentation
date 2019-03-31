---
title: 'Privacy Policy'
taxonomy:
    category:
        - docs
visible: true
---

NOTE: This policy is incomplete (it does not yet cover all the infrastructure of the Parrot Project), we hope to finish it shortly.

## Privacy Policy

### Parrot's Content Delivery Network

What do these servers actually do? What kind of private information is stored? How is it stored? And what happens if an edge node is cloned and analyzed?

The edge nodes do not host private information of the users, only our master servers host user information.

The edge servers are owned by us, we can delete servers, migrate them, deploy new ones, change providers etc. We can force users in a country to stay away from a particular node and transit the parrot network from a node in another country.

We log user activities from the web server logs and use goaccess to monitor strange activities.

Our sysadmin is the only person authorized to access the servers and handle the logs.

Goaccess analyzes the logs for us to show aggregated data such as page hits, unique visitors, most used browsers, origin country, most requested addresses, most accessed domains etc. The data we retain is aggregated and does not reveal private user information.

The only private information directly visible from goaccess is the ip address of the users, but the servers already have automatic protections to ban misbehaving ip addresses, We store ip addresses temporarily in case of cyberattacks.

Logs are disabled on the edge nodes, so we can keep them secure on the central infrastructure where authorities or third parties can’t take them without our approval.

We periodically delete logs from servers when we are sure that no attacks were received in that period of time, and we shred them for security before restarting the service.

We have never received a warrant since we began this project. Please note our [warrant canary](warrant-canary.md).


### The Parrot Project's OpenNIC DNS Servers


We provide free DNS resolvers for the OpenNIC network. These servers have logs disabled by default.

There is a tiny log buffer that hosts the latest service hits for debugging purposes but this is just a buffer that keeps a bunch of recent elements it disappears 

automatically as new requests come in and it is the standard behavior of the DNS resolver we use (PowerDNS).


        
Last updated 26 Mar 2019

&nbsp;

[Using Parrot](https://www.parrotsec.org/docs/info/start/) | [Troubleshooting](https://www.parrotsec.org/docs/trbl/start/) | [Linux Beginner Guide](https://www.parrotsec.org/docs/library/lbg-basics/) | [Home](https://www.parrotsec.org/docs/)