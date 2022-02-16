const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var weight = req.body.weight;
  var height = req.body.height;
  console.log(weight / (height * height));
  res.send("Hi there, your BMI is " + Math.round(weight / (height * height)));
});
app.listen(3000);
