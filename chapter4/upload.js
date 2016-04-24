/**
 * http://usejsdoc.org/
 */
var http = require('http');
var formidable = require('formidable');
var server = http.createServer(function(req,res){
	switch(req.method){
	case 'GET':
		show(req,res);
		break;
	case 'POST':
		upload(req,res);
		break;
	}
});

function show(req,res){
	var html = ''
		+ '<html><head><title>Todo List</title></head><body>'
		+ '<form method = "post" action = "/" enctype = "multipart/form-data">'
		+ '<p><input type = "text" name = "name" /></p>'
		+ '<p><input type = "file" name = "file" /></p>'
		+ '<p><input type = "submit" value = "Upload" /></p>'
		+ '</form></body></html>';
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

server.listen(3000);