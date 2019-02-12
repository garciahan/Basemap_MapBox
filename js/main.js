var map = L.map('map').setView([45.536, -122.610], 12.85);

mapbox_token = 'pk.eyJ1IjoiZ2FyY2lhaGEiLCJhIjoiY2pzMHV3NHdkMWJ5ZDQ5bW4yeTI3djJ4aSJ9.0i83y-pUEPXNAkTlmvEK0Q';
var gl = L.mapboxGL({
    accessToken: mapbox_token,
    style: 'mapbox://styles/garciaha/cjs0ug4an045o1fkeprk0euly',
    attribution: 'Created By <a href="https://github.com/garciahan/">Hannah Garcia</a> based on the <a href="assets/license.txt">Mapbox Ice Cream style</a>'
  }).addTo(map);
