var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서'),
    PAGE_NUM = 6,
    client = require('cheerio-httpcli'),
    fs = require('fs'),
    urlType = require('url'),
    booklist = [];

scrape(1);

function scrape(page) {
    if(page > PAGE_NUM) {
        print();
        return;
    }

    var VISIT_URL = BASE_URL + "?page=" + page,
        tr;

    client.fetch(VISIT_URL, (err, $, res) => {
        if(err) {
            console.log('DL err');
            return;
        }

        tr = $('#searchList > ol > li > span.list > a');

        if(!tr) {
            console.log('페이지 형식 에러');
            return;
        }
        
        // console.log(tr.eq(0).text());
        tr.each(idx=> {
            booklist.push(tr.eq(idx).text());
        });

        scrape(page+1);
    });
}

function print() {
    booklist.forEach( book =>{
        console.log(book);
    });
}