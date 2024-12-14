//write info to a file in the form of a stream

var fs=require('fs')
 var data=" You are learning Buffers and Streams"
 var ws=fs.createWriteStream('sample.txt');
 console.log(ws);
 ws.write(data,'UTF-8');
 ws.end();
 ws.on('finish',function(){
     console.log('Write Completed');
 })
 ws.on('err',function(err){
     console.log(err.stack);
 })
 console.log('program ended')
 