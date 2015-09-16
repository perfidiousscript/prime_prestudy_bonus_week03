function square(squ){
	return squ*squ;
};

function half(hal){
	console.log("Your number is " + hal/2);
};

function check(che) {
	//So I learned that Prompt always returns a string, which was making this function difficult for a little bit. 
		var checked = Number(che);
		if(typeof checked == NaN || null || undefined){
			console.log("Please choose a valid number")
		} else {
			return checked;
		}
	};

var num = prompt("What number would you like to find half of the square of?");

half(square(check(num)));