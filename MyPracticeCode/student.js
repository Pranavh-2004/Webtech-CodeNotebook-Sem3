let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  //refers to /student
  res.send("Sending all student records");
});

router.post("/:srn", (req, res) => {
  res.send("Sending student record for srn - " + req.params.srn);
});

module.exports = router;
