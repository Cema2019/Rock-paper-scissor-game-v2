# Rock, Paper, Scissors Game

This is a simple Rock-Paper-Scissors game implemented in HTML, CSS, and JavaScript. The user can play against the computer, which randomly selects one of the three options.

A Pen created on CodePen.io. Original URL: [https://codepen.io/Cema2019/pen/ZEgLORa](https://codepen.io/Cema2019/pen/ZEgLORa).

## Features

- User-friendly interface with images for each choice.
- Displays the user's and computer's choices.
- Shows the result of each round.
- Keeps track of the user's win streak.

## How to Play

1. Open the game in your web browser.
2. Click on one of the images (rock, paper, or scissors) to make your choice.
3. The computer will randomly select its choice.
4. The result of the round will be displayed along with the choices made.
5. Your win streak will be tracked and displayed.

## Files

### index.html

The main HTML file containing the structure of the game.

### style.css

The CSS file for styling the game interface.

### script.js

The JavaScript file containing the game logic.

## Code Snippet

Here's a snippet of the JavaScript code for handling the game logic:

```javascript
const icons = ['rock', 'paper', 'scissors'];

const selectRandom = () => {
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

let count = 0;

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

const handlePlayerChoice = (playerChoice) => {
  const pcChoice = selectRandom();
  document.getElementById('playerChoice').textContent = playerChoice;
  document.getElementById('pcChoice').textContent = pcChoice;
  document.getElementById('winner').textContent = determineWinner(playerChoice, pcChoice);
  document.getElementById('counter').textContent = `Wins: ${count}`;
};

document.getElementById('rock').addEventListener('click', () => handlePlayerChoice('rock'));
document.getElementById('paper').addEventListener('click', () => handlePlayerChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => handlePlayerChoice('scissors'));


