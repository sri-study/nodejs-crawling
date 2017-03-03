let request = require('request'),
    fs = require('fs'),
    url = 'http://jpub.tistory.com/',
    savepath = 'download-node-request.html';

request(url).pipe(fs.createWriteStream(savepath));

