/**
 * Created by Administrator on 2017-03-08. ♣♣jung♣♣
 */
var casper = require('casper').create();
var utils = require('utils');

var args = casper.cli.args;
if (args.length < 1) {
    casper.echo('USER:');
    casper.echo('shot-tool URL [savepath]');
    casper.exit();
}

var savepath = 'screenshot-tool.png';
var url = args[0];
if (args.length >= 2) {
    savepath = args[1];
}

casper.start();
casper.viewport(1024, 768);
casper.open(url);
casper.then(function () {
    casper.capture(savepath, {top: 0, left: 0, width: 1024, height: 768});
});

casper.run();