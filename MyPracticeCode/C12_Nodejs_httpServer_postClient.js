//npm install node-fetch

let fetch = require("node-fetch");
let reqobj = { name: "vijay", age: "22" };

fetch("https://localhost:8080/data.txt", {
  method: "POST",
  headers: "content-type:application/json",
  body: JSON.stringify(reqobj),
})
  .then((res) => res.text())
  .then((res) => console.log(res));
