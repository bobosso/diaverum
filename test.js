const fs = require('fs');

var file = process.argv.slice(2)[0];
console.log(parse(file));

function parse(file){
	var lines = fs.readFileSync(file).toString().split('\n');
	var keys = lines.shift().split('|');

	var json = lines.map(function(line) {
		var obj = {};
		values = line.split('|');
		for (var i = 0; i < values.length; i++){
			obj[keys[i]] = values[i];
		}
		return obj;
	});
	return json;
}

//console.log(obj);


	
