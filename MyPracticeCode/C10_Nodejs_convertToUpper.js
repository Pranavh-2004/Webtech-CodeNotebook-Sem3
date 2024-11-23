let fs = require("fs");

let rdstr = fs.createReadStream("data.txt");
let wrstr = fs.createWriteStream("data1.txt");

rdstr.on("data", (chunk) => {
  data += chunk;
});
rdstr.on("end", () => {
  console.log(data);
});
rdstr.on("error", (err) => {
  console.log(err.stack);
});

wrstr.write(data.toUpperCase());
wrstr.end();
wrstr.on("finish", () => {
  console.log("Write completed");
});
wrstr.on("error", (err) => {
  console.log(err.stack);
});
