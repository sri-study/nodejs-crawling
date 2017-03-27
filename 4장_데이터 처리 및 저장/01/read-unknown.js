var fs = require('fs');
var Iconv = require('iconv').Iconv;
var jschardet = require('jschardet');

var buf = fs.readFileSync('sample-unknown.txt');

var det = jschardet.detect(buf);
console.log(det);

var iconv = new Iconv(det.encoding, "utf-8");
var buf2 = iconv.convert(buf);
var txt = buf2.toString("utf-8");
console.log(txt);
