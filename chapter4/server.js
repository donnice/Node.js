/**
 * http://usejsdoc.org/
 */
var http = require('http');
var items = [];
var formidable = require('formidable');

var server = http.createServer(function(req,res){
	if('/' == req.url){
		switch(req.method){
		case 'GET':
			show(res);
			break;
		case 'POST':
			add(req,res);
			break;
		default:
			badRequest(res);
		}
	} else {
		notFound(res);
	}
});

server.listen(3000);

function show(res){
	var html = '<html><head><title>Todo List</title></head><body>'
			 + '<h1>Todo List</h1>'
			 + '<ul>'
			 + items.map(function(item){
				 return '<li>'+item+'</li>'
			 }).join('')
			 + '</ul>'
			 + '<form method = "post" action = "/">'
			 + '<p><input type = "text" name = "item" /></p>'
			 + '<p><input type = "submit" value = "Add Item"/></p>'
			 + '</form></body></html>';
	res.setHeader('Content-Type','text/html');
	res.setHeader('Content-Length',Buffer.byteLength(html));
	res.end(html);//p110
}

function notFound(res){
	res.statusCode = 404;
	res.setHeader('Content-Type','text/plain');
	res.end('404 Not Found');
}

function upload(req,res){
	if(!isFormData(req)){
		res.statusCode = 400;
		res.end('Bad Request');
		return;
	}
	
	var form = new formidable.IncomingForm();
	
	form.on('field',function(field,value){
		console.log(field);
		console.log(value);
	});
	
	form.on('file',function(name,file){
		console.log(name);
		console.log(file);
	});
	
	form.on('end',function(){
		res.end('upload complete!');
	});
	
	form.parse(req);
	
}