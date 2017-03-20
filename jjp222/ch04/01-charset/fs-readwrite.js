let fs = require('fs'),
    txt = fs.readFileSync('sample-utf8.txt', 'utf-8');

console.log(txt);

fs.writeFileSync('test.txt', txt);