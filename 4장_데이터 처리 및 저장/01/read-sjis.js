var fs = require('fs');
var Iconv = require('iconv').Iconv;

var euckr_utf8 = new Iconv('euc-kr', 'utf-8');
var buf = fs.readFileSync('sample-euckr.txt');

var buf2 = euckr_utf8.convert(buf);
var txt = buf2.toString('utf-8');
console.log(txt);

fs.writeFileSync('test.txt', txt, 'utf-8');