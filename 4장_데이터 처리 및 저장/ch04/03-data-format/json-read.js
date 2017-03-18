/**
 * Created by Administrator on 2017-03-18.♣♣jung♣♣
 */
var fs = require('fs');

var json = fs.readFileSync('test.json', 'utf-8');

var obj = JSON.parse(json);

var items = obj.items;
for (var i in items){
    var item = items[i];
    var name = item.name;
    var price = item.price;
    console.log(name, price);
}