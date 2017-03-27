/**
 * Created by Administrator on 2017-03-18.♣♣jung♣♣
 */
var CSON = require('cson');
var fs = require('fs');

var cson = fs.readFileSync('test.cson', 'utf-8');

var obj = CSON.parse(cson);

for (var i in obj.items) {
    var it = obj.items[i];
    console.log(it.name, it.price);
}

var cson_out = CSON.stringify(obj);
console.log(cson_out);