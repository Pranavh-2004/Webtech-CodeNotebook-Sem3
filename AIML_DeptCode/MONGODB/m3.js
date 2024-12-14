//inserting a single document to employee Collection
// insertOne() is used to insert a single document to a collection
//document is same as a record in SQL

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
const data = { name: "John Doe", phone: "1234567890" };
const collection = client.db("ndb").collection("employee");
return collection.insertOne(data);
})
.then((result) => {
console.log("1 document inserted");
// close the connection
client.close();
})
.catch((err) => {
console.error("An error occurred:", err);
});