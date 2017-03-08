/**
 * Created by Administrator on 2017-03-08. ♣♣jung♣♣
 */
var casper = require('casper').create();

casper.start();

casper.viewport(1400, 800);

casper.userAgent('User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');

var text = encodeURIComponent('고양이');
casper.open('http://www.flickr.com/search/?text=' + text);

casper.then(function () {
    this.capture('flickr-cat.png', {top:0, left:0, width: 1400, height: 800});
});

casper.run();