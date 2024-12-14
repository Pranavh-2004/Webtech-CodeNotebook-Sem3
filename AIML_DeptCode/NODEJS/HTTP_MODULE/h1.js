//response as html using http header
//200 - server status code(ok), request successful


var http=require('http');

var server=http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'}); //response as html
  res.write('Hello World!');
  res.end();
});
server.listen(3000);
