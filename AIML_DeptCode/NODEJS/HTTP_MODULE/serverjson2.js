//getting a part of data from the file sample1.txt by specifying it on the browser
//make sure sample1.txt has only one object for making this code work
//enter - http://localhost:8080/sample1.txt?srn=1234 on the browser  
//{"srn":"1234","name":"Alice"} data in sample1.txt(one object)
//output - Alice


var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring') //core module

http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
  
   
        fs.readFile(pathname.substr(1),'utf-8', function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                
                var obj=JSON.parse(data);                     
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                 if(obj.srn==qobj.srn)
                      response.write("<h1>"+obj.name+"</h1>");
                
                 response.end();
                }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");


