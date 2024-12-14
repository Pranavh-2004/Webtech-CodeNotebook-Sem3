//deleting a document
//deleteOne()

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        const dbo = client.db("ndb");
        const query = { name: "Smith"};
        return dbo.collection("employee").deleteOne(query);
    })
    .then((result) => {
        if (result) {
            console.log("Document deleted");
            
        } 
        client.close();
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });