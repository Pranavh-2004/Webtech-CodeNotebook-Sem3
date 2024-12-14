//express server instead of http server
//simpler syntax compared to http module in NodeJs
//browser always sends get request to the server by default
/*request can be changed to post from the browser - to make post request, 
we can use fetch(), html form with post method, XMLHttpRequest class with open 
function */

//this server code recieves post request from the browser through html form

//app.post() to accept new resource from the client and store it on the server

const express = require('express'); //third party module to create a server
const app = express();
const port = 3000;

app.use(express.urlencoded()); //middleware function to parse urlencoded data to js object

// Define a route for the home page
app.post('/', (req, res) => { //recieves post request from the browser
const name = req.body.name; // Get the 'name' field from the form data
  res.send(`Hi!!! Welcome... ${name}`);
 
});

// Start the server
app.listen(port, () => {  //starts the server with port number 3000
  console.log(`Server running at http://localhost:${port}`);
});