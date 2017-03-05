# 웹 데이터 수집
### 용어 정리
1. 사용 모듈 정의
 - var 변수 = require('모듈명');
2. client.fetch()
 - fetch (url [get-param, encode, callback])
 - url에서 지정한 WEB 페이지를 GET 메소드로 취득하고 문자 코드의 변환 및 HTML 파싱을 수행 callback함수에 반환합니다.
 - callback함수는 다음의 4 개의 인수가 전달됩니다.
 - Error 객체
 - cheerio.load()에서 HTML 콘텐츠를 퍼스 오브젝트 (자체 확장판)
 - request 모듈의 response객체 (독자 확장 버전)
 - UTF-8로 변환 한 HTML 콘텐츠
3. encodeURIComponent()
4. request()
5. pipe()
6. createWriteStream()
7. mkdir() 과 mkdirSync() 차이점
8. response.statusCode == 200

### 모듈 정리 (참고 : https://www.npmjs.com/package/package)
1. request
 - 웹 페이지를 다운로드하는 모듈
 - request('http://google.com', function (error, response, body){ console.log(body); }
2. fs
3. url
 - 이 모듈은 node.js core url 모듈 과 기능 패리티를 가지기위한 URL 분석 및 구문 분석을위한 유틸리티를 가지고 있습니다.
4. cheerio-httpcli
 - HTML을 jQuery처럼 조작 할 수있는 HTTP 클라이언트 모듈입니다.
5. http
6. path
7. xml2js
 - xml 과 js 간의 양방향 변환 지원 모듈

### 웹 페이지 다운로드

### HTML해석(링크와 이미지 추출)

### 사이트를 통째로 다운로드

### XML/RSS 해석

### 정기적으로 다운로드