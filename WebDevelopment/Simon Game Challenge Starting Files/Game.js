$(document).ready(function () {
  $(document).keypress(function () {
    if (!gameStarted) startGaming();
  });
});

let gameStarted = false;
let listOColors = [];
let countOClicking = 0;

function startGaming() {
  headerMessenger("Press A Key to Start");
  gameStarted = true;
  listOColors = [];
  countOClicking = 0;
  getAColor();
  arrangeButtonEvent();
}

function getAColor() {
  let buttonColor;
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      buttonColor = "green";
      break;
    case 1:
      buttonColor = "red";
      break;
    case 2:
      buttonColor = "yellow";
      break;
    case 3:
      buttonColor = "blue";
      break;
    default:
      console.log("Error when calling function getAColor");
  }
  listOColors.push(buttonColor);
  pressButton(buttonColor);
  headerMessenger("Level " + listOColors.length);
  console.log(listOColors);
}

function arrangeButtonEvent() {
  $(".btn").on("mousedown", function () {
    buttonPressedCallback(this.id);
  });
  $(".btn").on("mouseup", function () {
    buttonReleasedCallback(this.id);
  });
}

function removeButtonEvent() {
  $(".btn").off("mousedown");
  $(".btn").off("mouseup");
}

function buttonPressedCallback(id) {
  pressButton(id);
  if (id != listOColors[countOClicking] && gameStarted) {
    playSound("wrong");
    headerMessenger("Game Over, Press Any Key to Restart");
    gameStarted = false;
    removeButtonEvent();
  }
}

function buttonReleasedCallback() {
  countOClicking++;
  console.log(countOClicking);
  if (countOClicking >= listOColors.length && gameStarted) {
    setTimeout(function () {
      countOClicking = 0;
      getAColor();
      console.log("button released");
    }, 1000);
  }
}

function pressButton(button) {
  $("#" + button).addClass("pressed");
  setTimeout(function () {
    $("#" + button).removeClass("pressed");
  }, 100);

  switch (button) {
    case "green":
      playSound(button);
      break;
    case "red":
      playSound(button);
      break;
    case "yellow":
      playSound(button);
      break;
    case "blue":
      playSound(button);
      break;
  }
}

function playSound(sound) {
  let audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

function headerMessenger(msg) {
  $("#level-title").text(msg);
}
