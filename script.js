"use strict";
let score = 20;

const displayMessage = function() {
  document.querySelector(".message").textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//built the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
   
   //when guess is wrong

  }else if (guess !== secretNumber) {
    if (score > 1) { 
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }


  }
   
    //when dont
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  
});
//refresh the page
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = " ";

  document.querySelector("boyd").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

});
