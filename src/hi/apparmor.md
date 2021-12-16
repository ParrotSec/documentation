# AppArmor #  

AppArmor एक प्रभावी और उपयोग में आसान लिनक्स एप्लिकेशन सुरक्षा प्रणाली है। AppArmor अच्छे व्यवहार को लागू करके और यहां तक ​​कि अज्ञात एप्लिकेशन दोषों को भी शोषण से रोककर, ऑपरेटिंग सिस्टम और एप्लिकेशन को बाहरी या आंतरिक खतरों, यहां तक ​​कि zero-day attacks से भी बचाता है। 

AppArmor सुरक्षा नीतियां पूरी तरह से परिभाषित करती हैं कि कौन से सिस्टम संसाधन अलग-अलग एप्लिकेशन एक्सेस कर सकते हैं, और किन विशेषाधिकारों के साथ। AppArmor के साथ कई डिफ़ॉल्ट नीतियां शामिल हैं, और उन्नत स्थैतिक विश्लेषण और सीखने-आधारित टूल के संयोजन का उपयोग करके, AppArmor नीतियों को बहुत जटिल अनुप्रयोगों के लिए भी कुछ ही घंटों में सफलतापूर्वक तैनात किया जा सकता है।

## जांचें कि क्या AppArmor स्थापित है ##

AppArmor और इसके प्रोफाइल पहले से ही सक्षम और पेरोट ओएस पर चलने चाहिए। यह जांचने के लिए कि क्या AppArmor सक्रिय है:
    sudo aa-status --enabled; echo $?

आउटपुट 0 वापस आना चाहिए। वैकल्पिक रूप से लोड किए गए AppArmor प्रोफाइल देखने के लिए निम्न कमांड चलाएँ:

    sudo aa-status

<img src="./images/apparmor/0.png" width="75%"/>

यदि किसी कारण से AppArmor पहले से इंस्टॉल नहीं है, तो नीचे पढ़ना जारी रखें।

## AppArmor इनस्टॉल करें ##

    sudo apt install apparmor apparmor-utils auditd

**apparmor** = main package \
**apparmor-utils** = utilities for controlling apparmor profiles \
**auditd** = automatic profile generation tools 

\

AppArmor को सक्षम करने के लिए निम्नलिखित कमांड चलाएँ:

    sudo mkdir -p /etc/default/grub.d

\

    echo 'GRUB_CMDLINE_LINUX_DEFAULT="$GRUB_CMDLINE_LINUX_DEFAULT apparmor=1 security=apparmor"' | sudo tee /etc/default/grub.d/apparmor.cfg

\

    sudo update-grub

\

    sudo reboot

फिर वर्तमान स्थिति का निरीक्षण करने के लिए निम्न आदेश चलाएँ:

    sudo aa-status

यह एप्लिकेशन, प्रक्रियाओं के लिए सभी लोड किए गए AppArmor प्रोफाइल को सूचीबद्ध करेगा और उनकी स्थिति (लागू, शिकायत, अपुष्ट) का विवरण देगा।

उदाहरण के लिए, यह जाँचने के लिए कि एनफोर्स मोड क्या है, निम्नलिखित कमांड चलाएँ:

    ps auxZ | grep -v '^unconfined'

प्रोफ़ाइल स्थापित करने के लिए, निम्न आदेश चलाएँ:

    sudo apt install apparmor-profiles apparmor-profiles-extra

AppArmor प्रोफाइल `/etc/apparmor.d/` में रहते हैं। आप उन्हें कर्नेल में डालने के लिए apparmor_parser(8) का उपयोग कर सकते हैं। `/etc/apparmor.d/` में नीति छोड़ने वाले पैकेजों को स्थापित करते समय यह स्वचालित रूप से किया जाता है।

उदाहरण के लिए, सभी "extra " प्रोफाइल (AppArmor-प्रोफाइल पैकेज में प्रदान की गई) को शिकायत मोड में सेट करने के लिए (इनकार नियमों को चुपचाप लागू किए जाने को छोड़कर, सुरक्षा नीति लागू नहीं की जाती है और एक्सेस उल्लंघन लॉग किए जाते हैं), निम्न कार्य करें:

    cd /usr/share/doc/apparmor-profiles/extras

\

    cp -i *.* /etc/apparmor.d/

\

    for f in *.*; 
        do aa-complain /etc/apparmor.d/$f; 
    done

इन प्रोफाइल को **एनफोर्स मोड** पर सेट करने के लिए, `aa-complain` के बजाय `aa-enforce` का उपयोग करें। हालांकि सावधान रहें: इनमें से कई प्रोफाइल अप-टू-डेट नहीं हैं और एनफोर्स मोड (और संभवत: शिकायत मोड में भी) में कार्यक्षमता को तोड़ देंगे; उन्हें तभी लागू करें जब आप उन्हें अपस्ट्रीम में सुधार करने के लिए तैयार हों। 


## AppArmor अक्षम करें ##

सबसे पहले, आप 'aa-disable' के साथ अलग-अलग प्रोफाइल को अक्षम कर सकते हैं।
लेकिन अगर आप अपने सिस्टम पर AppArmor को *पूरी तरह से* अक्षम करना चाहते हैं, तो चलाएँ:

    sudo mkdir -p /etc/default/grub.d

\

    echo 'GRUB_CMDLINE_LINUX_DEFAULT="$GRUB_CMDLINE_LINUX_DEFAULT apparmor=0"' | sudo tee /etc/default/grub.d/apparmor.cfg

\

    sudo update-grub

\

    sudo reboot

## डीबग AppArmor ##

जब भी कोई प्रोग्राम `/var/log/kern.log` में अस्वीकृत संदेश देता है, तो *apparmor-notify* पैकेज से `a-notify` कमांड एक डेस्कटॉप सूचना प्रदान करने में सक्षम होता है। विज्ञापन समूह में शामिल होकर `/var/log/kern.log` के लिए स्वयं को पढ़ने की अनुमति दें:

    sudo adduser "$USER" adm 

फिर अगली बार जब आप लॉग इन करते हैं तो `aa-notify` स्वचालित रूप से शुरू हो जाना चाहिए (`/etc/xdg/autostart/apparmor-notify.desktop` का उपयोग करके)। यदि ऐसा नहीं होता है, तो इसे मैन्युअल रूप से प्रारंभ करें:

    aa-notify -p 

यदि आप **auditd** का उपयोग करते हैं, तो आपको `aa-notify` को इस तरह से शुरू करना चाहिए:

    sudo aa-notify -p -f /var/log/audit/audit.log

\

#### निदान करें कि क्या कोई बग AppArmor के कारण हुआ है ####

Apparmor-utils पैकेज AppArmor को डीबग करने के लिए कई उपयोगी कमांड प्रदान करता है। पता लगाएँ कि क्या AppArmor `cat` कमांड के माध्यम से सक्षम है:

    cat /sys/module/apparmor/parameters/enabled 

यह सत्य होने पर Y लौटाएगा।

#### पता करें कि कौन से प्रोफाइल सक्षम हैं #####

    sudo aa-status

उपरोक्त आदेश अनुप्रयोगों और प्रक्रियाओं के लिए सभी लोड किए गए AppArmor प्रोफाइल को सूचीबद्ध करेगा और उनकी स्थिति (लागू, शिकायत, अपुष्ट) का विवरण देगा।
और,

    ps auxZ | grep -v '^unconfined'

चल रहे निष्पादन योग्य सूचीबद्ध करेगा जो वर्तमान में एक AppArmor प्रोफ़ाइल द्वारा सीमित हैं। कभी-कभी, किसी प्रोफ़ाइल को अक्षम करना और यदि बग बनी रहती है तो फिर से परीक्षण करना उपयोगी होता है:

    sudo aa-disable /etc/apparmor.d/$profile  

जैसे `sudo aa-disable /etc/apparmor.d/usr.bin.pidgin`. 

आप इस तरह से प्रोफ़ाइल को फिर से सक्षम कर सकते हैं:

    sudo aa-enforce /etc/apparmor.d/$profile

#### लॉग सत्यापित करें ####

    sudo tail -f /var/log/syslog | grep 'DENIED'  

या (यदि **auditd** स्थापित है):

    sudo tail -f /var/log/auditd/auditd.log | grep 'DENIED' 

"DENIED" पंक्तियां को इस बारे में अधिक जानकारी प्रदान करनी चाहिए कि फ़ाइल सिस्टम में कौन सी ठोस प्रक्रिया या पहुंच से इंकार कर दिया गया है। tcp या udp पोर्ट के साथ प्रक्रियाओं की एक सूची आउटपुट करें जिसमें AppArmor प्रोफाइल लोड नहीं है:

    sudo aa-unconfined 

`--paranoid` पैरामीटर के साथ भी संभव है।

शिकायत मोड में प्रोफाइल प्रविष्टियों के लिए लॉग में अनुमत लाइनें भेजेंगे जिन्हें सामान्य रूप से लागू मोड में अस्वीकार कर दिया जाएगा। आप इसे लागू करने के मोड में चालू करने से पहले कॉन्फ़िगरेशन को ट्विक करने के लिए उपयोग कर सकते हैं।
