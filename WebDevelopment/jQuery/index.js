// let h1 = $("h1");
// console.log(h1.css("color", "blue"));

// $("button").click(function () {
//   $("h1").css("color", "yellow");
// });
$("h1").on("mouseover", function () {
  $("h1").addClass("enlarge");
});

$("h1").on("mouseleave", function () {
  $("h1").removeClass("enlarge");
});

$(document).keypress(function (event) {
  $("h1").html(event.key);
  console.log(event.key);
});
