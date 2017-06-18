/**
 * Created by Administrator on 2017-06-18. jung
 */

var SERVER_PORT = 1337;
var FILE_DEFAULT = "/line.html";

var http    = require('http'),
    url     = require('url'),
    path    = require('path'),
    fs      = require('fs');

var svr = http.createServer(checkRequest);
svr.listen(SERVER_PORT, function(){
    console.log('서버가 실행 중입니다.');
    console.log('http://localhost:' + SERVER_PORT);
});

function checkRequest(req, res){
    var uri = url.parse(req.url, true);
    var pathname = uri.pathname;
    if (pathname == '/') pathname = FILE_DEFAULT;
    console.log(pathname);

    var filename = path.join(__dirname, pathname);
    if (!fs.existsSync(filename)){
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('404 flie not found');
        return;
    }

    var stat = fs.statSync(filename);
    if (stat && stat.isDirectory()){
        res.writeHead(403, {'Content-Type':'text/html'});
        res.end('403');
        return;
    }

    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(fs.readFileSync(filename, 'utf-8'));
}