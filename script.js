var map = L.map('map').setView([37.76423006921716, -122.42960396594103], 11);

var Stamen_Terrain = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-programming-for-gis-and-rs/master/Web%20Development%20Module/Unit%201%20-%20GitHub%20and%20Leaflet/sf_crime.geojson",function(data){
    var crimeIcon = L.icon({
      iconUrl: 'https://www.s4g.com/thumbnail.asp?file=assets/images/mighty-mouse.jpg&maxx=400&maxy=0',
      iconSize: [60,60]
    });
    var crime = L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: crimeIcon});
        marker.bindPopup(feature.properties.Location + '<br/>' + feature.properties.OPEN_DT + '<br/>' + feature.properties.SUBJECT);
        return marker;
      }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(crime);
    map.addLayer(clusters);
});
