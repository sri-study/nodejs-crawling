/**
 * Created by Administrator on 2017-02-28.♣♣jung♣♣
 */
var RSS = 'http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

var parseString = require('xml2js').parseString;
var request = require('request');

request(RSS, function(err, response, body){
    if (!err && response.statusCode == 200){
        analyzeRss(body);
    }
});

function analyzeRss(xml) {
    parseString(xml, function (err, obj) {
        if (err) { console.log(err); return;}

        //console.log(JSON.stringify(obj));
        var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
        var city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

        for (var i in datas) {
            var data = datas[i];
            console.log(city + ' / ' + data.tmEf + ' / ' + data.wf + ' / 최저 : ' + data.tmn + ' / 최고 : ' + data.tmx);
        }
    });
}