var http = require('http');

var server = http.createServer(function(req,res){
	var url = 'http://google.com';
	var body = '<p>Redirection to <a href="'+url+'">'
		+url+'</a></p>';

	res.setHeader('Location',url);
	res.setHeader('Content-Length',body.length);
	res.setHeader('Content-Type','text/html');
	res.statusCode = 302;
	res.end(body);
})
console.log('start at 3000');
server.listen(3000);