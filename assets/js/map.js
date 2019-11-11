
var map;

function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 50.7436337,
                    lng: 18.4208039
                }
            });


            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        var marker = new google.maps.Marker({
            position:{lat: 52.314371, lng: 4.941964},
            map:map,
        });

        var infoWindow = new google.maps.InfoWindow({
            content: '<h1>blah blah blah</h1>'
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });



            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
              }


