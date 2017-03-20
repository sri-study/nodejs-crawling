
// var type = process.argv.length > 2 ? process.argv[2] : 'ini';

// console.log(type);

let ext = process.argv.length > 2 ? process.argv[2] : 'ini',
    reder = require(ext),
    fs = require('fs'),
    txt = fs.readFileSync('test.'+ext, 'utf-8');

let obj = {
    'yaml' : _=>reder.safeLoad(txt),
    'ini' : _=>reder.parse(txt)
}[ext]();

Object.keys(obj).forEach(key => {
    console.log(obj[key].color, obj[key].price);
});

    