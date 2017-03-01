/**
 * Created by Administrator on 2017-03-01.♣♣jung♣♣
 */
var API = "http://api.aoikujira.com/kawase/get.php?code=USD&format=json";

var request = require('request');
var fs = require('fs');

request(API, function (err, response, body) {
    if (err || response.statusCode != 200){
        console.log('error', err); return;
    }

    var r = JSON.parse(body);
    var krw = r['KRW'];

    var t = new Date();
    var fname = 'USD_KRW_' + t.getFullYear() + '-' + (t.getMonth()+1) + '-' + t.getDay() + '.txt';
    var text = '1usd = ' + krw + 'krw';
    //console.log(t);
    //console.log(t.getFullYear());
    //console.log(t.getMonth());
    //console.log(t.getDay());
    //console.log(t.getDate());
    console.log(text);
    fs.writeFile(fname, text);
});