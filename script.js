"use strict";
let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//built the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "N Number";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    //when dont
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//refresh the page
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = " ";

  document.querySelector("boyd").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
