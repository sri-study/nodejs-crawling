let client = require('cheerio-httpcli'),
    url = 'http://jpub.tistory.com',
    param = {};

client.fetch(url, param, (err, $, res) => {
    if(err) {
        console.log('error:', err);
        return;
    }
    $('a').each( (idx, elt) => {
        let text = $(elt).text(),
            href = $(elt).attr('href');
            console.log(text, ' : ', href);
    });
});