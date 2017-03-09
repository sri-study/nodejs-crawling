var url = 'http://jpub.tistory.com',
    casper = require('casper').create(); // 캐스퍼 객체 생성

// url, callback 지정
casper.start(url, function(){
    this.echo(casper.getTitle());
});

// 캐스퍼 실행
casper.run();

/*
1. 캐스퍼 인스턴스 생성
2. url 열기
3. 페이지가로드 되후  웹 페이지의 제목을 출력
4. 프로세스 실행
*/
