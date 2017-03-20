/**
 * Created by Administrator on 2017-03-20.♣♣jung♣♣
 */
var DB_PATH = __dirname + '/jpub.sqlite';
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(DB_PATH);

var BASE_URL = 'http://jpub.tistory.com/category/' + encodeURIComponent('제이펍의 도서');
var PAGE_NUM = 2; // 시간 관계상 2페이지 까지만

var client = require('cheerio-httpcli');
var fs = require('fs');
var urlType = require('url');

var booklist = [];

scrape(1);


function scrape(page) {
    if (page > PAGE_NUM) {
        dbinsert();
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

function dbinsert() {
    db.serialize(function () {
        // 기존 테이블 테이터가 잘못들어가서 삭제
        db.run('DROP TABLE IF EXISTS book');
        db.run('CREATE TABLE IF NOT EXISTS book(' +
            'id INTEGER PRIMARY KEY, ' +
            'token TEXT)');

        var ins_stmt = db.prepare(
            'INSERT INTO book (token) ' +
            'VALUES(?)');

        booklist.forEach(function (value, index, array) {
            // 공백기준으로 배열을 만들어야 하는데 오타가 있어서 수정.
            var words = value.split(' ');

            for (var i in words) {
                ins_stmt.run(words[i]);
            }
        });
        ins_stmt.finalize();

        console.log('집계결과');

        // 쿼리문이 뛰어쓰기가 없어서 수정
        db.each('SELECT token, COUNT(token) as cnt ' +
            'FROM book GROUP BY token having cnt > 3 ' +
            'ORDER BY cnt DESC',
        function (err, row) {
            if (err) {console.log('CNT error'); return;}
            console.log(row.cnt + '회:' + row.token);
        });
    });
}
