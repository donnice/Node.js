function asynFunction(callback) {
	setTimeout(callback,200);
}

var color = 'blue';

(function(color){
	asynFunction(function(){
		console.log('The color is '+color);
	})
})(color);

color = 'green';

// JavaScript closure is able to freeze the content of color
// it becomes a local to the scope of that function
// so outside change doesn't affect it