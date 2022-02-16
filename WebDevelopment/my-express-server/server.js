//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p>haymanmk@gmail.com</p>");
});

app.get("/about", function (req, res) {
  res.send("I'm Hayman Chan, and coding is one of my favorite things to do.");
});

app.listen(3000, function () {
  console.log("Server has been connected.");
});
