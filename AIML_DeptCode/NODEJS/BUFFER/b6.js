//file decompression

const fs = require('fs'); 
const zlib = require('zlib'); // Create a gzip transform stream 
gunzip = zlib.createGunzip();
input=fs.createReadStream('parse.txt.gz');
output=fs.createWriteStream('parse.txt');
input.pipe(gunzip).pipe(output);

