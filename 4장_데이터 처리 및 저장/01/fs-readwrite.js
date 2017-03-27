var fs = require('fs');

var txt = fs.readFileSync('sample-utf8.txt', 'utf-8');
// var txt = fs.readFileSync('sample-utf8.txt');
console.log(txt);

fs.writeFileSync('test.txt', txt);