let fs = require("fs");

fs.readFile("C8_NodejsFirst", "utf-8", (err, data) => {
  console.log(data);
  let now = new Date();
  console.log("File read at-" + now);
});

console.log("This is written first");

let data = fs.readFileSync("C8_NodejsFirst", "utf-8");
console.log(data);
