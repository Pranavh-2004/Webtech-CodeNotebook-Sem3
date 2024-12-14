//creating a database "ndb" and a collection "employee"
//in mongo, collection is same as a table and document is same as a record in SQL.
//db() - creating database
//createCollection() - to create a collection

const { MongoClient } = require('mongodb'); //MongoClient class from mongodb library

const url = "mongodb://127.0.0.1:27017";
let client;
MongoClient.connect(url)  //returns promise object
.then((connectedClient) => {
client = connectedClient;
const dbo = client.db("ndb");
console.log(connectedClient);
return dbo.createCollection("employee"); //returns promise object
})
.then((res) => {
console.log("Database and Collection created");
// close the connection
client.close();
})
.catch((err) => {
console.error("An error occurred:", err);
});