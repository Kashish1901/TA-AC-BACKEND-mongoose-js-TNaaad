var express = require("express");

var mongoose = require("mongoose");

var app = express();
app.get("/", (req, res) => {
  res.send("welcome!");
});

app.listen(4000, () => {
  console.log("server listening on port 4k");
});
