var SERVER_PORT = 8080;
var FILE_CLIENT = __dirname+"/client-recognizer.html";
var FILE_MODEL = __dirname+"/train-mini.model";

var http = require('http');
var URL = require('url');
var path = require('path');
var fs = require('fs');
var svm = require('node-svm');

var model_json = fs.readFileSync(FILE_MODEL,"utf-8");
var model_obj = JSON.parse(model_json, model_obj);
var clf = new svm.SVM({}, model_obj);

var svr = http.createServer(checkRequest);
svr.listen(SERVER_PORT, function(){
  console.log("서버 실행했습니다");
  console.log("http://localhost:"+SERVER_PORT);
});

function checkRequest(req, res){
  var uri = URL.parse(req.url, true);
  var pathname = uri.pathname;

  if (pathname == "/predict"){
    api_predict(req, res, uri);
  } else if (pathname == "/") {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(fs.readFileSync(FILE_CLIENT,"utf-8"));
  } else {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end("File not found");
  }

  console.log(pathname);
};

function api_predict(req, res, uri){
  var p = uri.query.p;
  res.writeHead(200,{'Content-Type':'text/plain'});
  var value = JSON.parse("["+ p +"]");

  for(var i in value){
    value[ i ] = value[ i ] / 255;
  }

  console.log("value.length="+ value.length +"/"+ 28 * 28);
  clf.predict(value). then(function(predicted){
    console.log(predicted);
    res.end(""+ predicted);
  });
} 