function addRestaurantListener(){
  startBtn = document.getElementById('start-random-button');
  
  // Replace 'functionName' with the name of the function that you have written
  startBtn.addEventListener("click", start)

  getBtn = document.getElementById('get-restaurant-button');
  
  // Replace 'functionName' with the name of the function that you have written
  getBtn.addEventListener("click", get);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRestaurantListener);

//creat var pick and start_ran
var pick;
var start_ran;
function start() {
	
	var restaurant = document.getElementById('restaurant');
	var restaurant_names = ["A.R. Valentien", "Truluck", "The Taco Stand", "Kono's cafe"];
	var color = ["red", "green", "yellow", 'blue'];
	
	start_ran = setInterval(function(){ 
		var random_num = Math.floor((Math.random() * 4))
		restaurant.innerHTML = restaurant_names[random_num]; 
		pick = restaurant_names[random_num];
		restaurant.style.color = color[random_num];
		
	}, 200);
}

function get() {
	console.log(pick);
	clearInterval(start_ran);
	var outprint = document.getElementById('outprint');
	outprint.innerHTML = "Great, let's go to " + pick + "!";
}


