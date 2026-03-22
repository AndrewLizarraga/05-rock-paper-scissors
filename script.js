// Get the buttons and result area from the page
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultText = document.getElementById("result");

// This function randomly picks rock, paper, or scissors for the computer
function getCPUChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  }

  if (randomNumber === 1) {
    return "paper";
  }

  return "scissors";
}

// This function compares the player and computer choices
function determineWinner(playerChoice, cpuChoice) {
  if (playerChoice === cpuChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    return "You win!";
  }

  return "You lose!";
}

// This function runs one full round and updates the page
function playRound(playerChoice) {
  const cpuChoice = getCPUChoice();
  const roundResult = determineWinner(playerChoice, cpuChoice);

  resultText.textContent = `YOU: ${playerChoice} vs CPU: ${cpuChoice} --> Result: ${roundResult}`;
}

// When the player clicks a button, play one round with that choice
rockButton.addEventListener("click", function() {
  playRound("rock");
});

paperButton.addEventListener("click", function() {
  playRound("paper");
});

scissorsButton.addEventListener("click", function() {
  playRound("scissors");
});

