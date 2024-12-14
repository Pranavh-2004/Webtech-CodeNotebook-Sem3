//prints url entered on the browser

var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);   //writes url entered on the browser
  res.end();
});
server.listen(3000);

//run Localhost:3000/summer on the browser
