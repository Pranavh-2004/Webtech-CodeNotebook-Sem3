//finding a document from employee collection
//finding all the documents
//find()

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;
let result;
MongoClient.connect(url)
.then((connectedClient) => {
client = connectedClient;
const dbo = client.db("ndb");
return dbo.collection("employee").find({}, { projection: {_id:1,phone:
1,name:1} }).toArray(result)
})

.then((result) => {
console.log(" Document fetched");
console.log(result);
client.close();
})
.catch((err) => {
console.error("An error occurred:", err);
});