function asynFunction(callback){
	setTimeout(callback,200);
}

var color = 'blue';

asynFunction(function(){
	console.log('The color is '+color);
});

color = 'green';