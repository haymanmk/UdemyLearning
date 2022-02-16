$(function () {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?lat=25.07744419109733&lon=121.38880386137564&units=metric&appid=4b06403c0ce5478d965c72a85ed0cdc3";
  console.log(url);
  let request = $.ajax({
    url: url,
    method: "POST",
    // data: {
    //   appid: "4b06403c0ce5478d965c72a85ed0cdc3",
    //   lat: "25.07744419109733",
    //   lon: "121.38880386137564",
    //   units: "metric",
    // },
    dataType: "JSON",
    success: function (data) {
      console.log(data.main.temp);
    },
    error: function (msg) {
      console.log(msg);
    },
  });

  // request.done(function (msg) {
  //   console.log(msg);
  // });
  console.log("index.js is executed");
});
