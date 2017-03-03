/**
 * Created by Administrator on 2017-02-24.♣♣jung♣♣
 */
var client = require('cheerio-httpcli');
var urlType = require('url');
var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

client.fetch(url, param, function(err, $, res){
    if (err){
        console.log("Error : ", err); return;
    }
    $('img').each(function (idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);
        console.log(src);
    });
});