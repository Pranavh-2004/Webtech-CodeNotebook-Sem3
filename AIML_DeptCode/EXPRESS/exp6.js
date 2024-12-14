//upload a file from the client and view it on the server

const express = require("express");
const fileupload = require("express-fileupload"); //third party module to handle file uploads


var app=express();


app.use(fileupload())

app.post('/',(req,res)=>
{
	if(req.files)
		console.log(req.files);

//select file and display
	var file=req.files.file; //req.files to access file uploaded from the client
	var filename=file.name;
	console.log(filename);
	console.log(req.files.file.size); //in bytes
	console.log(req.files.file.data);  //in binary
	console.log(req.files.file.encoding); //encoding format
	
	
//select and move(upload)
	file.mv(''+filename,function(err)  //express-fileupload module function to move a file 
	{
		if(err)
		{
			res.send(err);
		}else
		{
			res.send("File " + file.name + "uploaded ");
		}
	})
})

app.listen(3000,function(){
	console.log("Server up at 3000")
});