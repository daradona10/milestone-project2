var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(50.7436337,18.4208039),//Setting Initial Position
    zoom: 3
  });

  var marker = new google.maps.Marker({
    position:{lat:52.314371,lng:4.941964},
    map: map,
    title: 'Hello World!'
  });

  var marker = new google.maps.Marker({
    position:{lat:40.4300,lng:49.9196},
    map: map,
    title: 'Hello World!'
  });

  var marker = new google.maps.Marker({
    position:{lat:43.2641,lng:-2.9494},
    map: map,
    title: 'Hello World!'
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
	  newLocation(52.314371,4.941964);
	});
  
	$("#2").on('click', function ()
    {
	  newLocation(40.4300,49.9196);
	});
  
    $("#3").on('click', function ()
    {
	  newLocation(43.2641,-2.9494);
    });
    
     $("#4").on('click', function ()
    {
	  newLocation(44.437139,26.152579);
    });

     $("#5").on('click', function ()
    {
	  newLocation(47.503172, 19.097022);
    });

     $("#6").on('click', function ()
    {
	  newLocation(55.702701,12.572433);
    });

     $("#7").on('click', function ()
    {
	  newLocation(53.335232,-6.228457);
    });

     $("#8").on('click', function ()
    {
	  newLocation(55.825842,-4.252048);
    });

     $("#9").on('click', function ()
    {
	  newLocation(51.556021,-0.279519);
    });

     $("#10").on('click', function ()
    {
	  newLocation(48.2188,11.624707);
    });

     $("11").on('click', function ()
    {
	  newLocation(41.934077,12.454725);
    });

     $("#12").on('click', function ()
    {
	  newLocation(59.972728,30.221405);
    });
});


            