var casper = require('casper').create({
    verbose: true, // 로그메세지 실시간 출력
    logLevel: 'debug' // 로그레벨
});

var loginUrl = 'https://nid.naver.com/nidlogin.login',
    pageUrl = 'http://blog.naver.com//PostList.nhn?blogId=jjp372c&amp;widgetTypeCall=true',
    formId = 'frmNIDLogin',
    id = 'jjp372c',
    password = '';

casper.start();

casper.open(loginUrl);

// 폼 전송
casper.then(function() {
    // Signature: fill(String selector, Object values[, Boolean submit])
    casper.fill('#'+formId, {
        'id' : id,
        'pw' : password
    }, true)
})

// 페이지 이동 후 3대기
casper.thenOpen(pageUrl, function() {
     casper.wait(3000);
});

// 클릭
casper.then(function() {
    // 선택자확인 후 클릭
    var path = '#toplistBtn';
    if (casper.exists(path)) {
        casper.mouseEvent('click', path);
    }
    casper.wait(3000);
});

casper.then(function() {
    casper.capture('capture.png', {
        top:0, left:0, width:1024, height:768
    });
});

casper.run();