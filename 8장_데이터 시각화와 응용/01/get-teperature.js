/**
 * Created by Administrator on 2017-06-18. jung
 */

var RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";
var SAVE_PATH = "temperature-data.js";

var client = require('cheerio-httpcli');
var fs = require('fs');

client.fetch(RSS, {}, function(err, $, res){
    if(err) {console.log("error"); return;}

    var res = [];
    $("location:nth-child(1) >  data").each(function (idx) {
        var tmEf = $(this).find('tmEf').text();
        if (tmEf.match('00:00')){
            var tmn = $(this).find('tmn').text();
            var tmx = $(this).find('tmx').text();
            var line = [tmEf, parseInt(tmn), parseInt(tmx)];
            res.push(line);
            console.log(line);
        }
    });

    res.unshift(['날짜', '최저 기온', '최고 기온']);
    var src = "var tempData =" + JSON.stringify(res);
    fs.writeFileSync(SAVE_PATH, src, "utf-8");
    console.log("ok!!");
});