let DB_PATH ='jpub.sqlite',
    sqlite = require('sqlite3').verbose(),
    db = new sqlite.Database(DB_PATH),
    BASE_URL = 'http://jpub.tistory.com/category' + encodeURIComponent('제이펍의 도서'),
    PAGE_NUM = 1,
    
    client = require('cheerio-httpcli'),
    fs = require('fs'),
    urlType = require('url'),
    booklist = [];

scrape(1);

function scrape(page) {
    if(page > PAGE_NUM) {
        dbinsert();
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

function dbinsert() {
    let query = '';

    db.serialize(_=>{
        db.run('CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY, token TEXT)');
        
        let stmt = db.prepare('INSERT INTO book(token) VALUES(?)');

        booklist.forEach((value, index, array) => {
            let words = value.split(' ');
            //console.log(words);
            words.forEach(data=>{
                //console.log(data);
                //ins_stmt.run(data);
            });
        });
        
        stmt.finalize();

        query = ' SELECT token, COUNT(token) AS cnt '+
                ' FROM book '+
                ' GROUP BY token HAVING cnt > 3 '+
                ' ORDER BY cnt DESC ';
        db.each(query, (err, row) => {
            console.log(row.cnt + '회 : ' + row.token);
        });
    });
}

//db.close();

//     db.serialize(_=>{
//         qurey = 'CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY, token TEXT)';
//         db.run(query);

//         query = 'INSERT INTO book(token) VALUES(?)';
//         let ins_stmt = db.prepare(query);

//         booklist.forEach((value, index, array) => {
//             let words = value.split(' ');
//             //console.log(words);
//             words.forEach(data=>{
//                 //console.log(data);
//                 //ins_stmt.run(data);
//             });
//             ins_stmt.run(['data']);
//         });
//         ins_stmt.finalize();        

//         console.log('집계 결과');

//         // query = ' SELECT token, COUNT(token) AS cnt '+
//         //         ' FROM book '+
//         //         ' GROUP BY token HAVING cnt > 3 '+
//         //         ' ORDER BY cnt DESC ';
//         // db.each(query, (err, row) => {
//         //     // console.log(err);
//         //     console.log(row.cnt + '회:' + row.token);
//         // });
//         // db.each('SELECT * FROM book', (err, row) => {
//         //     console.log(row.cnt + ' : ' + row.token);
//         // });
//     });
// }