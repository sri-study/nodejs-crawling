/**
 * Created by Administrator on 2017-02-28.♣♣jung♣♣
 */
var fs = require('fs');

console.log('mkdir 실행');
fs.mkdir('test', function(){
    console.log('폴더 생성 완료');
});
console.log('mkdir 실행완료. 결과대기');