//inserting multiple documents to employee collection
//inserMany() is used to insert multiple documents to a collection

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;
MongoClient.connect(url)
.then((connectedClient) => {
client = connectedClient;
const dbo = client.db("ndb");
return dbo.createCollection("employee");
})
.then((res) => {

// Insert example data
const data = [
{ name: "Rohan", phone: "2233456744" },
{ name: "Jane Smith", phone: "9876543210" }
];
const collection = client.db("ndb").collection("employee");

return collection.insertMany(data);
})
.then((result) => {
console.log(`${result.insertedCount} documents inserted`); //result is a promise object and insertedCount is a property
// close the connection
client.close();
})
.catch((err) => {
console.error("An error occurred:", err);
});