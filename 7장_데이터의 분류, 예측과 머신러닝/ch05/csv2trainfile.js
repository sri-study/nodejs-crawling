var fs = require('fs');

csv2svm('train-mini.csv');
csv2svm('train.csv');
csv2svm('t10k-mini.csv');
csv2svm('t10k.csv');
console.log("ok");

function csv2svm(file_csv) {

  var file_svm = file_csv.replace(/\.csv$/, "") + ".svm";
  console.log("[I N] " + file_csv);
  console.log("[OUT] " + file_svm);
  console.log(file_svm);

  var f_svm = fs.openSync(file_svm, "w");

  var csv = fs.readFileSync(file_csv, "utf-8");
  var lines = csv.split("\n");

  for (var i in lines) {

    if (i % 1000 == 0) console.log(i + "/" + lines.length);

    var line = lines[i];
    var cells = line.split(",");
    var no = cells.shift();
    var vals = [];

    for (var j = 0; j < cells.length; j++) {
      var index = j + 1;
      var v = cells[j];

      if (v == 0) continue; 

      var value = v / 255; 
      vals.push(index + ":" + value);
    }

    if (vals.length == 0) continue;

    var v_str = no + " " + vals.join(" ");
    var dat = v_str + "\n";
    
    fs.writeSync(f_svm, dat, null, "utf-8");
  }
  
  console.log("saved = " + file_svm);
}