/**
 * Created by Administrator on 2017-03-09.♣♣jung♣♣
 */
var TARGET_URL = "http://ko.wikipedia.org/";

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('ready', function () {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL(TARGET_URL);
});