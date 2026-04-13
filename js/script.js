function getComputerChoice() {
  const randomNumber = Math.floor((Math.random() * 3));
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors? ");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "PAPER") {
      console.log("You win! Paper beats Rock.");
      humanScore += 1;
    } else if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "SCISSORS") {
      console.log("You lose! Rock beats scissors.");
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "ROCK") {
      console.log("You lose! Paper beats rock.");
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "SCISSORS") {
      console.log("You win! Scissors beats paper.");
      humanScore += 1;
    } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "PAPER") {
      console.log("You lose! Scissors beats paper.");
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "ROCK") {
      console.log("You win! Rock beats scissors.");
      humanScore += 1;
    } else {
      console.log("It's a tie! No one wins.");
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();