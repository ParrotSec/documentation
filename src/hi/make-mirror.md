## Make your own mirror ##

आप नीचे दिए गए चरणों का पालन करके व्यक्तिगत या सार्वजनिक उपयोग के लिए अपने सर्वर पर एक पेरोट संग्रह दर्पण स्थापित कर सकते हैं।


### सुनिश्चित करें कि आपके पास पर्याप्त खाली स्थान है ###

आप संपूर्ण रिपॉजिटरी को सिंक कर सकते हैं या केवल आईएसओ इमेज चुन सकते हैं।

सुनिश्चित करें कि दर्पण को होस्ट करने के लिए पर्याप्त खाली स्थान है, और भविष्य के उन्नयन के लिए तैयार रहें क्योंकि संग्रह आकार में उतार-चढ़ाव होता है।

मौजूदा संग्रह आकार यहां उपलब्ध है [archive.parrotsec.org/parrot/misc/archive-size.txt](https://deb.parrotsec.org/parrot/misc/archive-size.txt)


### अपस्ट्रीम सर्वर चुनें ###

हम रिपॉजिटरी सिंकिंग सेवाओं के लिए कई डोमेन संभालते हैं, हमारा सुझाव है कि आप स्वचालित और फेलप्रूफ सेटअप के लिए `rsync.parrot.sh` का उपयोग करें, लेकिन विशिष्ट जरूरतों के मामले में अपस्ट्रीम सेटिंग्स को समायोजित किया जा सकता है।

यदि आपके पास विशिष्ट मिररिंग आवश्यकताएं या बैंडविड्थ सीमाएं हैं, तो बेझिझक पेरोट टीम से संपर्क करें। हम आपको समर्पित अपस्ट्रीम स्रोत या आपके दर्पण के लिए पेशेवर सहायता प्रदान कर सकते हैं।

<pre>
Main Mirror Director:
    rsync.parrot.sh

Global Zones (read the notes):
    EMEA:
        emea.rsync.parrot.sh
    NCSA:
        ncsa.rsync.parrot.sh
    APAC:
        apac.rsync.parrot.sh
</pre>

एकल संग्रह अनुपलब्ध हो सकते हैं या समय-समय पर बदले जा सकते हैं।

`rsync.parrot.sh` सभी उपलब्ध दर्पणों के बीच स्वचालित रूप से संतुलित है और आपको शून्य डाउनटाइम देगा।

### संग्रह डाउनलोड करें ###

यदि आप संपूर्ण संग्रह को नीचे दिए गए निर्देशों के साथ समन्वयित करते हैं, तो आपको ISO संग्रह को सिंक्रनाइज़ करने की आवश्यकता नहीं है। ISO फाइलें डिफ़ॉल्ट रूप से शामिल हैं!

#### रिपॉजिटरी को सिंक करें ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot

#### क्रोनजॉब कॉन्फ़िगर करें ####

निम्न आदेश लॉन्च करें:

    crontab -e

और crontab फ़ाइल में निम्न सामग्री जोड़ें:

    */10 * * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot /var/www/html/parrot



### केवल आईएसओ संग्रह डाउनलोड करें ###

यदि आप पहले से ही उपरोक्त निर्देशों के साथ पूर्ण संग्रह को सिंक्रनाइज़ कर रहे हैं तो आईएसओ संग्रह को सिंक न करें। आईएसओ फाइलें पहले से ही पूर्ववर्ती पैराग्राफ में निर्देशों के साथ उपलब्ध कराई गई हैं।

यदि आप केवल आईएसओ फाइलों को सिंक करना चाहते हैं तो निम्नलिखित निर्देशों का उपयोग करें।

#### रिपॉजिटरी को सिंक करें ####

    rsync -Pahv --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot

#### एक क्रोनजॉब कॉन्फ़िगर करें ####

निम्न आदेश लॉन्च करें:

    crontab -e

और crontab फ़ाइल में निम्न सामग्री जोड़ें:

    30 2 * * * flock -xn /tmp/parrot-rsync.lock -c 'rsync -aq --delete-after rsync://rsync.parrot.sh:/parrot-iso /var/www/html/parrot


### अपने दर्पण को rsync ### के माध्यम से बेनकाब करें

अन्य लोगों को आपसे समन्वयित करने की अनुमति देने के लिए और हमारे दर्पण निदेशक को समय-समय पर आपके दर्पण को स्कैन करने और अनुक्रमण और स्वास्थ्य जांच करने की अनुमति देने के लिए आपके दर्पण को rsync के माध्यम से उजागर किया जा सकता है।

हमारे आधिकारिक सूची में अपना दर्पण जोड़ने के लिए rsync एक्सपोज़र का अनिवार्य है।

निम्नलिखित निर्देश rsync स्थापित करेंगे और एक डेबियन/उबंटू सर्वर पर हमारे मानकों के अनुपालन में पेरोट संग्रह को उजागर करेंगे। अन्य गैर-उपयुक्त प्रणालियों के लिए मामूली समायोजन आवश्यक हैं।

इसके साथ rsync स्थापित करें:

    sudo apt install rsync

संपादित करें /etc/rsyncd.conf nano के साथ:

    sudo nano /etc/rsyncd.conf

कॉन्फ़िगरेशन फ़ाइल में निम्न सेटिंग्स पेस्ट करें और इसे सहेजें:

    [parrot]
            comment = Parrot OS - full archive [rsync.parrot.sh/parrot]
            path = /var/www/html/parrot/
            hosts allow = *
            #hosts deny = *
            list=true
            uid=www-data
            gid=www-data
            read only = yes
            use chroot=yes
            dont compress # for better performance
    
    [parrot-iso]
            comment = Parrot OS - ISO files only [rsync.parrot.sh/parrot-iso]
            path = /var/www/html/parrot/
            exclude = pool dists
            hosts allow = *
            list=true
            uid=www-data
            gid=www-data
            read only = yes
            use chroot=yes
            dont compress


rsync सेवा सक्षम करें:

    sudo systemctl enable rsync    

rsync सेवा प्रारंभ करें:

    sudo service rsync start


### अपने मिरर को आधिकारिक बनाएं ###

यदि आप चाहते हैं कि आपका दर्पण हमारी आधिकारिक मिरर सूची और हमारे मिरर निदेशकों में जोड़ा जाए, तो हमें `team AT parrotsec DOT org` पर ईमेल करें।

मज़े करो :)
