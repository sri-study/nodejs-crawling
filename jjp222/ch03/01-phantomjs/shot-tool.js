var casper = require('casper').create(),
    utils = require('utils');

// 인자얻기
var args = casper.cli.args;
if(args.length > 1) {
    casper.echo('uses:');
    casper.echo('shot-tool url [savepath]');
    casper.exit();
}

var savepath = 'screenshot3.png',
    url = args[0];

if(args.length >= 2) {
    savepath = args[1];
}

casper.start();

// agent 작성(iphone)
// casper.userAgent('User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');

casper.viewport(750, 1334);

casper.open(url);

casper.then(function() {
    this.capture(savepath, {
        top:0, left:0, width:1024, height:768
    });
});

casper.run();

/*
쉘 스크립트에서 현재 실행되는 쉘 스크립트 파일의 실행 경로를 구할때 사용하는 명령어로 dirname $0 이 있다.

dirname은 기본적으로 리눅스에서 제공하는 명령어로서 dirname [fullPath] 형식으로 사용된다.
fullPath에서 파일이름을 제외한 path 부분을 리턴해주며, 실제로 파일이나 디렉토리가 존재하지 않아도 입력된 fullPath 에서 path 형식으로 된 부분을 리턴한다.


$ dirname /home/tester/abcd.jpg
 /home/tester/

 $ dirname ./tester/abcd.jpg
 ./tester


$0 는 실행한 쉘 스크립트의 경로가 지정되는데, 아래처럼 dirname과 같이 사용될경우 쉘 스크립트가 실행된 경로를 알아낼수 있다.

 #!/bin/sh

 dirPath=`dirname $0` 
 echo $dirPath 

 cd $dirPath


  - $1~ $n - 넘겨진 인자들
  - $* : 스크립트에 전달된 인자들을 모아놓은 문자열. 하나의 변수에 저장되며 IFS 환경변수의
     첫번째 문자로 구분된다. (IFS : internal field separator)
  - $@ : $*과 같다. 다만 구분자가 IFS변수의 영향을 받지 않는다.
  - $0 : 실행된 쉘 스크립트 이름
  - $# : 스크립트에 넘겨진 인자의 갯수
 */
