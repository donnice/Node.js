/**
 * http://usejsdoc.org/
 */
var http = require('http');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World\n');
});
server.listen(3000,'192.168.2.4');
console.log('Server running at 192.168.2.4:3000/');