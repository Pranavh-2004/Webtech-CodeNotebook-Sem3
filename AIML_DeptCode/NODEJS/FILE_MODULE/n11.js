//truncate()
//to shorten the length of the file 

const fs = require('fs');

fs.truncate('truncate.txt', 15, (err) => {
    if (err) {
        console.error('Error truncating file:', err);
    } else {
        console.log('File truncated successfully to 10 bytes');
    }
});