/**
 * http://usejsdoc.org/
 */

var fs = require('fs')
	, watchDir = './watch'
	, processedDir = './done';

function Watcher(watchDir,processedDir){
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

Watcher.prototype.watch = function(){
	var watcher = this;
	fs.readdir(this.watchDir,function(err,files){
		if(err) throw err;
		for(var index in files){
			watcher.emit('process',files[index]);
		}
	});
}

Watcher.prototype.start = function(){
	var watcher = this;
	fs.watchFile(watchDir,function(){
		watcher.watch();
	});
}

var watcher = new Watcher(watchDir,processedDir);
watcher.start();