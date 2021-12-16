# पेरोट ओएस के लिए डॉकर इमेजेस  

डॉकर एक शक्तिशाली तकनीक है जो उपयोगकर्ताओं को किसी भी होस्ट प्लेटफॉर्म पर सार्वभौमिक रूप से कंटेनर चलाने की अनुमति देती है।

डॉकर टेम्प्लेट छवियों का उपयोग करता है, और उपयोगकर्ता को एक ही टेम्प्लेट के कई उदाहरण शुरू करने, उन्हें नष्ट करने या उनके ऊपर नए कस्टम टेम्प्लेट बनाने की अनुमति देता है।

पेरोट अपने उपयोगकर्ताओं को डॉकटर द्वारा समर्थित किसी भी प्लेटफॉर्म पर अपने विशाल शस्त्रागार का उपयोग करने की अनुमति देने के लिए डॉकटर का उपयोग करता है।

[Parrot Core](#parrotseccore) | [Parrot Security](#parrotsecsecurity)

[Nmap](#parrotsectools-nmap)

[Metasploit](#parrotsectools-metasploit)

[Social Engineering Toolkit](#parrotsectools-set)

[Beef-XSS](#parrotsectools-beef)

[Bettercap](#parrotsectoos-bettercap)

[SQLMap](#parrotsectools-sqlmap)

[Builder Container](#parrotsecbuild)



[skip to usage examples](#general-usage-instructions-and-examples)

# उपलब्ध टेम्पलेट #

आप चाहे तो औजारों से भरा एक कंटेनर रखना चाहते हैं, या कई छोटे कंटेनरों में औजारों के एक छोटे से चयन के साथ, या यहां तक ​​कि एक स्वच्छ तोता वातावरण भी चाहते हैं यार कस्टम स्टैक का निर्माण करने के लिए, यह सही जगह है जहां पेरोट डॉकर कार्यक्षेत्र का लाभ उठाना सीखना है।

## parrotsec/core ##

पेरोट मूल बातें के साथ कोर सिस्टम।
आप अपने कस्टम कंटेनर बनाने के लिए इसे प्रारंभ बिंदु के रूप में उपयोग कर सकते हैं।

उपलब्ध जायके:

**parrotsec/core:latest** - पेरोट रोलिंग (डेबियन परीक्षण) पर आधारित amd64

**parrotsec/core:rolling-amd64** - पेरोट रोलिंग (डेबियन परीक्षण) पर आधारित amd64

**parrotsec/core:rolling-i386** - पेरोट रोलिंग (डेबियन परीक्षण) पर आधारित i386

**parrotsec/core:lts-amd64** - पेरोट एलटीएस पर आधारित (देवुआन स्थिर) amd64

**parrotsec/core:lts-i386** - पेरोट एलटीएस पर आधारित (देवुआन स्थिर) i386

**parrotsec/core:lts-arm64** - पेरोट एलटीएस पर आधारित (देवुआन स्थिर) arm64

**parrotsec/core:lts-armhf** - पेरोट एलटीएस पर आधारित (देवुआन स्थिर)  armhf

*कंटेनर लॉन्च करें*:
    
    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/core:lts-amd64


## parrotsec/security ##

इस कंटेनर में टूल का एक विशाल संग्रह शामिल है जिसका उपयोग डॉकटर कंटेनर के अंदर से कमांड लाइन के माध्यम से किया जा सकता है।

स्पष्ट कारणों से ग्राफिकल इंटरफ़ेस वाले कुछ टूल को बाहर रखा गया था।

यह कंटेनर निम्नलिखित रूपक के साथ जहाज करता है:

* parrot-pico
* parrot-mini
* parrot-tools-cloud

उपलब्ध जायके:

**parrotsec/security:latest** - parrotsec/core:rolling-amd64 ऊपर बनाया गया

**parrotsec/security:rolling** - parrotsec/core:rolling-amd64 ऊपर बनाया गया

**parrotsec/security:lts** - parrotsec/core:lts-amd64 ऊपर बनाया गया

*कंटेनर लॉन्च करें*:

    docker run --rm -ti --network host -v $PWD/work:/work parrotsec/security


## parrotsec/tools-* ##

यह छोटे डॉकटर कंटेनरों का एक क्यूरेटेड चयन है जिसमें केवल विशिष्ट उपकरण होते हैं, अकेले या चेरी-चुने हुए संग्रह में।

भंडारण कचरे को कम करने और परतों के पुन: उपयोग को अधिकतम करने के लिए साझा उपकरणों वाले कंटेनरों को एक दूसरे के ऊपर (जब संभव हो) ढेर किया जाता है।

उपलब्ध टेम्पलेट:

### parrotsec/tools-nmap ###

parrotsec/core:rolling-amd64 पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* nmap
* ncat
* ndiff
* dnsutils
* netcat
* telnet

उपयोग:

    docker run --rm -ti parrotsec/tools-nmap <nmap options>

उदाहरण:

    docker run --rm -ti parrotsec/tools-nmap -F 192.168.1.1

\

    docker run --rm -ti parrotsec/tools-nmap -Pn 89.36.210.176

### parrotsec/tools-metasploit ###

parrotsec/tools-nmap:latest पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* parrot-pico
* metasploit-framework
* postgresql

उपयोग:

    docker run --rm -ti --network host -v $PWD/msf:/root/ parrotsec/tools-metasploit

### parrotsec/tools-set ###

parrotsec/tools-metasploit:latest पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* set

उपयोग:

    docker run --rm -ti --network host -v $PWD/set:/root/.set parrotsec/tools-set

### parrotsec/tools-beef ###

parrotsec/core:rolling-amd64 पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* beef-xss

उपयोग:

    docker run --rm --network host -ti -v $PWD/beef:/var/lib/beef-xss parrotsec/tools-beef

### parrotsec/tools-bettercap ###

parrotsec/core:rolling-amd64 पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* bettercap

उपयोग:

    docker run --rm -ti parrotsec/tools-bettercap

### parrotsec/tools-sqlmap ###

parrotsec/core:rolling-amd64 पर आधारित
निम्नलिखित पैकेज प्रदान करता है:
* sqlmap

उपयोग:

    docker run --rm -ti parrotsec/tools-sqlmap <sqlmap options>

उदाहरण:

    docker run --rm -ti parrotsec/tools-sqlmap -u parrotsec.org --wizard


## parrotsec/build ##

डिस्ट्रो पैकेज का परीक्षण और निर्माण करने के लिए इस कंटेनर का उपयोग पेरोट बिल्ड प्लेटफॉर्म द्वारा आंतरिक रूप से किया जाता है।

भले ही यह सीधे उपयोगकर्ताओं द्वारा उपयोग करने के लिए नहीं है, इसमें डेबियन पैकेजिंग पर काम करने के लिए सभी उपकरण शामिल हैं और स्वच्छ और डिस्पोजेबल वातावरण में ठीक से परीक्षण पैकेज बनाता है।

यह कंटेनर निम्नलिखित पैकेजों के साथ जहाज करता है:

* git-buildpackage
* ubuntu-dev-tools
* devscripts
* debhelper
* dh-apparmor
* dh-autoreconf
* dh-buildinfo
* dh-cargo
* dh-consoledata
* dh-di
* dh-exec
* dh-golang
* dh-linktree
* dh-lisp
* dh-lua
* dh-make
* dh-make-golang
* dh-make-perl
* dh-metainit
* dh-perl6
* dh-php
* dh-python
* dh-runit
* dh-strip-nondeterminism
* dh-sysuser
* dh-vim-addon
* dh-virtualenv
* kernel-wedge

उपलब्ध जायके:

**parrotsec/build:latest** - parrotsec/core:rolling-amd64 ऊपर बनाया गया

**parrotsec/build:rolling-amd64** - parrotsec/core:rolling-amd64 ऊपर बनाया गया

**parrotsec/build:rolling-i386** - parrotsec/core:rolling-i386 ऊपर बनाया गया

**parrotsec/build:lts-amd64** - parrotsec/core:lts-amd64 ऊपर बनाया गया

**parrotsec/build:lts-i386** - parrotsec/core:lts-i386 ऊपर बनाया गया

**parrotsec/build:lts-arm64** - parrotsec/core:lts-arm64 ऊपर बनाया गया

**parrotsec/build:lts-armhf** - parrotsec/core:lts-armhf ऊपर बनाया गया


उदाहरण उपयोग:

    git clone https://nest.parrot.sh/packages/tools/metasploit-framework

\
    
    cd metasploit-framework

*पैकेज में अपने संशोधन यहां करें*

    cd ..

\
    
    docker run --rm -ti -v $PWD:/build/ parrotsec/build:rolling-amd64 - bash

\
    
    cd /build/metasploit-framework

\
    
    apt build-dep .
    
\

    debuild -us -uc

\
    
    exit
