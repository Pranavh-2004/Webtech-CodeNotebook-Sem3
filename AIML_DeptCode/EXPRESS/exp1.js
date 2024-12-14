//express server instead of http server
//simpler syntax compared to http module in NodeJs
//browser always sends get request to the server by default
//request can be changed to post from the browser
//app.get() route to send the resource to the client

const express = require('express'); //third party module to create a server
const app = express();
const port = 3000;

// Define a route for the home page
app.get('/data', (req, res) => { //receives get request from the browser
   //res.send(req.path);
   //res.send(req.method);
   //res.send(req.originalUrl);
   res.send(req.query); //url-search/data?key=values
   //res.send(req.headers);
   //res.send(req.url);
   //res.send(200);
   //res.json({user:"pesu"});
   //res.send('<h1>PESU</h1>');
   //res.send('Hello, World!');
  
});

app.get("/hello",function(request,response,next){
response.send("Hi!!!");});

app.get("/hello",function(request,response){
response.send("Bye!!!")});

//:name is a route parameter
//params is used to access route parameters 
app.get("/:name",function(request,response){
response.send("Welcome to my home page " +request.params.name)});

app.get("/:name1/:name2",function(request,response){
response.send("Welcome " +request.params.name1 +request.params.name2)});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});