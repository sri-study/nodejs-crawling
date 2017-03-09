// 캐스퍼 객체 생성
var casper = require('casper').create();

// 시작
casper.start();

// 화면 사이즈 설정
casper.viewport(1400, 800);

casper.userAgent('user-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36');

// 크롬브라우저에서 복사
//casper.userAgent('User-Agent:Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Mobile Safari/537.36');

casper.then(function() {
    casper.capture('screenshot.png');
});

var text = encodeURIComponent('고양이');
casper.open('https://www.flickr.com/search/?text=' + text);

casper.then(function() {
    casper.capture('flickr-cat.png', {
        top:0, left:0, width:1400, height:800
    });
});


casper.run();