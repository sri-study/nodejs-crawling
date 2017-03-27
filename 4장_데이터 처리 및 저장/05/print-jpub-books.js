/**
 * Created by Administrator on 2017-03-20.♣♣jung♣♣
 */
var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서');
var PAGE_NUM = 6;

var client = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

var booklist = [];

scrape(1);


function scrape(page) {
    if (page > PAGE_NUM) {
        print();
        return;
    }

    var VISIT_URL = BASE_URL + '?page=' + page;

    client.fetch(VISIT_URL, function (err, $, res) {
        if (err) {console.log('DL error'); return;}

        var tr = $('#searchList > ol > li > span.list > a');

        if (!tr) {console.log('페이지 형식 에러'); return;}

        for (var i = 0; i < tr.length; i++) {
            var book = tr.eq(i).text();
            booklist.push(book);
        }
        scrape(page+1);
    });
}

function print() {
    for (var i in booklist) {
        console.log(booklist[i]);
    }
}