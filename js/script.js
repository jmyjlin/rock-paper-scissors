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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let cChoiceDisplay = document.querySelector("#c-choice-display");
  let pChoiceDisplay = document.querySelector("#p-choice-display");

  let cScoreDisplay = document.querySelector("#computer-score");
  let hScoreDisplay = document.querySelector("#player-score");
  cScoreDisplay.textContent = computerScore;
  hScoreDisplay.textContent = humanScore;

  let humanScoreTitle = document.querySelector("#pscore-title");
  let computerScoreTitle = document.querySelector("#cscore-title");

  function reset() {
    humanScore = 0;
    computerScore = 0;
    cScoreDisplay.textContent = computerScore;
    hScoreDisplay.textContent = humanScore;
    updateColors();
    cChoiceDisplay.textContent = "???";
    pChoiceDisplay.textContent = "???";
  }

  function isRoundOver() {
    if (humanScore >= 5 || computerScore >= 5) {
      alert("Game Over! " + (humanScore > computerScore ? "Player" : "Computer") + " has won!");
      reset();
    }
  }

  function updateColors() {
    if (humanScore > computerScore) {
      humanScoreTitle.style.color = "#10B981";
      computerScoreTitle.style.color = "#EF4444";
    } else if (humanScore < computerScore) {
      computerScoreTitle.style.color = "#10B981";
      humanScoreTitle.style.color = "#EF4444";
    } else {
      humanScoreTitle.style.color = "#000";
      computerScoreTitle.style.color = "#000";
    }
  }

  function playRound(humanChoice, computerChoice) {
    let resultPara = document.querySelector("#result-txt");
    if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "PAPER") {
      resultPara.textContent = "You win! Paper beats Rock.";
      humanScore += 1;
    } else if (computerChoice.toUpperCase() === "ROCK" && humanChoice.toUpperCase() === "SCISSORS") {
      resultPara.textContent = "You lose! Rock beats scissors.";
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "ROCK") {
      resultPara.textContent = "You lose! Paper beats rock.";
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "PAPER" && humanChoice.toUpperCase() === "SCISSORS") {
      resultPara.textContent = "You win! Scissors beats paper.";
      humanScore += 1;
    } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "PAPER") {
      resultPara.textContent = "You lose! Scissors beats paper.";
      computerScore += 1;
    } else if (computerChoice.toUpperCase() === "SCISSORS" && humanChoice.toUpperCase() === "ROCK") {
      resultPara.textContent = "You win! Rock beats scissors.";
      humanScore += 1;
    } else {
      resultPara.textContent = "It's a tie! No one wins.";
    }
  }

  
  let rockButton = document.querySelector("#rock");
  rockButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    cChoiceDisplay.textContent = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    pChoiceDisplay.textContent = "Rock";
    playRound("rock", computerSelection);
    cScoreDisplay.textContent = computerScore;
    hScoreDisplay.textContent = humanScore;
    updateColors();
    isRoundOver();
  });
  let paperButton = document.querySelector("#paper");
  paperButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    cChoiceDisplay.textContent = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    pChoiceDisplay.textContent = "Paper";
    playRound("paper", computerSelection);
    cScoreDisplay.textContent = computerScore;
    hScoreDisplay.textContent = humanScore;
    updateColors();
    isRoundOver();
  });
  let scissorsButton = document.querySelector("#scissors");
  scissorsButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    cChoiceDisplay.textContent = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    pChoiceDisplay.textContent = "Scissors";
    playRound("scissors", computerSelection);
    cScoreDisplay.textContent = computerScore;
    hScoreDisplay.textContent = humanScore;
    updateColors();
    isRoundOver();
  });
};


playGame();