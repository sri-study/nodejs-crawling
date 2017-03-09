var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
    var win = new BrowserWindow({
        width: 800, height:600
    })

    // 지정 url로드
    win.loadURL('file://' + __dirname + '/index.html');
    win.on('closed', function(){
        win = null;
    });
});