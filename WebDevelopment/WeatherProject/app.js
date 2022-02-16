const express = require("express");
const https = require("https");

const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=25.07744419109733&lon=121.38880386137564&units=metric&appid=4b06403c0ce5478d965c72a85ed0cdc3";
  //   https.get(url, function (response) {
  //     console.log(response.statusCode);
  //     response.on("data", function (data) {
  //       let weatherData = JSON.parse(data);
  //       let temp = weatherData.main.temp;
  //       let description = weatherData.weather[0].description;
  //       let weatherIcon = weatherData.weather[0].icon;
  //       let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  //       console.log(description);
  //       res.write(`<h1>${description}<h1>`);
  //       res.write(`<img src=${weatherIconURL}>`);
  //       res.send();
  //     });
  //   });
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("Listening at port 3000");
});
