//readFile() from fs module which only reads the file

//Non Blocking I/O or asynchronous

const fs=require('fs')
fs.readFile('sample.txt','UTF-8' ,(err,data)=>{
    if(err) throw err
    console.log("Contents:",data)
})
console.log("Reading the Contents");




/*

//Blocking I/O or synchronous

const fs=require('fs');
const data=fs.readFileSync("sample.txt",'UTF-8')
console.log("Reading the file contents...")
console.log("data:",data)

*/


