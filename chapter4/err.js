/**
 * http://usejsdoc.org/
 */

var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');

var root ="public";

var server = http.createServer(function(req,res){
	var url = parse(req.url);
	var path = join(root,url.pathname);
	fs.stat(path,function(err,stat){
		if(err){
			if('ENOENT' == err.code){
				res.statusCode = 404;
				res.end('<html><head><h1>404 Not Found</h1></head></html>');
			} else {
				res.statusCode = 500;
				res.end('Internal Server Error');
			}
		} else {
			res.setHeader('Content-Length',stat.size);
			var stream = fs.createReadStream(path);
			stream.pipe(res);
			stream.on('error',function(err){
				res.statusCode = 500;
				res.end('Internal Server Error');
			});
		}
	});
});

server.listen(3000);
console.log('Server running at 192.168.2.4:3000/');