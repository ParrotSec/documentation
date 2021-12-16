# QubesOS पर पेरोट #

अभी के लिए QubesOS पर ParrotOS VM बनाने के दो तरीके हैं।

### Option 1 - Create an HVM ###

1. कोई भी पेरोट x86_64 छवि डाउनलोड करें जो आप चाहते हैं।

2. [Create](https://www.qubes-os.org/doc/standalones-and-hvms/#command-line) a new HVM ([Hardware-assisted Virtual Machine](https://www.qubes-os.org/doc/glossary/#hvm)).
    

3. HVM को संलग्न सीडी/डीवीडी के साथ प्रारंभ करें।

    
        [user@dom0 ~]$ qvm-start <hvm-name> --cdrom <vm-name>:/home/user/Downloads/<iso-name>.iso



### Option 2 - एक डेबियन टेम्पलेट के शीर्ष पर एक ParrotOS TemplateVM बनाएँ ###

**चेतावनी**: यह दस्तावेज़ीकरण इस बात की गारंटी नहीं दे सकता कि आपके द्वारा इंटरनेट से डाउनलोड की गई कोई भी पीजीपी कुंजी प्रामाणिक है। हमेशा अन्य चैनलों के माध्यम से एक विश्वसनीय कुंजी फ़िंगरप्रिंट प्राप्त करें और फ़िंगरप्रिंट की अपनी विश्वसनीय प्रतिलिपि के विरुद्ध हमेशा डाउनलोड की गई किसी भी कुंजी की जांच करें।

यह चरण आवश्यक है क्योंकि (सुरक्षा) डिफ़ॉल्ट रूप से एक TemplateVM में प्रत्यक्ष इंटरनेट कनेक्टिविटी नहीं होती है। ऐसी पहुंच को सक्षम करने के जोखिमों को समझने वाले उपयोगकर्ता TemplateVM के लिए फ़ायरवॉल सेटिंग्स में इस कॉन्फ़िगरेशन को बदल सकते हैं।

*नोट*: प्रत्येक पंक्ति पर संकेत दिखाता है कि प्रत्येक आदेश कहाँ दर्ज किया जाना चाहिए (@dom0, @parrot, @xxxx-dvm, @debian-<X>). 

1. [DispVM](https://www.qubes-os.org/doc/how-to-use-disposables/) का उपयोग करके आधिकारिक ParrotOS GPG कुंजी प्राप्त करें।

    
    
        [user@xxxx-dvm ~]$ gpg --keyserver hkp://keys.gnupg.net --recv-key 3B3EAB807D70721BA9C03E55C7B39D0362972489
    \

        [user@xxxx-dvm ~]$ gpg --list-keys --with-fingerprint 3B3EAB807D70721BA9C03E55C7B39D0362972489 
    \

        [user@xxxx-dvm ~]$ gpg --export --armor 3B3EAB807D70721BA9C03E55C7B39D0362972489 > parrot-key.asc
    

2. DISPVM को बंद न करें। Parrot-key.asc फ़ाइल को अगले चरण में ParrotOS टेम्पलेट में कॉपी किया जाएगा।

3. सुनिश्चित करें कि key प्रामाणिक ParrotOS keyकुंजी है।

### एक ParrotOS TemplateVM बनाएं ###

ये निर्देश आपको दिखाएंगे कि कैसे एक डेबियन टेम्पलेटVM को ParrotOS में अपग्रेड किया जाए।

1. (वैकल्पिक) नवीनतम डेबियन स्थिर टेम्पलेट की जाँच करें और इसे स्थापित करें (यदि पहले से नहीं किया गया है):

        [user@dom0 ~]$ sudo qubes-dom0-update --action="search all" qubes-template-debian
    
    \

        [user@dom0 ~]$ sudo qubes-dom0-update <latest Debian template>

2. अपना डेबियन टेम्पलेटVM प्रारंभ, अद्यतन और बंद करें।

        [user@dom0 ~]$ qvm-start debian-<X>
    \

        [user@dom0 ~]$ qvm-run -a debian-<X> gnome-terminal

    \

        [user@debian-<X> ~]$ sudo apt update

    \

        [user@debian-<X> ~]$ sudo apt upgrade

    \

        [user@dom0 ~]$ qvm-shutdown debian-<X>


3. क्लोन डेबियन-एक्स टेम्पलेटVM

        [user@dom0 ~]$ qvm-clone debian-<X> parrot


4. /etc/apt/sources.list और वर्तमान परीक्षण डेबियन रिलीज में वर्तमान में प्रयुक्त भंडार के नाम की जाँच करें। तदनुसार रिपोजिटरी सूची अपडेट करें

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list

    \

        [user@parrot ~]$ sudo sed -i 's/<current stable>/<current testing>/g' /etc/apt/sources.list.d/qubes-r<X>.list

जैसे इस उदाहरण में हम स्ट्रेच स्टेबल रिपॉजिटरी को बस्टर टेस्टिंग रिपॉजिटरी में अपडेट करते हैं

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list

  \

    [user@parrot ~]$ sudo sed -i 's/stretch/buster/g' /etc/apt/sources.list.d/qubes-r<X>.list

5. नवीनतम डेबियन परीक्षण रिलीज में पेरोट टेम्पलेट अपग्रेड करें

        [user@parrot ~]$ sudo apt update && sudo apt full-upgrade

    \

        [user@parrot ~]$ sudo apt autoremove

नोट: ful-upgrade कमांड के निष्पादन के दौरान हटाए जाने वाले पैकेजों की सूची को ध्यान से पढ़ें। यदि इसमें qubes-* पैकेज शामिल हैं, तो ऑपरेशन को समाप्त करें और qubes-* पैकेज में निर्भरता को पहले हल करने का प्रयास करें।

6. ParrotOS GPG key को DispVM से नए टेम्पलेट में कॉपी करें:

        [user@xxxx-dvm ~]$ qvm-copy-to-vm parrot parrot-key.asc

DispVM बंद करें।

7. पैकेजों को प्रमाणित करने के लिए विश्वसनीय keys की सूची में ParrotOS GPG key जोड़ें:

        [user@parrot ~]$ cat /home/user/QubesIncoming/dispXXX/parrot-key.asc | sudo apt-key add -

उपरोक्त आदेश को एक पंक्ति में OK वापस करना चाहिए।

8. नए TemplateVM पर अपडेट का प्रयास करें

        [user@parrot ~]$ sudo cat <<EOF > /etc/apt/sources.list.d/parrot.list
        # ParrotOS repository
        deb http://deb.parrotsec.org/parrot stable main contrib non-free
        #deb-src http://deb.parrotsec.org/parrot stable main contrib non-free
        EOF

    \

        [user@parrot ~]$ sudo apt update

    \

        [user@parrot ~]$ sudo apt full-upgrade

    \

        [user@parrot ~]$ sudo apt autoremove

    \

        [user@parrot ~]$ sudo apt install parrot-core parrot-archive-keyring parrot-drivers parrot-skel


9. शट डाउन करें और नया TemplateVM trim करें

        [user@dom0 ~]$ qvm-shutdown parrot

    \
    
        [user@dom0 ~]$ qvm-trim-template parrot


10. सुनिश्चित करें कि नए TemplateVM में एक टर्मिनल खोला जा सकता है

        [user@dom0 ~]$ qvm-run -a parrot gnome-terminal


#### penetration testing उपकरण स्थापित करें (वैकल्पिक) ####

इस बिंदु पर आपके पास एक कार्यशील टेम्पलेट होना चाहिए और आप आवश्यक उपकरण स्थापित कर सकते हैं।

1. यदि आप पूर्ण ParrotOS वितरण स्थापित करने की योजना बना रहे हैं, तो टेम्पलेट डिस्क छवि का आकार बदलें। उदाहरण के लिए, parrot-tools-full स्थापित करने के लिए आपको VM सिस्टम का आकार 10GB से बढ़ाकर कम से कम 20GB करना होगा।

2. ParrotSec penetration testing उपकरण स्थापित करें:

        [user@parrot ~]$ sudo apt install parrot-tools-full


(वैकल्पिक) टेम्पलेट की होम निर्देशिका को अनुकूलित करें (उदाहरण के लिए, बर्प सूट प्रोफेशनल की अपनी लाइसेंस प्राप्त कॉपी स्थापित करें)

#### TemplateVM का प्रयोग करें ####
टेम्प्लेट उपयोग के लिए तैयार है। अब आप पेरोट के खाके के आधार पर AppVMs को स्पिन कर सकते हैं।
