class Dice {
  constructor() {
    this.randomNumber = this.getRandomNumber();
    this.img = this.createImgLink(this.randomNumber);
  }
  getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
  }

  createImgLink(number) {
    return "images/dice" + number + ".png";
  }
}
function throwDicee() {
  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");
  let dice1 = new Dice();
  let dice2 = new Dice();

  let player =
    dice1.randomNumber > dice2.randomNumber ? "Player 1" : "Player 2";
  let winner = document.querySelector(".winner");
  winner.classList.remove("hidden");
  winner.textContent = player + " is the winner!";

  img1.setAttribute("src", dice1.img);
  img2.setAttribute("src", dice2.img);
}
