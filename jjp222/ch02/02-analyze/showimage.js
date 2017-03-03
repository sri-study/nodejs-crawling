let client = require('cheerio-httpcli'),
    urlType = require('url'),
    url = 'http://ko.wikipedia.org/wiki/'+encodeURIComponent('강아지'),
    param = {};

client.fetch(url, param, (err, $, res) => {
    if(err) {
        console.log('error:', err);
        return;
    }
    $('img').each( (idx, elt) => {
        let text = !!$(elt).attr('alt') ? $(elt).attr('alt') : $(elt).attr('title'),
            value = urlType.resolve(url, $(elt).attr('src'));

        if(!value) return;

        value = urlType.resolve(url, value);

        console.log(text + " : " + value);
        
    });
});