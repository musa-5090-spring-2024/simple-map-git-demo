const map = L.map('map').setView([39.99, -75.16], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

const response = await fetch('neighborhoods.geojson');
const data = await response.json();

L.geoJSON(data, {
  style: {
    color: '#444',
    weight: 1,
    fillOpacity: 0.2,
  }
}).addTo(map);
