const icons = ['rock', 'paper', 'scissors'];

const selectRandom = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

let count = localStorage.getItem('clickcount') ? Number(localStorage.getItem('clickcount')) : 0;

// Function to determine the winner
const determineWinner = (playerChoice, pcChoice) => {
  if (playerChoice === pcChoice) return "It's a tie!";
    
  let result = (
    (playerChoice === 'rock' && pcChoice === 'scissors') ||
    (playerChoice === 'scissors' && pcChoice === 'paper') ||
    (playerChoice === 'paper' && pcChoice === 'rock')
  ) ? "You win!": "Computer wins!";
  
  if (result === "You win!") {
    count++;
  } else if (result === "Computer wins!") {
    count = 0;
  }

  localStorage.setItem('clickcount', count);
  
  return result;
};

// Function to keep the user wins total when the browser refreshes
function displayCounter() {
  if (localStorage.getItem('clickcount')) {
    document.getElementById('counter').textContent = `Wins: ${localStorage.getItem('clickcount')}`;
  } else {
    document.getElementById('counter').textContent = 0;
  }
}

// Function to handle the game logic when the user clicks on an option
const handlePlayerChoice = (playerChoice) => {
  const pcChoice = selectRandom();

  document.getElementById('playerChoice').textContent = playerChoice;
  document.getElementById('pcChoice').textContent = pcChoice;
  document.getElementById('winner').textContent = determineWinner(playerChoice, pcChoice);
  document.getElementById('counter').textContent = `Wins: ${localStorage.getItem('clickcount')}`;
};

// Attach event listeners directly to the elements with id
document.getElementById('rock').addEventListener('click', () => handlePlayerChoice ('rock'));
document.getElementById('paper').addEventListener('click', () => handlePlayerChoice ('paper'));
document.getElementById('scissors').addEventListener('click', () => handlePlayerChoice ('scissors'));

displayCounter();