var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: new google.maps.LatLng(48.1293954,12.556663),//Setting Initial Position
    zoom: 10
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
	  newLocation(48.1293954,11.556663);
	});
  
	$("#2").on('click', function ()
    {
	  newLocation(40.7033127,-73.979681);
	});
  
    $("#3").on('click', function ()
    {
	  newLocation(55.749792,37.632495);
	});
});

            