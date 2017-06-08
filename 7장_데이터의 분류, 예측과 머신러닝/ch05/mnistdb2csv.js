var DIR_IMAGE   = __dirname + "/image";

var fs = require('fs');

convertToCsv("train");
convertToCsv("t10k");

function convertToCsv(basename) {
  console.log("convert: " + basename);

  var file_images = basename + "-images.idx3-ubyte";
  var file_labels = basename + "-labels.idx1-ubyte";
  var file_csv = basename + ".csv";

  var f_img = fs.openSync(file_images, "r");
  var f_lbl = fs.openSync(file_labels, "r");
  var f_out = fs.openSync(file_csv, "w+");

  if (!fs.existsSync(DIR_IMAGE)) {
    fs.mkdir(DIR_IMAGE);
  }

  var buf_i = new Buffer(16);
  var buf_l = new Buffer(8);
  fs.readSync(f_img, buf_i, 0, buf_i.length);
  fs.readSync(f_lbl, buf_l, 0, buf_l.length);

  var magic      = buf_i.readUInt32BE(0);
  var num_images = buf_i.readUInt32BE(4);
  var num_rows   = buf_i.readUInt32BE(8);
  var num_cols   = buf_i.readUInt32BE(12);
  var num_size   = num_rows * num_cols;

  if (magic != 0x803) {
    console.error("[ERROR] Broken file=", magic.toString(16));
    process.exit();
  }
  console.log("num_of_images=" + num_images);
  console.log("num_of_rows=" + num_rows);
  console.log("num_of_cols=" + num_cols);
  console.log("num_of_pixel_size=" + num_size);

  var buf_img = new Buffer(num_size);
  var buf_lbl = new Buffer(1);
  var mini_csv = "";
  for (var i = 0 ; i < num_images ; i++) {

    if (i % 1000 == 0) console.log( i + "/" + num_images );

    var pos_i = i * num_size + 16;
    fs.readSync(f_img, buf_img, 0, num_size, pos_i);

    var pos_l = i * 1 + 8;
    fs.readSync(f_lbl, buf_lbl, 0, 1, pos_l);
    var no = buf_lbl[ 0 ];

    if (i < 30) {
      var s = "P2 28 28 255\n";
      for (var j = 0 ; j < 28 * 28 ; j++) {
        s += buf_img[j] + " ";
        s += (j % 28 == 27) ? "\n" : "";
      }

      var img_file = DIR_IMAGE + "/" + basename + "-" + i + "-" + no + ".pgm";
      fs.writeFileSync(img_file, s, "utf-8");
    }

    var cells = [];
    for (var j = 0; j < 28 * 28; j++) {
      cells.push(buf_img[j]);
    }

    s = no + "," + cells.join(",") + "\n";
    fs.writeSync(f_out, s, null, "utf-8");

    if (i < 1000) {
      mini_csv += s;
      if (i == 999) {
        fs.writeFileSync(basename + "-mini.csv", mini_csv, "utf-8");
      }
    }
  }

  console.log("ok:" + basename);
}