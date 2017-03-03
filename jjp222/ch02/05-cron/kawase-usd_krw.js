let rssUri = 'http://api.aoikujira.com/kawase/get.php?code=USD&format=json',
    request = require('request'),
    fs = require('fs');


request(rssUri, (err, res, body) => {
    if ( !err && res.statusCode == 200 ) {
        writeFile(body);
    }
});

function writeFile(body) {
    let r = JSON.parse(body),
        krw = r['KRW'],
        t = new Date(),
        fname = ["USD_KRW_", t.getFullYear(), '-', t.getMonth()+1, '-', t.getDay(), '.txt'] .join(''),
        text = '1usd = ' + krw + 'krw';
    console.log(text);
    fs.writeFile(fname, text);
}