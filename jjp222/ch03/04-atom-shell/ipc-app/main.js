var electron = require('electron'),
    app = electron.app,
    BrowserWindow = electron.BrowserWindow,
    ipc = electron.ipcMain,
    mainWindow = null;

// 윈도우 실행
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width: 800, height:600
    })

    // 지정 url로드
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});

// 동기적 메시지 수신
ipc.on('mul-sync', function(event, arg){
    console.log(arg);
    for(var i=0;i<100000;i++){
        //
    }
    console.log('mul-sync end');
    event.returnValue = arg.a * arg.b;
});

// 비동기적 메시지 수신
ipc.on('mul-async', function(event, arg){
    console.log(arg);
    var result = arg.a * arg.b;
    for(var i=0;i<100000;i++){
        //
    }
    console.log('mul-async end');
    event.sender.send('mul-async-reply', result);
});