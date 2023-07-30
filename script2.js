let userScore = 0;
let computerScore = 0;
let turns = 0;

const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
const chooseButtons = document.querySelectorAll(".choose-button");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultMessageDisplay = document.getElementById("resultMessageDisplay");
const nextButton = document.getElementById("nextButton");

chooseButtons.forEach(button => {
  button.addEventListener("click", function () {
    const userChoice = parseInt(this.getAttribute("data-number"));
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    updateScore(userChoice, computerChoice);
    displayResult(userChoice, computerChoice);
    turns++;

    if (turns === 12) {
      endGame();
    }
  });
});

function updateScore(userChoice, computerChoice) {
  if (
    (userChoice === 1 && computerChoice === 2) ||
    (userChoice === 2 && computerChoice === 3) ||
    (userChoice === 3 && computerChoice === 1)
  ) {
    userScore++;
  } else if (
    (userChoice === 1 && computerChoice === 3) ||
    (userChoice === 2 && computerChoice === 1) ||
    (userChoice === 3 && computerChoice === 2)
  ) {
    computerScore++;
  }

  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}
function displayResult(userChoice, computerChoice) {
    const userChoiceImage = getImageFilename(userChoice);
    const computerChoiceImage = getImageFilename(computerChoice);
    userChoiceImage.getElementById('computerChoiceContainer');
    computerChoiceImage.getElementById('computerChoiceContainer');
  
    userChoiceDisplay.innerHTML = `<h2>User's Choice:</h2><img src="${userChoiceImage}" alt="">`;
    computerChoiceDisplay.innerHTML = `<h2>Computer's Choice:</h2><img src="${computerChoiceImage}" alt="">`;
  
    if (userChoice === computerChoice) {
      resultMessageDisplay.textContent = "It's a tie!";
    } else if (
      (userChoice === 1 && computerChoice === 2) ||
      (userChoice === 2 && computerChoice === 3) ||
      (userChoice === 3 && computerChoice === 1)
    ) {
      resultMessageDisplay.textContent = "Computer gets the point!";
    } else {
      resultMessageDisplay.textContent = "You get the point!";
    }
  }

function endGame() {
  let resultMessage;
  if (userScore > computerScore) {
    resultMessage = "Congratulations! You win!";
  } else if (userScore < computerScore) {
    resultMessage = "Computer wins! Better luck next time.";
  } else {
    resultMessage = "It's a tie!";
  }

  alert(`${resultMessage}\nFinal Score:\nUser: ${userScore}\nComputer: ${computerScore}`);
  
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  turns = 0;
  userScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
}
function getImageFilename(choice) {
    switch (parseInt(choice)) {
      case 1:
        return "emperor.jpg";
      case 2:
        return "citizen.jpg";
      case 3:
        return "slave.jpg";
      default:
        return "";
    }
  }
  function chooseCard(userChoice) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
  
    updateScore(userChoice, computerChoice);
    displayResult(userChoice, computerChoice);
    displayComputerChoice(computerChoice);
    turns++;
  
    if (turns === 12) {
      endGame();
    }
  }
  nextButton.addEventListener("click", function () {
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    resultMessageDisplay.textContent = "";
    turns = 0;
    userScore = 0;
    computerScore = 0;
    userScoreElement.textContent = "0";
    computerScoreElement.textContent = "0";
  });

  function displayComputerChoice(computerChoice) {
    const computerChoiceImage = getImageFilename(computerChoice);
    const computerChoiceContainer = document.getElementById("computerChoiceContainer");
    
    // Create a new <img> element
    const imgElement = document.createElement("img");
    imgElement.src = computerChoiceImage;
    imgElement.alt = "Computer's Choice";
    
    // Clear any existing content in the container
    computerChoiceContainer.innerText = "Computer's Choice";
    
    // Append the <img> element to the container
    computerChoiceContainer.appendChild(imgElement);
    console.log(computerChoiceImage)
  }
  
