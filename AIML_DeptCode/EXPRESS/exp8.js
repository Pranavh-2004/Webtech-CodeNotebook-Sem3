//rendering form to the client using pug template 

/* <div class="container">
  <h1>Hello, World!</h1>
  </div>  --> html code
-------------------------------------------------------  
  .container
  h1 Hello, World!  --> Pug code(replacement for html) 
*/

//npm install Pug
  

var express = require('express');

var app = express();

app.set('view engine', 'pug'); //express must use pug engine to convert .pug file to .html file
app.set('views', './views');  //express must search for form.pug in views folder on the server

app.get('/', function(req, res){
   res.render('form'); //tells express to render form.html
});

app.use(express.urlencoded()); 

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000);