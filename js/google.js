var map;
var hq = { lat: 46.41133, lng: 20.311035 };
function initMap() {
    var hq = { lat: 46.41133, lng: 20.311035 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: hq,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: hq,
        map: map,
        Animation: google.maps.Animation.DROP
    });
}
