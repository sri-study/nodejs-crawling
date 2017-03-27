/**
 * Created by Administrator on 2017-03-18.♣♣jung♣♣
 */
var fs = require('fs');
var cheerio = require('cheerio');

var xml = fs.readFileSync('news_01.xml', 'utf-8');

$ = cheerio.load(xml, {xmlMode: true});

$('item').each(function (i, el) {
    var title = $(this).children('title').text();
    var desc = $(this).children('description').text();

    console.log(title);
    console.log(desc);
    console.log('-----------------------');
});
