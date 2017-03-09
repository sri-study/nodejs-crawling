const url = 'http://saramin.co.kr',
    casper = require('casper').create();

casper.start();

// agent 작성(iphone)
casper.userAgent('User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

casper.viewport(750, 1334);

casper.open(url);

casper.then(function() {
    this.capture('screenshot2.png');
});

casper.run();

