/**
 * Created by Administrator on 2017-02-21.♣♣jung♣♣
 */
download(
    "http://jpub.tistory.com/539",
    "spring.html",
    function(){ console.log("ok, spring.");}
)

download(
    "http://jpub.tistory.com/537",
    "angular.html",
    function(){ console.log("ok, angular.");}
)

function download(url, savepath, callback){
    var http = require('http');
    var fs = require('fs');
    var outfile = fs.createWriteStream(savepath);

    var req = http.get(url, function(res){
        res.pipe(outfile);
        res.on('end', function(){
            outfile.close();
            callback();
        });
    });
}