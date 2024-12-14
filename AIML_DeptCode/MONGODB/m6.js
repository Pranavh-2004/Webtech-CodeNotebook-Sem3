//finding a document from employee collection
//finding an individual document
//findOne()

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        const dbo = client.db("ndb");
        
        // Log the query to see what you're looking for
        const query = { name: "Jane Smith", phone: "9876543210" };
        console.log("Querying for:", query);
        
        return dbo.collection("employee").findOne(query);
    })
    .then((result) => {
        if (result) {
            console.log("Document fetched");
            console.log(result);
        } else {
            console.log("No document found matching the query.");
        }
        client.close();
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });