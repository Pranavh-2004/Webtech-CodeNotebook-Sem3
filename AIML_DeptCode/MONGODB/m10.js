//removing criteria
//remove()

const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
let client;

MongoClient.connect(url)
    .then((connectedClient) => {
        client = connectedClient;
        const dbo = client.db("ndb");
        return dbo.collection("employee").remove({name: "John Doe"});
    })
    .then((result) => {
        if (result) {
            console.log("removed");
            
        } 
        client.close();
    })
    .catch((err) => {
        console.error("An error occurred:", err);
    });