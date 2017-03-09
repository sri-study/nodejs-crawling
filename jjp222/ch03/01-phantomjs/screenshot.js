// 캐스퍼 객체 생성
const casper = require('casper').create();

// 첫 번째 인자에 URL을 주면 해당 웹 페이지를 열고, 없는경우 빈페이지를 연다.
casper.start();

// 사이트 열기
casper.open('http://jpub.tistory.com');

// then을 이용해서 콜백 전달.
casper.then(function() {
    casper.capture('screenshot.png');
});

casper.run();