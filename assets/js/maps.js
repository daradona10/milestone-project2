var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(50.7436337,18.4208039),//Setting Initial Position
    zoom: 4
  });

  var marker = new google.maps.Marker({
    position:{lat:52.314371,lng:4.941964},
    map: map,
    title: 'Johan Cryuff Arena'
  });

  var marker = new google.maps.Marker({
    position:{lat:40.4300,lng:49.9196},
    map: map,
    title: 'Olympic Stadium'
  });

  var marker = new google.maps.Marker({
    position:{lat:43.2641,lng:-2.9494},
    map: map,
    title: 'San Mames Stadium'
  });

  var marker = new google.maps.Marker({
    position:{lat:44.437139,lng:26.152579},
    map: map,
    title: 'Arena Nationala'
  });

  var marker = new google.maps.Marker({
    position:{lat:47.503172,lng: 19.097022},
    map: map,
    title: 'Puskas Arena'
  });

  var marker = new google.maps.Marker({
    position:{lat:55.702701,lng:12.572433},
    map: map,
    title: 'Parken Stadium'
  });

  var marker = new google.maps.Marker({
    position:{lat:53.335232,lng:-6.228457},
    map: map,
    title: 'Aviva Stadium'
  });

  var marker = new google.maps.Marker({
    position:{lat: 55.825842,lng:-4.252048},
    map: map,
    title: 'Hampden Park'
  });

  var marker = new google.maps.Marker({
    position:{lat:51.556021,lng:-0.279519},
    map: map,
    title: 'Wembley Stadium'
  });

  var marker = new google.maps.Marker({
    position:{lat: 48.2188,lng:11.624707},
    map: map,
    title: 'Allianz Arena'
  });

  var marker = new google.maps.Marker({
    position:{lat:41.9341,lng:12.4547},
    map: map,
    title: 'Stadio Olimpico'
  });

  var marker = new google.maps.Marker({
    position:{lat:59.972728,lng:30.221405},
    map: map,
    title: 'Krestovsky Stadium'
  });
}


function newLocation(newLat,newLng)
{
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

//Setting Location with jQuery
$(document).ready(function ()
{
    
    $("#1").on('click', function ()
    {
      let latLng = new google.maps.LatLng(52.314371, 4.941964);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
      
    //   newLocation(52.314371,4.941964); 
	});
  
	$("#2").on('click', function ()
    {
	let latLng = new google.maps.LatLng(40.4300, 49.9196);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
   
	});
  
    $("#3").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(43.2641,-2.9494);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });
    
     $("#4").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(44.437139,26.152579);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    
    });

     $("#5").on('click', function ()
    {
	 let latLng = new google.maps.LatLng(47.503172,19.097022);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#6").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(55.702701,12.572433,);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#7").on('click', function ()
    {
	 let latLng = new google.maps.LatLng(53.335232,-6.228457);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#8").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(55.825842,-4.252048);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#9").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(51.556021,-0.279519);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#10").on('click', function ()
    {
	 let latLng = new google.maps.LatLng(48.2188,11.624707);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#11").on('click', function ()
    {
	 let latLng = new google.maps.LatLng(41.9341,12.4547);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });

     $("#12").on('click', function ()
    {
	  let latLng = new google.maps.LatLng(59.972728,30.221405);
      map.setZoom(15)
      map.panTo(latLng)
      var delayInMilliseconds = 3000; //3 second

      setTimeout(function() {
     map.setZoom(4)
      map.panTo(latLng)
  //your code to be executed after 1 second
}, delayInMilliseconds);
    });
});


            