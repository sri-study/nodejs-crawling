var url = 'http://finance.naver.com/',
    electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    fs = require('fs'),
    win = null;

var DELAY_TIME = 1000 * 1,
    WORD = '고양이',
    TARGET_URL = 'https://www.google.co.kr/search?source=lmns&tbm=isch&q='+encodeURIComponent(WORD);

app.on('ready', function() {
    win = new BrowserWindow({
        width:800, height:800
    })
    win.loadURL(url);
    //win.loadURL(TARGET_URL);
    win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
    setTimeout(function() {
    
        var t = new Date(),
        //fname = ['finance-', t.getFullYear(), '-', 1 + t.getMonth(), '-', t.getDate(), '.png'].join('');
        fname = ['cat-', t.getFullYear(), '-', 1 + t.getMonth(), '-', t.getDate(), '.png'].join('');

        win.capturePage(function(img){
            fs.writeFileSync(fname, img.toPng());
            app.quit();
        });

    }, DELAY_TIME);
}