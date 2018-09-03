var map;
var markers = [];

var startPosition = { 
	lat: 52.52000659999999, 
	lng: 13.404953999999975 
};

function loadLocations() {
	$.ajax({
		url: '/location',
		type: 'GET',
		dataType: 'json',
		success: function(response) {
			let locations = response.locations;

			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 11,
				center: startPosition
			});

			for(let i=0; i<locations.length; i++) {
				let newMarker = new google.maps.Marker({
					position: {
						lat: parseFloat(locations[i].lat),
						lng: parseFloat(locations[i].lng)
					},
					map: map,
					title: locations[i].title,
					id: locations[i].id
				});

				markers.push( newMarker );
			}

			updateMarkers();
		}
	});
}

function updateMarkers() {
	$('.locations').empty();
	markers.forEach( (marker) => {
		$('.locations').append(`
			<option value="${marker.id}">${marker.title}</option>
		`);
	});
}

function saveLocation(location, cb) {
	$.ajax({
		url: '/location',
		type: 'POST',
		dataType: 'json',
		contentType: 'application/json; charset=utf-8',
		data: JSON.stringify( location ),
		success: function( response ) {
			if(response.error == 0) {
				return cb(null, response.newlocation);
			}
			else {
				return cb(xhr.responseText);
			}
		},
		error: function(xhr, status) {
			return cb( xhr.responseText );
		}
	});
	return 'hallo wlrld';
}

$(document).ready( function() {
	console.log('Document is loaded.');

	$('.new-location').on('click', function(e) {
		var geocoder = new google.maps.Geocoder();
		var locationName = $('.location').val();
		geocoder.geocode({ address: locationName }, function(results, status) {
			if(status === google.maps.GeocoderStatus.OK) {
				let lat = results[0].geometry.location.lat();
				let lng = results[0].geometry.location.lng();

				let newLocation = {
					lat: lat,
					lng: lng,
					title: locationName
				};

				// to be continued ...
				saveLocation(newLocation, function(err, response) {
					if(err) {
						alert('could not save location on backend: ' + err);
						return;
					}
					
					// success route
					let newMarker = new google.maps.Marker({
						position: {
							lat: lat,
							lng: lng
						},
						map: map,
						title: locationName,
						id: response.id
					});

					markers.push( newMarker );
					updateMarkers();

					map.setCenter({lat:lat,lng:lng});
					map.setZoom(3);
				});
			}
			else {
				alert('Location was not found.');
			}
		});
	});

	$('.locations').on('change', function(e) {
		let markerId = $(this).val();

		for(let i=0; i<markers.length; i++) {
			if(markers[i].id === markerId) {
				map.setCenter(markers[i].position);
				break;
			}
		}
	});

	$('.zoomout').on('click', function() {
		map.setZoom( 3 );
	});

	$('.remove-location').on('click', function(e) {
		let markerId = $('.locations').val();
		
		function deleteMarker() {
			for(let i=0; i<markers.length; i++) {
				if(markers[i].id === markerId) {
					markers[i].setMap(null);
					markers.splice(i, 1);
					$('option[value="'+markerId+'"').remove();
					break;
				}
			}
		}
		
		$.ajax({
			url: '/location/' + markerId,
			type: 'DELETE',
			dataType: 'json',
			success: function(response) {
				if(response.error != 0) {
					alert('could not delete marker!');
				}
				else {
					console.log('successfully deleted marker');
					deleteMarker();
				}
			},
			error: function(xhr, status) {
				alert(xhr.responseText);
			}
		});	
	});
});

