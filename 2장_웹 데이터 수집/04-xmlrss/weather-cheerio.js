/**
 * Created by Administrator on 2017-02-28.♣♣jung♣♣
 */
var RSS = 'http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109';

var client = require('cheerio-httpcli');

client.fetch(RSS, {}, function (err, $, res) {
    if (err) {console.log('error'); return;}

    var city = $('location:nth-child(1) > city').text();
    $('location:nth-child(1) > data').each(function(idx){
        var tmEf = $(this).find('tmEf').text();
        var wf = $(this).find('wf').text();
        var tmn = $(this).find('tmn').text();
        var tmx = $(this).find('tmx').text();

        console.log(city + ' / ' + tmEf + ' / ' + wf + ' / 최저 : ' + tmn + ' / 최고 : ' + tmx);
    });
});