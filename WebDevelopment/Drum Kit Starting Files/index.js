document.querySelectorAll(".drum").forEach((element) => {
  element.addEventListener("click", function () {
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
});

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(letter) {
  switch (letter) {
    case "w":
      playSound("tom-4.mp3");
      break;
    case "a":
      playSound("tom-3.mp3");
      break;
    case "s":
      playSound("tom-2.mp3");
      break;
    case "d":
      playSound("tom-1.mp3");
      break;
    case "j":
      playSound("snare.mp3");
      break;
    case "k":
      playSound("kick-bass.mp3");
      break;
    case "l":
      playSound("crash.mp3");
      break;
    default:
      console.log(letter);
  }
}

function playSound(soundFile) {
  let audio = new Audio("sounds/" + soundFile);
  audio.play();
}

function buttonAnimation(currentKey) {
  let drum = document.querySelector("." + currentKey);
  drum.classList.add("pressed");
  setTimeout(function () {
    drum.classList.remove("pressed");
  }, 100);
}
