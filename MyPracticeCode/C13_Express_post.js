let express = require("express");

let app = express();
let studentRouter = require(".student.js");

app.use(".student.js", studentRouter);

let courseRouter = require();
