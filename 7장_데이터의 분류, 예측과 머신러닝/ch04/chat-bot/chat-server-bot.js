var MONGO_DSN = "mongodb://localhost:27017/chatBot";

var Mecab = require('./mecab-mod.js');
var mecab = new Mecab();
var mongo_client = require('mongodb').MongoClient;

var mongo_db = null;
var keywords_co;

module.exports = {
  "getResponse": getResponse
};

function getResponse(msg, callback) {
  checkDB(function(){
    var bot = new Bot(msg, callback);
    bot.talk();
  });
}

function checkDB(next_func) {

  if (mongo_db) {
    next_func(); 
	return;
  }

  mongo_client.connect(MONGO_DSN, function (err, db) {
    if (err) { 
		console.log("DB error", err); 
		return; 
	}

    mongo_db = db;
    keywords_co = db.collection('keywords');
    next_func();
  });
}

function Bot(msg, callback) {
  this.callback = callback;
  this.msg = msg;
  this.results = [];
  this.words = [];
  this.index = 0;
}

Bot.prototype.talk = function () {
  var self = this;

  mecab.parse(this.msg, function (words) {
    self.index = 0;
    self.words = words;
    self.nextWord();
  });
};

Bot.prototype.nextWord = function() {
  if (this.index >= this.words.length) {
    this.response();
    return;
  }

  var w = this.words[this.index++];
  console.log(w);
  var org = w[0];
  var self = this;

  keywords_co.find({key:org}).toArray(function(err, rows) {
    if (rows.length == 0) {
      self.nextWord(); 
	  return;
    }

    var keys = rows.filter(function(el, index, ary) {
      if (el.pattern == "*") return true;

      if (self.msg.indexOf(el.pattern) >= 0) return true;

      return false;
    });

    if (keys.length > 0) {
      var r = Math.floor(Math.random() * keys.length);
      var key = keys[r];

      self.results.push(key.msg);
    }

    self.response();
  });
};

Bot.prototype.response = function () {
  var res = "좀 더 쉽게 말씀해주세요.";

  if (this.results.length > 0) {
    res = this.results.join(".");
  }

  this.callback(res);
};