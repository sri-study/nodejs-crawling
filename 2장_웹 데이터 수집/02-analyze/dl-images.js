/**
 * Created by Administrator on 2017-02-24.♣♣jung♣♣
 */
var client = require('cheerio-httpcli');
var request = require('request');
var fs = require('fs');
var urlType = require('url');

var savedir = __dirname + '/img';
if (!fs.existsSync(savedir)){
    fs.mkdirSync(savedir);
}

var url = "https://ko.wikipedia.org/wiki/" + encodeURIComponent("강아지");
var param = {};

client.fetch(url, param, function(err, $, res){
    if (err){
        console.log("Error : ", err); return;
    }
    $('img').each(function (idx) {
        var src = $(this).attr('src');
        src = urlType.resolve(url, src);

        var fname = urlType.parse(src).pathname;
        fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

        request(src).pipe(fs.createWriteStream(fname));
    });
});