let client = require('cheerio-httpcli'),
    request = require('request'),
    fs = require('fs'),
    urlType = require('url'),
    savedir = __dirname + '/img',
    url = 'http://ko.wikipedia.org/wiki/'+encodeURIComponent('강아지'),
    savepath = 'download-node-request.html',
    param = {};


if (!fs.existsSync(savedir)) {
    fs.mkdirSync(savedir);
}

client.fetch(url, param, (err, $, res) => {
    if(err) {
        console.log('error:', err);
        return;
    }
    $('img').each( (idx, elt) => {
        let text = !!$(elt).attr('alt') ? $(elt).attr('alt') : $(elt).attr('title'),
            src = urlType.resolve(url, $(elt).attr('src')),
            fname;

        if(!src) return;

        src = urlType.resolve(url, src);        
        fname = urlType.parse(src).pathname;
        fname = savedir+'/'+fname.replace(/[^a-zA-Z0-9\.]/g, '_');
        
        request(src).pipe(fs.createWriteStream(fname));
        console.log("\ndownload : " + src + '\n');
        
    });
});


request(url).pipe(fs.createWriteStream(savepath));

