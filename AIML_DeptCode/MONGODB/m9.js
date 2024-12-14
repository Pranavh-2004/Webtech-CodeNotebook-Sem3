//dropping a collection
//drop();

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        const dbo = client.db("ndb");
        return dbo.collection("employee").drop();
    })
    .then((result) => {
        if (result) {
            console.log("collection dropped");
            
        } 
        client.close();
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });