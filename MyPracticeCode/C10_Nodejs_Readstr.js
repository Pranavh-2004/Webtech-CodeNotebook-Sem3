let fs = require("fs");

let rdstr = fs.createReadStream("data.txt");
rdstr.on("data", (chunk) => {
  data += chunk;
});
rdstr.on("end", () => {
  console.log(data);
});
rdstr.on("error", (err) => {
  console.log(err.stack);
});
