var coords = [];

navigator.geolocation.getCurrentPosition(function(geo) {
	console.log(geo.coords);
	coords.push({lat: geo.coords.latitude, lng: geo.coords.longitude});
	initMap(coords);
})

function initMap(markers) {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: markers[0],
		scrollwheel: false,
		streetViewControl: false,
		panControl: false,
	});
	
	markers.map(function(coords, index) {
		var circle = new google.maps.Circle({
			strokeColor: '#FF0000',
			strokeOpacity: 0.2,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35,
			map: map,
			center: coords,
			radius: 300,
			name: "Some shit"
		});
		circle.addListener('click', function(e) {
			console.log(e);
			console.log(this);
			circle.fillColor = '#FFFF00';
			$('#modal-title').text(this.name);
			// $('#myModal').modal('show');
			return false;
		});
	});


}
