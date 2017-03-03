let client = require('cheerio-httpcli'),
    urlType = require('url'),
    url = 'http://jpub.tistory.com',
    param = {};

client.fetch(url, param, (err, $, res) => {
    if(err) {
        console.log('error:', err);
        return;
    }
    $('a').each( (idx, elt) => {
        let text = $(elt).text(),
            href = $(elt).attr('href'),
            href2 = '';

        if(!href) return;

        href2 = urlType.resolve(url, href);

        console.log(text, ' : ', href);
        console.log('\t => ', href2, '\n');

        
    });
});