//getting part of data from the file sample.txt by specifying it on the browser

/*create a file sample.txt with the following data 

{"srn":"1234", "name":"Alice"}
{"srn":"5678", "name":"Bob"}
{"srn":"9101", "name":"Charlie"}

*/

//run serverjson1.js code on the terminal

// enter - http://localhost:8080/sample.txt?srn=1234 on the address bar of the browser

// output = Alice (on the browser), you can change srn value to 5678 and 9101 to get Bob and Charlie.

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
  
   
        fs.readFile(pathname.substr(1), 'utf-8',function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                
                var lines=data.split(/\r?\n/);
                      
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                for(var i in lines){
                      var obj=JSON.parse(lines[i]);
             // response.write(data);
                     if(obj.srn==qobj.srn)
                      response.write("<h1>"+obj.name+"</h1>");
                }
                 response.end();
                }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");

