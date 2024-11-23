let http = require("http");

http
  .createServer((req, res) => {
    console.log("Request recieved");
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome to my page</h1>");
    res.end();
  })
  .listen(8080, () => {
    console.log("Go to http://localhost:8080");
  });
