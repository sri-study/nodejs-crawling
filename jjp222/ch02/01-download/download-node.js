let url = "http://jpub.tistory.com";
let savepath = "test.html";
let http = require('http');
let fs = require('fs');
let outfile = fs.writeFile(savepath);
// response 객체는 WritableStream이므로 클라이언트로 보내는 응답 바디는 일반적인 스트림 메소드를 사용해서 작성합니다.
// https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
// The readable.pipe() method attaches a Writable stream to the readable, causing it to switch automatically into flowing mode and push all of its data to the attached Writable. The flow of data will be automatically managed so that the destination Writable stream is not overwhelmed by a faster 
http.get(url, res=>{
    res.pipe(outfile);
    res.on('end', _=> {
        outfile.close();
        console.log('ok');
    });
})