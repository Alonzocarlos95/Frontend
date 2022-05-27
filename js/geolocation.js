mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybG9zbWFwOTUiLCJhIjoiY2pzemhoZGFmMWIzMTQ0b2Q1ZWE2Zng4aiJ9.9m1IoeJDR3XaXtIq8iPKeQ';

// navigator.geolocation.getCurrentPosition(successLocation,
//      erroLocation, {
//          enableHighAccuracy: true
//         });

// function successLocation(position) {
//     console.log(position);
// }

// function erroLocation() {

// }

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[-79.9277056,-2.1757952],
zoom: 15
});

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

