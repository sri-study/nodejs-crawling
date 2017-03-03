let url = 'http://jpub.tistory.com',
    casper = require('casper').create();

casper.start(url, _=>{
    this.echo(casper.getTitle());
});
