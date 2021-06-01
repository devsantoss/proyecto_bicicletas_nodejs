var mymap = L.map('main_map').setView([4.62, -74.06], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2c2FudG9zIiwiYSI6ImNrcGVjb2E4dDBwdHcydnJvZ24zZmlmbDcifQ.SzllD_N9u41VT6-crVMxtA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);
