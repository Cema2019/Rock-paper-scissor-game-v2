const icons = ['rock', 'paper', 'scissors'];

const selectRandom = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

let count = 0;

// Function to determine the winner
const determineWinner = (playerChoice, pcChoice) => {
  if (playerChoice === pcChoice) return "It's a tie!";
    
  let result = (
    (playerChoice === 'rock' && pcChoice === 'scissors') ||
    (playerChoice === 'scissors' && pcChoice === 'paper') ||
    (playerChoice === 'paper' && pcChoice === 'rock')
  ) ? "You win!": "Computer wins!";
  
  if (result === "You win!") count++;
  if (result === "Computer wins!") count = 0;
  
  
  return result;
};

// Function to handle the game logic when the user clicks on an option
const handlePlayerChoice = (playerChoice) => {
  const pcChoice = selectRandom();

  document.getElementById('playerChoice').textContent = playerChoice;
  document.getElementById('pcChoice').textContent = pcChoice;
  document.getElementById('winner').textContent = determineWinner(playerChoice, pcChoice);
  document.getElementById('counter').textContent = `Wins: ${count}`;
};

// Attach event listeners directly to the elements with id
document.getElementById('rock').addEventListener('click', () => handlePlayerChoice ('rock'));
document.getElementById('paper').addEventListener('click', () => handlePlayerChoice ('paper'));
document.getElementById('scissors').addEventListener('click', () => handlePlayerChoice ('scissors'));