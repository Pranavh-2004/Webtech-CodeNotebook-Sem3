//serving static files 
//localhost:3000/name of your file
//make 2 folders by name public and images

var express =require('express');
var path=require('path');
var app=express();
app.use(express.static('public')); //get is not needed to serve files
app.use(express.static('images'));  //express.static() middleware serves files without get
app.listen(3000,function(){
 console.log("Server is listening on 3000");
})