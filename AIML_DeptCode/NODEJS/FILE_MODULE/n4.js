/*importing module fs which gives us the function to handle file requests 
and responses */
//stat()
//stat function from fs module takes 2 arguments- 1)file name and callback function
//stat gives us the status of the input file 
//stats has info of sample.js in the form of an object
//err contains error info if any otherwise null 

const fs=require('fs')
fs.stat('sampl.txt', (err,stats)=>{
    if (err) throw err;
    console.log('Stats of sample.txt',JSON.stringify(stats))//JSON.stringify(status) for output in the form of a string
})
