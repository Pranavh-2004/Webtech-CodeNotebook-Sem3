let fs = require("fs");
let zlib = require("zlib");

fs.createReadStream("data.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("data.txt.gz"));

/*
  fs.createReadStream("data.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("data.txt.gz")); // gives error if used multiple times
*/
