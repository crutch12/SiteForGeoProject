var mapscaler = document.getElementById('mapscaler');
var preloader = document.getElementById('preloader');

function initMap() {


  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.753, lng: 37.609},
    zoom: 10
  });


//         google.maps.event.addListenerOnce(map, 'idle', function(){
//   preloader.classList.add('collapse');
//   mapscaler.classList.remove('collapsed');
// });

        google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
  preloader.classList.add('collapse');
  mapscaler.classList.remove('collapsed');
});

//         google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
//     google.maps.event.addListenerOnce(map, 'idle', function(){
//         preloader.classList.add('collapse');
//   mapscaler.classList.remove('collapsed');
//     });
// });

//         map.addEventListener('google-map-ready', function(e) {
//    preloader.classList.add('collapse');
//   mapscaler.classList.remove('collapsed');
// });

    //     GEvent.addListener(map, "tilesloaded", function() {
    //   console.log("Map is fully loaded");
    // });


  


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: 'Я здесь'
  });

      marker.addListener('click', function() {
    map.setZoom(17);
    map.setCenter(marker.getPosition());
  });



      map.setCenter(pos);
      map.setZoom(14);

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}



function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

