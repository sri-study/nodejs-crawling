/**
 * Created by Administrator on 2017-03-08. ♣♣jung♣♣
 */
var TAGET_URL = 'http://jpub.tistory.com';

var casper = require('casper').create();
casper.start();

casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53');

casper.viewport(750, 1334);

casper.open(TAGET_URL);

casper.then(function () {
    this.capture('screenshot-iphon.png');
});

casper.run();