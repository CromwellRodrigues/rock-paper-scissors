const choices = ["rock", "paper", "scissors", "lizard", "spock"];

const playerDisplay = document.getElementById("playerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

const playerScore = document.getElementById("playerScore");

const computerScore = document.getElementById("computerScore");

let playerScoreValue = 0;
let computerScoreValue = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`Computer choice : ${computerChoice}`);

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" || computerChoice === "lizard"
            ? "You win 🏆" 
            : "You lose 😭";
        break;

      case "paper":
        result =
          computerChoice === "rock" || computerChoice === "spock"
            ? "You win 🏆"
            : "You lose 😭";
        break;

      case "scissors":
        result =
          computerChoice === "paper" || computerChoice === "lizard"
            ? "You win 🏆"
            : "You lose 😭";
        break;

      case "lizard":
        result =
          computerChoice === "spock" || computerChoice === "paper"
            ? "You win 🏆"
            : "You lose 😭";
        break;

      case "spock":
        result =
          computerChoice === "rock" || computerChoice === "scissors"
            ? "You win 🏆"
            : "You lose 😭";
    }
  }

  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;

    resultDisplay.classList.remove("green-text", "red-text", "orange-text");
    
    console.log(`Result : ${result.trim()}`);

  switch (result.trim()) {
    case "You win 🏆":
        resultDisplay.classList.add("green-text");
        playerScoreValue++;
        playerScore.textContent = playerScoreValue;
      break;

    case "You lose 😭":
          resultDisplay.classList.add("red-text");
            computerScoreValue++;
            computerScore.textContent = computerScoreValue;
      break;

    case "It's a tie!":
      resultDisplay.classList.add("orange-text");
      break;
  }
}

// document.querySelectorAll(".choices button").forEach((button) => {
//   button.addEventListener("click", function () {
//     // Remove existing tooltips
//     document
//       .querySelectorAll(".tooltip")
//       .forEach((tooltip) => tooltip.remove());

//     // Create a new tooltip
//     const tooltip = document.createElement("div");
//     tooltip.className = "tooltip";
//     tooltip.textContent = this.getAttribute("data-title");
//     document.body.appendChild(tooltip);

//     // Position the tooltip
//     const rect = this.getBoundingClientRect();
//     tooltip.style.left = `${rect.left + rect.width / 2}px`;
//     tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;

//     // Remove the tooltip after a delay
//     setTimeout(() => tooltip.remove(), 2000);
//   });
// });