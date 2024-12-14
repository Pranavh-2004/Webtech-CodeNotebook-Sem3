//renaming a file 
//rename()

const fs=require('fs')
fs.rename('change.txt',"hello.txt",(err)=>{
    console.log("Rename Succesfull")
	console.log(err)
})
