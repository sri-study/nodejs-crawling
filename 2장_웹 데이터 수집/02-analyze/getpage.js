/**
 * Created by Administrator on 2017-02-22.♣♣jung♣♣
 */
var client = require('cheerio-httpcli');

var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url, param, function(err, $, res){
    if (err){
        console.log("Error : ", err); return;
    }
    var body = $.html();
    console.log(body);
});