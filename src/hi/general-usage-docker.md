# सामान्य उपयोग निर्देश और उदाहरण #

#### एक कंटेनर लॉन्च करें ####

    docker run --name pcore-1 -ti parrotsec/core

<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**ध्यान दें**

  </div>
  <div class="panel-body">
  the pcore-1 name is arbitrary and can be customized
  </div>
</div>

#### कंटेनर बंद करो ####

    docker stop pcore-1

#### पहले से रुके हुए कंटेनर को फिर से शुरू करें ####

    docker start pcore-1

#### उपयोग के बाद एक कंटेनर निकालें ####

    docker rm pcore-1

#### सभी तत्काल कंटेनरों की सूची बनाएं ####

    docker ps -a

#### कई कंटेनर शुरू करें ####

on terminal 1 -> `docker run --name pentest1 -ti parrotsec/security` \
on terminal 2 -> `docker run --name pentest2 -ti parrotsec/security` \
on terminal 3 -> `docker run --name msf-listener -ti parrotsec/tools-metasploit` \

#### सभी कंटेनर हटा दें ####

    docker rm $(docker ps -qa)

#### एक कंटेनर शुरू करें और बाहर निकलने पर इसे स्वचालित रूप से हटा दें ####

    docker run --rm -ti parrotsec/core

## होस्ट के साथ फ़ाइलें साझा करने के लिए वॉल्यूम का उपयोग करें:
यह एक अच्छा अभ्यास है कि लगातार डॉकर कंटेनर न रखें, लेकिन हर उपयोग पर उन्हें हटा दें और महत्वपूर्ण फाइलों को डॉकर वॉल्यूम पर सहेजना सुनिश्चित करें।

निम्न आदेश वर्तमान निर्देशिका के अंदर एक **work** फ़ोल्डर बनाता है और इसे कंटेनर के अंदर /work में माउंट करता है।

    docker run --rm -ti -v $PWD/work:/work parrotsec/core

#### एकाधिक कंटेनरों में फ़ाइलें साझा करने के लिए वॉल्यूम का उपयोग करें ####

on terminal 1 -> `docker run --name pentest -ti -v $PWD/work:/work parrotsec/security` \
on terminal 2 -> `docker run --rm --network host -v $PWD/work:/work -ti parrotsec/security` \
on terminal 3 -> `docker run --rm -v $PWD/work:/work -ti parrotsec/tools-metasploit` \

#### कंटेनर से होस्ट के लिए एक पोर्ट खोलें ####

प्रत्येक डॉकर कंटेनर का अपना नेटवर्क स्पेस होता है जो वर्चुअल लैन से जुड़ा होता है।

डॉकर कंटेनर के भीतर से सभी ट्रैफ़िक को होस्ट कंप्यूटर द्वारा NATted किया जाएगा।

यदि आपको अपने स्थानीय कंप्यूटर के बाहर किसी पोर्ट को अन्य मशीनों के सामने प्रदर्शित करने की आवश्यकता है, तो निम्न उदाहरण का उपयोग करें:

    docker run --rm -p 8080:80 -ti parrotsec/core

ध्यान दें कि पहला पोर्ट वह पोर्ट है जो आपके होस्ट पर खोला जाएगा, और दूसरा वह कंटेनर पोर्ट है जिससे बाइंड किया जाना है।

यहाँ **-p** ध्वज का संदर्भ उपयोग है:

`-p <host port>:<container port>` (e.g. `-p 8080:80`) \
`-p <host port>:<container port>/<protocol>` (e.g. `-p 8080:80/tcp`) \
\
`-p <address>:<host port>:<container port>` (e.g. `-p 192.168.1.30:8080:80`) \
होस्ट नेटवर्क पर एकाधिक पतों के मामले में।

#### डॉकर NAT के बजाय नेटवर्क होस्ट का उपयोग करें ####

प्रत्येक डॉकर कंटेनर का अपना नेटवर्क स्पेस होता है जो वर्चुअल लैन से जुड़ा होता है।

डॉकर कंटेनर के भीतर से आने वाले सभी ट्रैफ़िक को होस्ट कंप्यूटर द्वारा NATted किया जाएगा।

यदि आपको डॉकर कंटेनर को होस्ट मशीन के समान नेटवर्किंग स्थान साझा करने की आवश्यकता है, तो नीचे दिखाए गए अनुसार **--network host** ध्वज का उपयोग करें

    docker run --rm --network host -ti parrotsec/core

<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**टिप्पणी 1**

  </div>
  <div class="panel-body">
  कंटेनर में खोले गए हर पोर्ट को होस्ट पर भी खोला जाएगा।
  </div>
</div>


<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**टिप्पणी 2**

  </div>
  <div class="panel-body">
  आप होस्ट नेटवर्क पर पैकेट सूँघने का कार्य कर सकते हैं।
  </div>
</div>


<div class="panel panel-info">
  <div class="panel-heading">
    <i class="fa fa-info-circle badge" aria-hidden="true"></i>

**टिप्पणी 3**

  </div>
  <div class="panel-body">
  कंटेनर के अंदर लागू iptables नियम मेजबान पर भी प्रभावी होंगे।
  </div>
</div>
