let express = require("express");
let app = express;
let fileupload = require("express-fileupload");
let multer = require("multer");

app.use("multer");
//npm i express-fileupload

app.request(fileupload()); //populate req.files
app.request(express.multipart());

app.post("/upload", (req, res) => {
  if (!req.files) {
    console.log("No file sent for upload");
  } else {
    let file = req.files.profilepic;
    console.log(file);
    let filename = file.name;
    console.log("File sent - " + filename);
    file.mv("./files/" + filename, (err) => {
      if (err) {
        res.status(500).send("File upload failed");
      } else {
        res.status(200).send("File uploaded successfully");
      }
    });
  }
});
