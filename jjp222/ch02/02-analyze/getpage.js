let client = require('cheerio-httpcli'),
    url = 'http://jpub.tistory.com',
    param = {};

client.fetch(url, param, (err, $, res) => {
    if(err) {
        console.log('error:', err);
        return;
    }
    console.log($.html());
});