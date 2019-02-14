<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
<style>
.col-md-9 {
height: 80vh;
}
.col-md-3 {
visibility: hidden;
}
</style>
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" crossorigin=""></script>
<div id="mapid" style="position: fixed; left: 10px; right: 10px; bottom: 10px; top: 10px; height: 90vh"></div>
<script>
var mymap = L.map('mapid').setView([20, 0], 3);
var icondc = L.icon({
iconUrl: '../img/icon-dc.png',
iconSize: [60, 60],
});
var iconserver = L.icon({
iconUrl: '../img/icon-server.png',
iconSize: [40, 40],
});
var iconmirror = L.icon({
iconUrl: '../img/icon-mirror.png',
iconSize: [40, 40],
});
// master node2
var master = L.marker([52.237049, 21.017532], {title: 'Master Node', icon: icondc}).addTo(mymap)
.bindTooltip('Master Node', {permanent: false, opacity: 0.8})
.bindPopup("<b>Parrot Master Node 1</b><br>primary datastore<br>websites<br>git server<br>mail server<br>community portal<br>mirror director");
// master gimli
var master = L.marker([38.1320500, 13.3356100], {title: 'Master Node', icon: icondc}).addTo(mymap)
.bindTooltip('Master Node', {permanent: false, opacity: 0.8})
.bindPopup("<b>Parrot Master Node 2</b><br>backup datastore<br>build platform<br>test platform<br>mirror director<br>failover services");
// arezzo
var master = L.marker([43.416698, 11.883300], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('3', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>arezzo1.it.emea.parrotsec.org<br>arezzo2.it.emea.parrotsec.org<br>arezzo3.it.emea.parrotsec.org");
// frankfurt
var master = L.marker([50.110924, 8.682127], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('2', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>frankfurt1.de.emea.parrotsec.org<br>frankfurt2.de.emea.parrotsec.org");
// london
var master = L.marker([51.514198, -0.093100], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>london1.uk.emea.parrotsec.org");
// newyork
var master = L.marker([40.8370495, -73.8654295], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('2', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>newyork1.us.ncsa.parrotsec.org<br>newyork2.us.ncsa.parrotsec.org<br>ny.any.parrotsec.org");
//sanfrancisco
var master = L.marker([37.3382082, -121.8863286], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('2', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>sanfrancisco1.us.ncsa.parrotsec.org<br>sanfrancisco2.us.ncsa.parrotsec.org");
//losangeles
var master = L.marker([34.052235, -118.243683], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('2', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>la.any.parrotsec.org");
// toronto
var master = L.marker([43.655499, -79.362602], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>toronto1.ca.ncsa.parrotsec.org");
// tokyo
var master = L.marker([35.583302, 139.748199], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>tokyo1.jp.apac.parrotsec.org");
// singapore
var master = L.marker([1.290117, 103.64974], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>singapore1.sg.apac.parrotsec.org");
// bangalore
var master = L.marker([12.983200, 77.583298], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>bangalore1.in.apac.parrotsec.org");
// sydney
var master = L.marker([-33.861198, 151.198196], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('1', {permanent: true, opacity: 0.8, direction: 'top'})
.bindPopup("<b>CDN Edge Servers:</b><br>sydney1.au.apac.parrotsec.org");
// mirror umu
var master = L.marker([59.3247, 18.056], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>ACC UMU (Academic Computer Club, Umea University)<br>[http://ftp.acc.umu.se/mirror/parrotsec.org/parrot/](http://ftp.acc.umu.se/mirror/parrotsec.org/parrot/)');
// mirror uoc
var master = L.marker([35.325, 25.1306], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>University of Crete<br>[http://ftp.cc.uoc.gr/mirrors/linux/parrot/](http://http://ftp.cc.uoc.gr/mirrors/linux/parrot/)');
// mirror garr
var master = L.marker([41.1114800, 16.8554000], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>GARR Consortium<br>[http://parrot.mirror.garr.it/mirrors/parrot/](http://parrot.mirror.garr.it/mirrors/parrot/)');
// mirror dotsrc
var master = L.marker([55.8396, 12.069], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Dotsrc (Aalborg University)<br>[http://mirrors.dotsrc.org/parrot/](http://mirrors.dotsrc.org/parrot/)');
// mirror eb
var master = L.marker([41.0214, 28.9948], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Eczacibasi Bilisim San.ve Tic.<br>[http://turkey.archive.parrotsec.org/parrot/](http://turkey.archive.parrotsec.org/parrot/)');
// mirror nluug
var master = L.marker([52.3824, 4.8995], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>The Netherlands Local Unix User Group<br>[http://ftp.nluug.nl/os/Linux/distr/parrot/](http://ftp.nluug.nl/os/Linux/distr/parrot/)');
// mirror halifax
var master = L.marker([50.776, 6.0872], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>RWTH-Aachen  (Halifax Students Group)<br>[http://ftp.halifax.rwth-aachen.de/parrotsec/](http://ftp.halifax.rwth-aachen.de/parrotsec/)');
// mirror esslingen
var master = L.marker([48.7667, 9.1833], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Esslingen (University of Applied Sciences)<br>[http://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org/](http://ftp-stud.hs-esslingen.de/pub/Mirrors/archive.parrotsec.org/)');
// mirror up
var master = L.marker([41.1496, -8.611], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>University of Porto<br>[http://mirrors.up.pt/parrot/](http://mirrors.up.pt/parrot/)');
// mirror osluz
var master = L.marker([41.6561, -0.8773], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Osluz (Oficina de software libre de la Universidad de Zaragoza)<br>[http://matojo.unizar.es/parrot/](http://matojo.unizar.es/parrot/)');
// mirror belnet
var master = L.marker([50.85, 4.35], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Belgian National Research network<br>[http://ftp.belnet.be/archive.parrotsec.org/](http://ftp.belnet.be/archive.parrotsec.org/)');
// mirror asis
var master = L.marker([35.69, 51.42], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>ASIS<br>[http://parrot.asis.io/](http://parrot.asis.io/)');
// mirror mit
var master = L.marker([42.3647, -71.1042], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>SIPB MIT<br>[http://mirrors.mit.edu/parrot/](http://mirrors.mit.edu/parrot/)');
// mirror clarkson
var master = L.marker([44.6592, -74.9681], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Clarkson University<br>[http://mirror.clarkson.edu/parrot/](http://mirror.clarkson.edu/parrot/)');
// mirror osusol
var master = L.marker([42.497540120, -123.277491], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Oregon State University - Open Source Lab<br>[http://ftp.osuosl.org/pub/parrotos/](http://ftp.osuosl.org/pub/parrotos/)');
// mirror berkeley
var master = L.marker([37.8718992, -122.2585399], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Berkeley Open Computing Facility<br>[http://mirrors.ocf.berkeley.edu/parrot/](http://mirrors.ocf.berkeley.edu/parrot/)');
// mirror cedia
var master = L.marker([-2.9005499, -79.0045319], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>RED CEDIA (National research and education center of Ecuador)<br>[http://mirror.cedia.org.ec/parrot/](http://mirror.cedia.org.ec/parrot/)');
// mirror usp
var master = L.marker([-23.627, -46.635], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>University of Sao paulo<br>[http://sft.if.usp.br/parrot/](http://sft.if.usp.br/parrot/)');
// mirror uta
var master = L.marker([-1.241667, -78.619720], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>UTA (Universidad Técnica de ambato)<br>[http://mirror.uta.edu.ec/parrot/](http://mirror.uta.edu.ec/parrot/)');
// mirror ueb
var master = L.marker([-1.59263, -79.00098], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br><br>[http://](http://)');
// mirror kku
var master = L.marker([16.44671, 102.833], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>KKU (Khon Kaen University)<br>[http://mirror.kku.ac.th/parrot/](http://mirror.kku.ac.th/parrot/)');
// mirror shu
var master = L.marker([31.317665396, 121.385665124], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>SHU(Shanghai University)<br>[http://mirrors.shu.edu.cn/parrot/](http://mirrors.shu.edu.cn/parrot/)');
// mirror truenetwork
var master = L.marker([55.7386, 37.6068], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>True Network<br>[http://mirror.truenetwork.ru/parrot/](http://mirror.truenetwork.ru/parrot/)');
// mirror ustc
var master = L.marker([31.8639, 117.2808], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>University of Science and Technology of China and USTCLUG<br>[http://mirrors.ustc.edu.cn/parrot/](http://mirrors.ustc.edu.cn/parrot/)');
// mirror lagoon
var master = L.marker([-21.5, 165.5], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Lagoon Networks<br>[http://mirror.lagoon.nc/pub/parrot/](http://mirror.lagoon.nc/pub/parrot/)');
// mirror tuna
var master = L.marker([39.9288, 116.3889], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>TUNA (Tsinghua university of Beijing, TUNA association)<br>[http://mirrors.tuna.tsinghua.edu.cn/parrot/](http://mirrors.tuna.tsinghua.edu.cn/parrot/)');
// mirror 0x
var master = L.marker([1.34914, 103.96923], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>0x Singapore<br>[http://mirror.0x.sg/parrot/](http://mirror.0x.sg/parrot/)');
// mirror amberit
var master = L.marker([23.7, 90.375], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Amberit (Dhakacom)<br>[http://mirror.amberit.com.bd/parrotsec/](http://mirror.amberit.com.bd/parrotsec/)');
// mirror yandex
var master = L.marker([56.143063, 40.410934], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Yandex<br>[http://mirror.yandex.ru/mirrors/parrot/](http://mirror.yandex.ru/mirrors/parrot/)');
// mirror quantum
var master = L.marker([47.5, 19.0833], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>Quantum Mirror<br>[http://quantum-mirror.hu/mirrors/pub/parrot/](http://quantum-mirror.hu/mirrors/pub/parrot/)');
// mirror nchc
var master = L.marker([23.5, 121], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>NCHC (Free Software Lab)<br>[http://free.nchc.org.tw/parrot/](http://free.nchc.org.tw/parrot/)');
// mirror sjtug
var master = L.marker([31.0275000, 121.4322222], {title: 'Mirror Server', icon: iconmirror}).addTo(mymap)
.bindTooltip('mirror server', {permanent: false, opacity: 0.8, direction: 'top'})
.bindPopup('<b>Download Mirror Server:</b><br>SJTUG (SJTU *NIX User Group)<br>[http://mirrors.sjtug.sjtu.edu.cn/parrot/](http://mirrors.sjtug.sjtu.edu.cn/parrot/)');
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 10,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);
</script>
