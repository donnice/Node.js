var net = require('net');

var server = net.createServer(function(socket){
	socket.once('data',function(data){
		socket.write(data);
	});
});

server.listen(8888);

// EventEmitter.once(), it is a one time listener that will detach after firing once