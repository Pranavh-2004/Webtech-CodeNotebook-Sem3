//deleting a file
//unlink()

var fs = require('fs');

fs.unlink('del.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 
