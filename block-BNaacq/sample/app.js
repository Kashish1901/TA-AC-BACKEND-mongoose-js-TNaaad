var express = require("express");
var mongooose = require("mongoose");

mongooose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch((err) => console.log(err));

var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the blog!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
