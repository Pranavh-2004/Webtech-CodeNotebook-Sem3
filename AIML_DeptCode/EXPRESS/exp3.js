//app.put() to modify the resource on the server

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());  //middleware function that parses json string to json object

// Sample data to be updated
let message = "Hello, World!";

app.get('/message', (req, res) => {
  res.send(`Current message: ${message}`);
});

// Define a PUT route to update the message
app.put('/', (req, res) => {
  const newMessage = req.body.message; // Get the new message from the request body

  // Update the message
  message = newMessage;
  res.send(`Message updated to: ${message}`);
});

app.get('/current-message', (req, res) => {
  res.send(`Updated message: ${message}`);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
