// euc-kr을 읽어서 utf-8로 저장

let fs = require('fs'),
    encoding = require('encoding'),
    buf = fs.readFileSync('sample-euckr.txt'),
    buf2 = encoding.convert(buf, 'utf-8', 'euc-kr'),
    txt = buf2.toString();

console.log(txt);

fs.writeFileSync('conv_utf8.txt', txt);
    
    