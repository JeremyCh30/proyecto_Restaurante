'use strict';

function initMap() {
    var alajuelita={lat: 9.915657, lng: -84.116196}
    var map = new google.maps.Map(document.getElementById('mapa'), {

    zoom: 15,
    center:alajuelita
    });

    var marker = new google.maps.Marker({
        
        position: {lat: 9.915657, lng: -84.116196},
        map: map,
        draggable: true,
        animation: google.maps.Animation.BOUNCE,
        
        icon: '../imgs/marcador.png'
    });
}