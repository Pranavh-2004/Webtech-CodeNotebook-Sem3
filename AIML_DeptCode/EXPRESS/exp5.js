//requesting for a static file from the server
//displays content of hello.txt on the browser
//path.join(__dirname, 'files', 'example.txt')

const express = require("express");

var app=express();

app.get('/',(req,res)=>
{
	res.sendFile(__dirname+'/hello.txt'); //__dirname is a global variable in nodejs that represents a server location
	//res.send(`The directory name is: ${__dirname}`);
})

app.listen(3000,function(){
	console.log("Server up at 3000")
});