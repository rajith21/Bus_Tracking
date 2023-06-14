function getCurrentLocation() {
  // Get the Geolocation object.
  var geolocation = navigator.geolocation;

  // Request the current location of the device.
  geolocation.getCurrentPosition(function(position) {
    // Get the latitude and longitude of the device.
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude)
    // Display the device's location on a map.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 15
    });

    // Create a marker at the device's location.
    var marker = new google.maps.Marker({
  map: map,
  position: new google.maps.LatLng(latitude, longitude)
});
    // Add the marker to the map.
    //map.addMarker(marker);
    marker.setIcon({
  url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canberra_Bus_icon.svg'
});
  });
}