var words = ["Shanghai","Ann Arbor","Atlanta","Seattle","Los Angeles","New York","Palo Alto","Boston",
             "Aachen","Hong Kong","Beijing"];
// array

for(var word in words)
	console.log(words[word]);

var a = function(){
	console.log('I am a');
}

var b = function(){
	console.log('I am b');
}

var c = function(){
	console.log('I am c');
}

var d = function(){
	console.log('I am d');
}

var m_empty = [];
m_empty.push(a);
m_empty.push(b);
m_empty.push(c);
m_empty.push(d);

for(var index in m_empty){
	m_empty[index]();
}


