var express = require("express");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("connected!"))
  .catch((err) => console.log(err));
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3100, () => {
  console.log("server listening on port 3100");
});
