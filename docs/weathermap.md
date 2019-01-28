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
// master node2
var master = L.marker([52.237049, 21.017532], {title: 'Master Node', icon: icondc}).addTo(mymap)
.bindTooltip('Master Node', {permanent: false, opacity: 0.6})
.bindPopup("<b>Parrot Master Node 1</b><br>primary datastore<br>websites<br>git server<br>mail server<br>community portal<br>mirror director");
// master gimli
var master = L.marker([38.1320500, 13.3356100], {title: 'Master Node', icon: icondc}).addTo(mymap)
.bindTooltip('Master Node', {permanent: false, opacity: 0.6})
.bindPopup("<b>Parrot Master Node 2</b><br>backup datastore<br>build platform<br>test platform<br>mirror director<br>failover services");
// arezzo
var master = L.marker([43.416698, 11.883300], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'bottom'})
.bindPopup("arezzo1.it.emea.parrotsec.org<br>arezzo2.it.emea.parrotsec.org<br>arezzo3.it.emea.parrotsec.org");
// frankfurt
var master = L.marker([50.110924, 8.682127], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'bottom'})
.bindPopup("frankfurt1.de.emea.parrotsec.org<br>frankfurt2.de.emea.parrotsec.org");
// london
var master = L.marker([51.514198, -0.093100], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'top'})
.bindPopup("london1.uk.emea.parrotsec.org");
// newyork
var master = L.marker([40.7142700, -74.0059700], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'auto'})
.bindPopup("newyork1.us.ncsa.parrotsec.org<br>newyork2.us.ncsa.parrotsec.org");
//sanfrancisco
var master = L.marker([37.773972, -122.431297], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'auto'})
.bindPopup("sanfrancisco1.us.ncsa.parrotsec.org<br>sanfrancisco2.us.ncsa.parrotsec.org");
// toronto
var master = L.marker([43.655499, -79.362602], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'auto'})
.bindPopup("toronto1.ca.ncsa.parrotsec.org");
// tokyo
var master = L.marker([35.583302, 139.748199], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'right'})
.bindPopup("tokyo1.jp.apac.parrotsec.org");
// singapore
var master = L.marker([1.293100, 103.855797], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'left'})
.bindPopup("singapore1.sg.apac.parrotsec.org");
// bangalore
var master = L.marker([12.983200, 77.583298], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'top'})
.bindPopup("bangalore1.in.apac.parrotsec.org");
// sydney
var master = L.marker([-33.861198, 151.198196], {title: 'CDN Edge', icon: iconserver}).addTo(mymap)
.bindTooltip('CDN Edge', {permanent: false, opacity: 0.6, direction: 'auto'})
.bindPopup("sydney1.au.apac.parrotsec.org");
//
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 10,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);
</script>
