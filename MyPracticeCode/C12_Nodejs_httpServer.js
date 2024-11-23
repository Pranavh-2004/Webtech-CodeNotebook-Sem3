const http = require("http");
const fs = require("fs");
const url = require("url");

function homeFile(res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`
<h1>Home page</h1>
<p><a href="/apple.html">Go to apple</a></p>
`);
  res.end();
}

function readImage(res, pathname) {
  const route = `./pages${pathname}`;

  fs.readFile(route, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.writeHead(200, { "content-type": "image/jpeg" });
      res.write(data);
    }
    res.end();
  });
}

function readFile(res, pathname) {
  const route = `./pages${pathname}`;

  fs.readFile(route, "utf-8", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const req_url = url.parse(req.url);
    const pathname = req_url.pathname;

    if (pathname === "/") {
      homeFile(res);
    } else if (pathname === "/image.jpg") {
      readImage(res, pathname);
    } else {
      readFile(res, pathname);
    }
  }
});

server.listen(8000, () => {
  console.log("Server is running now");
});
