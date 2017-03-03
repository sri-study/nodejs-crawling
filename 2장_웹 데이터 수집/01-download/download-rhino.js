/**
 * Created by Administrator on 2017-02-22.♣♣jung♣♣
 */
var url = "http://jpub.tistory.com";
var savepath = "test.html";

var aUrl = new java.net.URL(url);
var conn = aUrl.openConnection();
var ins = conn.getInputStream();
var file = new java.io.File(savepath);
var out = new java.io.FileOutputStream(file);

var b;
while ((b = ins.read()) != -1){
    out.write(b);
}
out.close();
ins.clase();