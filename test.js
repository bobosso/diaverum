const fs = require('fs');

var lines = fs.readFileSync('./text.txt').toString().split('\n');

var keys = lines.shift().split('|');

var obj = lines.map(function(line) {
	var obj = {};
	values = line.split('|');
	for (var i = 0; i < values.length; i++){
		obj[keys[i]] = values[i];
	}
	return obj;
});

console.log(obj);


	
