//http module - creating a web server application

/* default ports of browser and server apps if port not mentioned 
 - 80 for http and 443 for https (standard ports)*/

//custom ports - 8080 for http, 8443 for https, 3000 for nodeJs

//response as a plain text

var http=require('http');

var server=http.createServer(function(req,res){
res.write('Hello World'); //writing the response as plain text
res.end(); //ending the response
});

const port = 5000;

server.listen(port); 
console.log(`Node.js webserver at port ${port} is running`);

//run Localhost:3000 to get the output Hello World


