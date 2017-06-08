var FILE_DIC = 'bot-dic.dat';
var MONGO_DSN = "mongodb://localhost:27017/chatBot";
var mongo_db;

var mongo_client = require('mongodb').MongoClient;
var fs = require('fs');

mongo_client.connect(MONGO_DSN, function (err, db) {
  if (err) { 
	  console.log("DB error", err); 
	  return; 
  }

  mongo_db = db;
  
  var collection = db.collection('keywords');

  collection.drop(function(err, reply) {
    insertKeywords(collection);
  });
});

function insertKeywords(collection) {
  var cnt = 0;
  var dataCount = 0;
  var txt = fs.readFileSync(FILE_DIC, "utf-8");
  var lines = txt.split("\n");

  for (var i in lines) {
    var line = trim(lines[i]);

    if (line == "") continue;
    if (line.substr(0,1) == ";") continue;

    var cells = line.split(",");
    var key = trim(cells[ 0 ]);
    var pat = trim(cells[ 1 ]);
    var msg = trim(cells[ 2 ]);

    collection.insert({
      "key": key, 
      "pattern": pat, 
	  "msg": msg
    }, function(err, result) {
      console.log(cnt+":inserted:", result.ops);

      if (++cnt == dataCount) {
        console.log("done");
        mongo_db.close();
      }
    });

    dataCount++;
  }
}

// 전후 공백 없애기
function trim(s) {
  s = "" + s;
  return s.replace(/(^\s+|\s+$)/g, "");
}