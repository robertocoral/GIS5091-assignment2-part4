var map = L.map('map').setView([38.639005110722664, -90.2845213858883], 12);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

 $.getJSON("https://raw.githubusercontent.com/robertocoral/GIS5091-assignment2-part1/main/restaurants.geojson",function(data){
    L.geoJSON(data, {
  	onEachFeature: function (feature, layer) {
    		layer.bindPopup('<h3>'+feature.properties.Restaurant+'</h3>');
  		}
	}).addTo(map);
 });
