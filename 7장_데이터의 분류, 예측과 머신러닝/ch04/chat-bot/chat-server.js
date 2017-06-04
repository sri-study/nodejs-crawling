var SERVER_PORT = 8080;
var FILE_CLIENT = "chat-client.html";

var http = require('http');
var URL  = require('url');
var path = require('path');
var fs   = require('fs');
var bot  = require('./chat-server-bot.js');

var svr = http.createServer(checkRequest);
svr.listen(SERVER_PORT, function(){
  console.log("서버 기동 완료");
  console.log("http://localhost:" + SERVER_PORT);
});

function checkRequest(req, res) {
  var uri = URL.parse(req.url, true);
  var pathname = uri.pathname;
  console.log(pathname);
  
  if (pathname == "/api") {
    apiRequest(req, res, uri);
  } else if (pathname == "/") {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(fs.readFileSync(FILE_CLIENT, "utf-8"));
  } else {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end("File not found");
  }

  console.log(pathname);
};

function apiRequest(req, res, uri) {
  msg = uri.query["msg"];
  bot.getResponse(msg, function(bot_msg) {
    body = JSON.stringify({"msg":bot_msg});
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(body);
  });
};