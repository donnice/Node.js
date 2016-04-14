/**
 * http://usejsdoc.org/
 */
var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var nameUsed = [];
var currentRoom = {};

exports.listen = function(server){
	io = socketio.listen(server);
	
}