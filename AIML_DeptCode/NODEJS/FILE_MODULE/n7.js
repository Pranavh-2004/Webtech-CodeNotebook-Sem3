//writeFile() from fs module which only writes the file
//overwrites if content exists in the file
//creates a new file if file does not exist

const fs=require('fs')
fs.writeFile('write.txt',"PESU" ,(err)=>{
   if (err) throw err;
  console.log('Saved!');
});



