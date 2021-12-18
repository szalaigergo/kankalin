var map;
var latitude = 46.418543903777504;
var longitude = 20.347704207038248;
var hq = { lat: latitude, lng: longitude };
function initMap() {
    var hq = { lat: latitude, lng: longitude };
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
