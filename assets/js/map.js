
function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 50.7436337,
                    lng: 18.4208039
                }
            });


            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
    var map;
    var InforObj = [];
    var centerCords = {
        lat: 50.7436337, 
        lng: 18.4208039
    };
    var markersOnMap = [{
        placeName: "Amsterdam (Johan Cryuff Arena)",
        LatLng: [{
            lat: 52.314371,
            lng: 4.941964
        }]
    },
    {   placeName: "Baku (Olympic Stadium)",
        LatLng: [{
            lat: 40.4300,
            lng: 49.9196
        }]
    },
    {   placeName: "Bilbao (San Mames)",
        LatLng: [{
            lat: 43.2641,
            lng: -2.9494
        }]
    },
    {   placeName: "Bucharest (Arena Nationala)",
        LatLng: [{
            lat: 44.437139,
            lng: 26.152579
        }]
    },
    {   placeName: "Budapest (Puskas Arena)",
        LatLng: [{
            lat: 47.503172,
            lng: 19.097022
        }]
    },
    {   placeName: "Copenhagen (Parken Stadium)",
        LatLng: [{
            lat: 55.702701,
            lng: 12.572433
        }]
    },
    {   placeName: "Dublin (Aviva Stadium)",
        LatLng: [{
            lat: 53.335232,
            lng: -6.228457
        }]
    },
    {   placeName: "Glasgow (Hampden Park)",
        LatLng: [{
            lat: 55.825842,
            lng: -4.252048
        }]
    },
    {   placeName: "London (Wembley Stadium)",
        LatLng: [{
            lat: 51.556021,
            lng: -0.279519
        }]
    },
    {   placeName: "Munich (Allianz Arena)",
        LatLng: [{
            lat: 48.2188,
            lng: 11.624707
        }]
    },
    {   placeName: "Rome (Stadio Olimpico)",
        LatLng: [{
            lat: 41.934077,
            lng: 12.454725
        }]
    },
    {   placeName: "Saint Petersburg (Krestovsky Stadium)",
        LatLng: [{
            lat: 59.972728,
            lng: 30.221405
        }]
    },
    ];

window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
                    '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';
 
                const marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });
 
                marker.addListener('click', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
                // marker.addListener('mouseover', function () {
                //     closeOtherInfo();
                //     infowindow.open(marker.get('map'), marker);
                //     InforObj[0] = infowindow;
                // });
                // marker.addListener('mouseout', function () {
                //     closeOtherInfo();
                //     infowindow.close();
                //     InforObj[0] = infowindow;
                // });
            }
        }
 
        function closeOtherInfo() {
            if (InforObj.length > 0) {
                /* detach the info-window from the marker ... undocumented in the API docs */
                InforObj[0].set("marker", null);
                /* and close it */
                InforObj[0].close();
                /* blank the array */
                InforObj.length = 0;
            }
        }
 
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: centerCords
            });
            addMarkerInfo();
        }

       

       var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
              }

