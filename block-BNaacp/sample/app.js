var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("connected successfully!");
  })
  .catch((err) => console.log(err));

var app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/users", (req, res, next) => {
  User.create(
    {
      name: "altcampus",
      email: "alt123@gmail.com",
      sports: ["cricket", "khokho"],
    },
    {
      name: "altcampus2",
      email: "alt23@gmail.com",
      sports: ["cricket", "khokho", "basketball"],
    }
  ).then((result) => res.json(result));
});

app.get("/users", (req, res) => {
  User.find({ name: "altcampus" }).then((result) => {
    res.json(result);
  });
});

//app.get("/users/:id", (req, res) => {
//var id = req.params.id;
//User.findById({ _id: "id " }).then((result) => {
//console.log(result);
//});
//});
app.put("/users/:id", (req, res) => {
  var id = req.params.id;
  User.updateOne(id, req.body, { new: true }).then((result) => {
    res.send(result);
  });
});
app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
