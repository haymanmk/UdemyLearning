const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  //   res.send("Server is running...");
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;
  console.log(fName, lName, email);
  axios({
    method: "post",
    url: "https://us14.api.mailchimp.com/3.0/lists",
    auth: {
      username: "Hayman",
      password: "3dae5aaed546c879345b6cf249dd0526-us14",
    },
    headers: {
      "content-type": "application/json",
    },
    data: {
      FNAME: fName,
      LNAME: lName,
      email: email,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((msg) => {
      console.log(msg);
    });
  res.sendFile(__dirname + "/signup.html");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
