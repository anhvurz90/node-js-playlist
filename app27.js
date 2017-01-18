var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index27");
});

app.get("/contact", function(req, res) {
  res.render("contact27");
});

app.get("/profile/:name", function(req, res) {
  var data = {age: 29, job: "ninja", hobbies: ["eating", "fighting", "fishing"]};
  res.render("profile27", {person: req.params.name, data: data});
});

app.listen(3000);