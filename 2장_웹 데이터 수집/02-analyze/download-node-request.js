/**
 * Created by Administrator on 2017-02-24.♣♣jung♣♣
 */
var request = require('request');
var fs = require('fs');

var url = "http://jpub.tistory.com";
var savepath = 'test.html';

request(url).pipe(fs.createWriteStream(savepath));