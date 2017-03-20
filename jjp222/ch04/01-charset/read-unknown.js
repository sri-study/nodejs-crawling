let fs = require('fs'),
    encoding = require('encoding'),
    jschardet = require('jschardet'),
    buf = fs.readFileSync('sample-euckr.txt'),
    det = jschardet.detect(buf);

console.log(det);

let txt = encoding.convert(buf, 'utf-8', det.encoding).toString();
console.log(txt);

    
    