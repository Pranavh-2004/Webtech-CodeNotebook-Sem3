let fs = require("fs");

/*
fs.writeFile
fs.open with w or r mode
fs.appendFile

creates file if non existent
*/

fs.appendFile("new.txt", "Data for new.txt", (err) => {
  if (err) console.log("Append Failed - " + err.message);
  else console.log("Append Successful");
});

fs.open("new.txt", "a", (fd, err) => {
  fd.write("New Data", (err) => {
    console.log("Writing error - " + err.message);
  });
});

let data = fs.readFileSync("new.txt", "utf-8");
let lines = data.split("\r?\n");

for (let line of lines) console.log(line);

let linereader = require("linebyline");

let rl = linereader("new.txt");

rl.on("line", (line, lnum, numbytes) => {
  console.log(line);
});

rl.on("error", (err) => {
  console.log(err);
});

rl.on("end", () => {
  console.log("Read line completed");
});
