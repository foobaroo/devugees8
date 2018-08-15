var fs = require('fs');

var file = fs.readFileSync('./halloworld.txt', 'utf-8');

console.log( file );