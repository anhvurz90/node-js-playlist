var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res) {
  res.render("index28");
});

app.get("/contact", function(req, res) {
  console.log(req.query);
  res.render("contact30", {qs: req.query});
});

app.post("/contact", urlEncodedParser, function(req, res) {
  console.log(req.body);
  res.render("contact-success-30", {data: req.body});
});

app.get("/profile/:name", function(req, res) {
  var data = {age: 29, job: "ninja", hobbies: ["eating", "fighting", "fishing"]};
  res.render("profile27", {person: req.params.name, data: data});
});

app.listen(3000);
