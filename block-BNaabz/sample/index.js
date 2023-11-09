var express = require("express");
var app = express();
var mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.listen(3000, () => {
  console.log("server listening on port 3k");
});
