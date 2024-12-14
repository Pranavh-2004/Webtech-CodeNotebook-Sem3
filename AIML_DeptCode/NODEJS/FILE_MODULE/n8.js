//appendFile()
//adds new content to the exsiting file
//a new file is created with mentioned content if file does not exist

var fs = require('fs');

fs.appendFile('write.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

