var casper = require('casper').create({
    verbose: false, // 로그메세지 실시간 출력
    logLevel: 'debug' // 로그레벨
});

var url = 'https://nid.naver.com/nidlogin.login',
    id = 'jjp372c',
    password = '';

casper.start();

casper.open(url);

// 폼 전송
casper.then(function() {
    // Signature: fill(String selector, Object values[, Boolean submit])
    casper.fill('#frmNIDLogin', {
        'id' : id,
        'pw' : password
    }, true)
})



casper.thenOpen('http://blog.naver.com//PostList.nhn?blogId=jjp372c&amp;widgetTypeCall=true', function() {
     //this.waitForSelector('#postViewArea');
     casper.wait(3000);
});

casper.then(function() {
    var fun = function() {
        return document.querySelector('#title_1').innerText;
    }
    console.log('title : ' + this.evaluate(fun));
});


casper.then(function() {
    var fun = function() {
        return document.querySelector('#blog-stat ul li:nth-child(1) em').innerText;
    }
    console.log('neighbor : ' + this.evaluate(fun) + '명');
});

casper.then(function() {
    var fun = function() {
        return document.querySelector('#blog-stat ul li:nth-child(3) em').innerText;
    }
    console.log('scrap  : ' + this.evaluate(fun) + '');
});

casper.run();


// casperjs login.js --output-encoding=euckr

/*

## fill 을 이용해 form 전송
// Signature: fill(String selector, Object values[, Boolean submit])
Casper.fill(css 선택자, 값객체 [, Submit 여부])
. css 선택자 : form의 css 선택자
. 값 객체 : name과 value 속성을 가짐
. Submit 여부 : true일 경우, 전송까지 수행

*/