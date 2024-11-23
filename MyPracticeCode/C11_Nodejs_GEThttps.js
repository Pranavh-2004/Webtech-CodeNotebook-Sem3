let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    if (req.method == "GET") {
      let filename = "";
      let myurl = url.parse(req.url);
      let path = myurl.pathname;

      if (path == "/images.jpeg") {
        console.log(path);
        fs.readFile("./images.jpeg", (err, data) => {
          res.writeHead(200, { "content-type": "image/jpg" });
          res.write(data);
          res.end();
        });
      } else if (path == "/") {
        // console.log("Request recieved");
        // res.writeHead(200, { "content-type": "text/html" });
        // res.write("<h1>Welcome to my page</h1>");
        // res.end();

        fs.readFile("./test.html", "utf-8", (err, data) => {
          if (err) {
            //   res.writeHead(404);
            //   res.write("File Not Found");
            //   res.end();
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h1>File Not Found</h1>");
            res.end();
          } else {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            res.end();
          }
        });
      }
    }
  })
  .listen(8080, () => {
    console.log("Go to http://localhost:8080");
  });
