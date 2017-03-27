01. 문자코드와 호완
- 문자 코드 -> 컴퓨터에서 문자를 표시하기 위해 할당한 번호
- 알파벳과 숫자만 있다면 1바이트면 충분
- 알파벳 외의 문자는 2바이트 이상 사용해야 표현이 가능
- 모든 문자를 공통의 문자 집합에 정의한 유니코드 체계가 구축
- 자바스크립트는 내부적으로 UTF-16을 사용
- node.js는 기본으로 UTF-8 사용 (fs-readwrite.js 참고)
    => 쓰기는 기본적으로  utf-8 / 읽기때는 UTF-8로 지정해야 텍스트 데이터로 인식한다.
    => Buffer 객체로 인식되어 바이트로 출력된다.
- node.js 에서는 외부모듈을 설치해야 EUC-KR 등의 문자 코드를 다룰 수 있다.(read-sjis.js 참고)
- 문자 코드 자동 판정용 모듈 jschardet - 문자의 인코딩 방식 판정
- node.js 4 이상의 버전에서는 npm install --global --production windows-build-tools 해당 명령으로 설치가 쉽게 되는 것 같다.
 

 02. 정규 표현식을 사용한 데이터 변환
- 정규 표현식 - 문자열의 패턴을 표현하는 표기 방법, 검색 치환에 유용
- 자바스크립트에서는 '/패턴/' 로 사용가능 -> 리터럴 표현식이라고 함.
- RegExp 객체 사용해서도 가능


 03. 데이터 형식의 기초
- json -> 텍스트로 만든 데이터
    => http://json.org/json-ko.html
- json 개량판 json5 형식
- 다음과 같은 단점을 개선
    => 데이터 안에 주석 입력 안됨.
    => 객체 키를 따옴표로 감싸야 한다.
    => 데이터 끝에 쉼표를 쓰면 파싱에러가 발생
- json5 특징 (page 170~171 참고)
- cson
    => 커피스크립트 객체를 기반으로 하는 데이터 형식
    => json을 더 간단히 구현
- cson 모듈을 설치 하면 커맨트 라인 명령어로 cson -> json 변환이 가능
- xml은 데이터 내용을 <요소> 태그로 표현하며 그룹화하여 계층화 표현이 가능하다.(데이터 다루는 부분은 2장 내용 참고)
- yaml은 들여쓰기를 사용하여 계층 구조를 표현
    => xml보다 간단하고, json과 비슷
    => 탭은 사용 안되고, 스페이스만 가능
    => 배열 표현에는 하이픈 사용 (-) / 뒤에 스페이스 필요
    => 해시는 '키:값' 형식으로 표현
    => 항상 기호 사용후에는 공백이 필요 / #기호로 주석 삽입 가능 / | 기호로 멀티 물자열 지정가능
- INI 파일 형식은 단순 텍스트 (name=value)
    => 섹션 구분 [section1] / (;) 세미콜론으로 주석 가능
    => 섹션이 자바스크립트 키에 매핑된다.
- csv : 포맷이 단순하며 엑셀을 사용하고 db에서 csv를 지원, 쉼표 구분 데이터
- tsv : 탭으로 필드를 분할 / SSV : 공백 문자로 필드를 구분
- 엑셀을 읽는 officegen, pdf를 작성할 수 있는 PDFKit 존재









window 10  iconv modules 설치 
 [출처] https://github.com/nodejs/node-gyp#installation
  
On Windows:

Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools using npm install --global --production windows-build-tools from an elevated PowerShell or CMD.exe (run as Administrator). 

Option 2: Install tools and configuration manually:

Visual C++ Build Environment: 

Option 1: Install Visual C++ Build Tools using the Default Install option. 

Option 2: Install Visual Studio 2015 (or modify an existing installation) and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions. 

💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1 
Install Python 2.7 (v3.x.x is not supported), and run npm config set python python2.7 (or see below for further instructions on specifying the proper Python version and path.) 

Launch cmd, npm config set msvs_version 2015
