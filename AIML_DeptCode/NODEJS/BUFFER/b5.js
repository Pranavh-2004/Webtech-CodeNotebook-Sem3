//file compression

const fs = require('fs'); 
const zlib = require('zlib'); // compression and decompression module 
const gzip = zlib.createGzip(); 
const input = fs.createReadStream('parse.txt'); 
const output = fs.createWriteStream('parse.txt.gz');  
input.pipe(gzip).pipe(output);