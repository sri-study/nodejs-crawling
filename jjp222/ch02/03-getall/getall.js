let client = require('cheerio-httpcli'),
    request = require('request'),
    urlType = require('url'),
    fs = require('fs'),
    path = require('path');

let LINK_LEVEL = 3,
    TARGET_URL = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/',
    list = {};

downloadRec(TARGET_URL);

function downloadRec(url, level = 0) {

    // 중지조건
    if (level >= LINK_LEVEL) {
        return;
    }

    // 중복체크
    if (!!list[url]) {
        return;
    }
    list[url] = true;


    // 내부 url인지 체크
    let us = TARGET_URL.split('/'),
        base;

    us.pop(); //마지막 값(api) 삭제

    base = us.join('/');

    if (url.indexOf(base) < 0) {
        return;
    }
console.log('fetch');
    client.fetch(url, {}, (err, $, res) => {

        $('a').each( (idx, elt) => {
            let href = $(elt).attr('href');

            if (!href) {
                return;
            }

            href = urlType.resolve(url, href);

            href = href.replace(/\#(?:.+)?$/, ""); // 헤쉬태그 이후 삭제
            console.log('download ==> '+href);
            downloadRec(href, level + 1);
        });

        // 저장
        if (url.substr(url.length - 1, 1) == '/') {
            url += 'index.html';
        }

        // let savepath = url.split('/').slice(2).join('/'); // http:// 삭제
        let savepath = url.replace(/^https?:\/\//ig, '');

        checkSaveDir(savepath);
        console.log(savepath);

        fs.writeFileSync(savepath, $.html());
    });


}

function checkSaveDir(fname) {
    let dir = path.dirname(fname),
        dirlist = dir.split('/'),
        p = '';

    dirlist.map(folder => {
        p += folder + '/';
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    });
}