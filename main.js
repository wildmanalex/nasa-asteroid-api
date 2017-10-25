$(document).ready(function(){
	$.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG', function(data){
		console.log(data);




// 2017-10-18
	for(let asteroid of data.near_earth_objects['2017-10-18']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-18').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-18').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-18').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-18').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-19
	for(let asteroid of data.near_earth_objects['2017-10-19']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-20
	for(let asteroid of data.near_earth_objects['2017-10-20']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-21
	for(let asteroid of data.near_earth_objects['2017-10-21']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-22
	for(let asteroid of data.near_earth_objects['2017-10-22']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-23
	for(let asteroid of data.near_earth_objects['2017-10-23']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-24
	for(let asteroid of data.near_earth_objects['2017-10-24']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}
// 2017-10-25
	for(let asteroid of data.near_earth_objects['2017-10-25']) {
			console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			console.log('fdsafsfdsasafds')
			if(asteroid.estimated_diameter.feet) {
				console.log(asteroid.estimated_diameter.feet.estimated_diameter_max);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				console.log(asteroid.close_approach_data['0'].relative_velocity.miles_per_hour)
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				console.log(asteroid.close_approach_data['0'].miss_distance.miles)
			}
		}
	}

//end of week

	});
});
//find potentially hazardous asteroids
//for each one get its velocity
// its max diameter
// distance from earth