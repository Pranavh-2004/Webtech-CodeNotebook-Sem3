let fs = require("fs");

let wrstr = fs.createWriteStream("data1.txt");
wrstr.write("Hello World. I can ignore you... ");
wrstr.end();
wrstr.on("finish", () => {
  console.log("Write completed");
});
wrstr.on("error", (err) => {
  console.log(err.stack);
});
