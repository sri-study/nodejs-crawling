01. 문자코드와 호완
- 문자 코드란?
  . 컴퓨터에서 문자를 표시하기 위해 할당한 번호
  . 알파벳과 숫자만 있다면 1바이트면 충분
  . 알파벳 외의 문자는 2바이트 이상 사용해야 표현이 가능
  . 모든 문자를 공통의 문자 집합에 정의한 유니코드 체계가 구축
  . 자바스크립트는 내부적으로 UTF-16을 사용
  . node.js는 기본으로 UTF-8 사용 (fs-readwrite.js 참고)
    => 쓰기는 기본적으로  utf-8 / 읽기때는 UTF-8로 지정해야 텍스트 데이터로 인식한다.
    => Buffer 객체로 인식되어 바이트로 출력된다.
  . node.js 에서는 외부모듈을 설치해야 EUC-KR 등의 문자 코드를 다룰 수 있다.(read-sjis.js 참고)
  . 문자 코드 자동 판정용 모듈 jschardet
  . 






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
