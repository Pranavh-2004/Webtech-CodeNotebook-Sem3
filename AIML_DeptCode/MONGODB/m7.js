//updating a document
//updateOne()

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        const dbo = client.db("ndb");
        
        // Log the query to see what you're looking for
        const query = { name: "Jane Smith", phone: "9876543210" };
        const newquery = { $set: {name: "Smith", phone: "8876543210"} };
        
        return dbo.collection("employee").updateOne(query, newquery );
    })
    .then((result) => {
        if (result) {
            console.log("Document updated");
          
        } 
        client.close();
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });