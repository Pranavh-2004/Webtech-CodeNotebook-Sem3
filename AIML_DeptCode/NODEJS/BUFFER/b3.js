//reading data as chuncks using createReadstream

var fs=require('fs')
 var dat='';
 var rs=fs.createReadStream('sample.txt');
 
 rs.setEncoding('UTF-8');
 rs.on('data',function(chunk){
     dat+=chunk;
	
	 
     
 });
 rs.on('end',function(chunk){
     console.log(dat);
 })
 rs.on('err',(chunk)=>{
     console.log(err.stack);
 })
 