var express = require("express");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("connected!"))
  .catch((err) => console.log(err));

var app = express();

app.get("/user", (req, res) => {
  console.log("Welcome user!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
