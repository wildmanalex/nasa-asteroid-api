$(document).ready(function(){
	$.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=uBbS7vZx5Jtx6pAfsZBVVrMThUPYxy6eMNq7m8iG', function(data){
		console.log(data);




// 2017-10-18
	for(let asteroid of data.near_earth_objects['2017-10-18']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-18 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-18 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-18 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-18 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-19
	for(let asteroid of data.near_earth_objects['2017-10-19']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-19 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-19 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-19 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-19 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-20
	for(let asteroid of data.near_earth_objects['2017-10-20']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-20 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-20 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-20 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-20 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-21
	for(let asteroid of data.near_earth_objects['2017-10-21']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-21 .asteroidname ul').append(`<li class="newasteroid">${asteroidname}</li>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-21 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-21 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-21 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-22
	for(let asteroid of data.near_earth_objects['2017-10-22']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-22 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-22 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-22 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-22 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-23
	for(let asteroid of data.near_earth_objects['2017-10-23']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-23 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-23 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-23 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-23 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-24
	for(let asteroid of data.near_earth_objects['2017-10-24']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-24 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-24 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-24 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-24 .distance').append(`<div class="distance">${distance}</div>`)
			}
		}
	}
// 2017-10-25
	for(let asteroid of data.near_earth_objects['2017-10-25']) {
				console.log(asteroid)
		if(asteroid.is_potentially_hazardous_asteroid === true) {
			var asteroidname = asteroid.name;
			$('.2017-10-25 .asteroidname').append(`<div class="newasteroid">${asteroidname}</div>`);
			if(asteroid.estimated_diameter.feet) {
				var asteroiddiameter = asteroid.estimated_diameter.feet.estimated_diameter_max;
				$('.2017-10-25 .diameter').append(`<div class="asteroiddiameter">${asteroiddiameter}</div>`);
			}
			if(asteroid.close_approach_data['0'].relative_velocity) {
				var velocity = asteroid.close_approach_data['0'].relative_velocity.miles_per_hour;
				$('.2017-10-25 .velocity').append(`<div class="velocity">${velocity}</div>`);
			}
			if(asteroid.close_approach_data['0'].miss_distance) {
				var distance = asteroid.close_approach_data['0'].miss_distance.miles;
				$('.2017-10-25 .distance').append(`<div class="distance">${distance}</div>`)
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