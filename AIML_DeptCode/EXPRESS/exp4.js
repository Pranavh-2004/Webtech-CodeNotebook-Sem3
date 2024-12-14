//app.delete() to delete the resource on the server

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());  //middleware function that parses json string to json object

// Sample data to be deleted
let message = "Hello, World!";

app.get('/message', (req, res) => {
  res.send(`Current message: ${message}`);
});

// Define a delete route to delete the message
app.delete('/', (req, res) => {
  

  // Update the message
  message = null;
  res.send(`Message deleted: ${message}`);
});

app.get('/deleted-message', (req, res) => {
  res.send(`deleted message: ${message}`);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
