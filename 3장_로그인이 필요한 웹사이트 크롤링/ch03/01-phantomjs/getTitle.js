/**
 * Created by Administrator on 2017-03-08. ♣♣jung♣♣
 */
var TARGET_URL = 'http://jpub.tistory.com';
var casper = require('casper').create();

casper.start(TARGET_URL, function(){
    this.echo(casper.getTitle());
});

casper.run();