let counter = 0;
let playerWins = 0;
let cpuWins = 0;
let ties = 0;
let errors = 0;

function playerChoice() {
  let playerAnswer = prompt("Rock, paper, or scissors? Your choice!");
  return playerAnswer.toLowerCase();
}

function computerChoice() {
  let array = ["rock", "paper", "scissors"];
  let cpuAnswer = array[Math.floor(Math.random() * array.length)];
  return cpuAnswer;
}

function checkWinner(choiceP, choiceC) {
  const cpuWinMessage = "CPU Wins";
  const playerWinMessage = "Player Wins";
  const errorMessage = "Use the correct spelling";
  const tieMessage = "It's a tie";

  if (choiceP === choiceC) {
    ties++;
    return tieMessage;
  } else if (
    (choiceP === "scissors" && choiceC === "paper") ||
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock")
  ) {
    playerWins++;
    return playerWinMessage;
  } else if (
    (choiceC === "scissors" && choiceP === "paper") ||
    (choiceC === "rock" && choiceP === "scissors") ||
    (choiceC === "paper" && choiceP === "rock")
  ) {
    cpuWins++;
    return cpuWinMessage;
  } else {
    errors++;
    return errorMessage;
  }
}

function playRound(playerSelection) {
  counter++;
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);

  console.log(winner);
  console.log(computerSelection);
  console.log(playerSelection);
  const resultElement = document.getElementById("result");
  resultElement.textContent = "You: " + playerSelection + " vs " + "CPU: " + computerSelection + " = " + winner;

}

function counterReset(){
  counter = 0;
    ties = 0;
    cpuWins = 0;
    playerWins = 0;
    errors = 0;
}

function gameTurns(event) {
  const playerSelection = event.target.id;
  playRound(playerSelection);

  if (counter === 5) {
    let endResult = document.getElementById("end");
    endResult.textContent =
     "Game Over! Results:\n" +
      "Ties: " + ties + "\n" +
      "CPU Wins: " + cpuWins + "\n" +
      "Player Wins: " + playerWins + "\n" +
      "\nRestart the game.";

    counterReset();
    } else {
      let endResult = document.getElementById("end");
      endResult.textContent ="";
    }
}

rock.addEventListener('click', gameTurns);
paper.addEventListener('click', gameTurns);
scissors.addEventListener('click', gameTurns);







/* const button1 = document.querySelector('#button1');

function consoleLog(e){
  let answer = prompt("Enter rock, paper or scissors");
  let array = ["rock", "paper", "scissors"];
  let cpuAnswer = array[Math.floor(Math.random() * array.length)];
  console.log(cpuAnswer);
  if(cpuAnswer === answer.toLowerCase()){
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}



button1.addEventListener('click', consoleLog);
 */


















/* const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = 'Hey Im Red!'
para.style.cssText = 'color: red; background: black;';

const h3 = document.createElement('h3');
h3.textContent = 'Hey Im blue h3!'
h3.style.cssText = 'color: blue; background: black;';

container.appendChild(para);
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'background: pink; border: 2px solid black;';

const h1 = document.createElement('h1');
h1.textContent = 'Im in div';

const p2 = document.createElement('p');
p2.textContent = 'Me too';

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('mouseup', () => {
    alert(button.id);
  });
}); */
