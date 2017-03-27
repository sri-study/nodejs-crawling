var fs = require('fs');
var CSV = require('comma-separated-values');
var Iconv = require('iconv').Iconv;

var iconv = new Iconv('EUC-KR', 'UTF-8');
var buf = fs.readFileSync('text.csv');
var txt = iconv.convert(buf).toString('utf-8');

var csv = new CSV(txt, {header:false});
var records = csv.parse();

records.shift();

for (var i = 0; i < records.length ; i++) {
	var fs = records[ i ];
	var name = fs[ 0 ];
	var price = fs[ 1 ];
	var memo = fs[ 2 ];
	console.log(name, price, memo);
}