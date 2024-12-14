//open()
//close()
//fd - file descriptor - unique identification number assigned by an OS in fs table
//OS can keep track of file operations with fd
var fs = require("fs");
  
// Asynchronous - Opening File
console.log("opening file!");
fs.open('sample.txt', 'r+', function(err, fd) {
   if (err) {
      console.log(err);
   }
   console.log("File open successfully",fd);   
   
   fs.close(fd, (err) => {
        if (err) {
            console.error('Error closing file:', err);
        } else {
            console.log('File closed successfully');
        }
    });
});


/*
r: Open for reading. An error is thrown if the file does not exist.

r+: Open for reading and writing. An error is thrown if the file does not exist.

rs: Open for reading in synchronous mode. An error is thrown if the file does not exist.

rs+: Open for reading and writing in synchronous mode. An error is thrown if the file does not exist.

w: Open for writing. The file is created (if it does not exist) or truncated (if it exists).

w+: Open for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

a: Open for appending. The file is created (if it does not exist) and data is written to the end of the file.

a+: Open for reading and appending. The file is created (if it does not exist) and data can be read or written. New data is always written to the end.



*/


