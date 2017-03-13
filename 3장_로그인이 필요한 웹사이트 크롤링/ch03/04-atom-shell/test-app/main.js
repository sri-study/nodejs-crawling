/**
 * Created by Administrator on 2017-03-09.♣♣jung♣♣
 */
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('ready', function () {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL('file://' + __dirname + '/index.html');
    win.on('closed', function () {
        win = null;
    });
});